<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="mb-2 d-flex align-items-center">
                <div class="flex-grow-1">
                    <strong>Sharing</strong>
                </div>
                <div class="flex-shrink-0">
                    <button class="btn btn-link" @click.prevent="showShareForm = true">
                        <icon name="add" />
                        <span>Invite</span>
                    </button>
                </div>
            </div>
            <p class="text-muted">Click the "+ Invite" button to begin sharing sites with other users.</p>
            <div v-if="sharedWith.length !== 0" class="mb-2">
                <div class="mb-2">
                    <strong>Shared with</strong>
                </div>
                <div v-for="(user, i) in sharedWith"
                     class="d-flex align-items-center hover-visible-container hover-highlight px-4 py-2"
                     :class="{'mt-2': i !== 0}">
                    <div class="flex-shrink-0">
                        <avatar :user="user" small/>
                    </div>
                    <div class="flex-grow-1 px-2">
                        <div class="font-weight-bold">{{ user.name }}</div>
                    </div>
                    <div class="flex-shrink-0 hover-visible">
                        <div class="dropdown">
                            <button class="btn btn-sm"
                                    data-toggle="dropdown"
                                    v-tooltip="`Settings`">
                                <icon name="chevron-down-outline"/>
                            </button>
                            <div class="dropdown-menu align-items-center">
                                <a href="#"
                                   @click.prevent="toggleEdit(user)"
                                   class="dropdown-item">
                                    <icon :name="user.can_edit ? 'close' : 'create'"/>
                                    <span>{{user.can_edit ? 'Disallow user to edit' : 'Allow user to edit'}}</span>
                                </a>
                                <a href="#"
                                   @click.prevent="cancelShare(user)"
                                   class="dropdown-item">
                                    <icon name="trash"/>
                                    <span>Cancel Sharing</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="invitations.length !== 0">
                <div class="mb-2">
                    <strong>Pending</strong>
                </div>
                <div class="d-flex align-items-center hover-visible-container hover-highlight px-4 py-2"
                     v-for="invitation in invitations"
                     v-if="invitation.status === 'pending'">
                    <div class="flex-shrink-0">
                        <avatar :user="invitation.recipient" small/>
                    </div>
                    <div class="flex-grow-1 px-2">
                        <div class="font-weight-bold">{{ invitation.recipient.name }}</div>
                    </div>
                    <div class="flex-shrink-0 hover-visible">
                        <button class="btn btn-link"
                                v-tooltip="`Delete Invitation`"
                                @click.prevent="deleteInvite(invitation)">
                            <icon name="trash"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <site-sharing-form
                :site="site"
                v-if="showShareForm"
                @create="loadInvitations()"
                @close="showShareForm = false"/>
    </div>
</template>

<script>
  import Errors from '../forms/Errors'
  import Avatar from './Avatar'
  import Icon from './Icon'
  import Dropdown from './Dropdown'
  import User from '../helpers/User'
  import Form from '../forms/Form'
  import SiteSharingForm from '../forms/SiteSharingForm'

  export default {
    name: 'SiteSharingCard',

    components: {Icon, Avatar, Dropdown, SiteSharingForm},

    props: {
      site: {required: true},
    },

    data() {
      return {
        User        : User,
        loading     : true,
        user        : null,
        sharedWith  : [],
        invitations : [],
        userSearch  : '',
        userForm    : new Form({
          user_id       : '',
        }),
        showShareForm: false,
      }
    },

    mounted() {
      this.loadSharedUsers()
      this.loadInvitations()
    },

    methods: {
      async loadSharedUsers() {
        try {
          const {data} = await axios.get(`/web/user-sites/shared`, {
            params     : { site_id: this.site.id },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })

          this.sharedWith = data
          this.loading  = false
        } catch (e) {
          if (!axios.isCancel(e)) {
            if (e.response && e.response.status === 403) {
              this.$alert('You are not authorized to complete this action.')
            } else if (e.response && e.response.status === 422) {
              const errors = new Errors(e.response.data)
              this.$alert(errors.toArray().join(' '))
            } else {
              this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
            }
            console.error(e)
          }

          this.loading = false
        }
      },

      async loadInvitations() {
        try {
          const {data} = await axios.get(`/web/site-invitations`, {
            params: {
              site_id: this.site.id,
            }
          })
          this.invitations = data
        } catch (e) {
          if (e.response && e.response.status === 403) {
            this.$alert('You are not authorized to complete this action.')
          } else if (e.response && e.response.status === 422) {
            const errors = new Errors(e.response.data)
            this.$alert(errors.toArray().join(' '))
          } else {
            this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
          }
          console.error(e)
        }

        this.loading = false
      },

      async inviteUser() {
        try {
          await this.userForm.post(`/web/sites/${this.site.id}/invitations`)
          this.$notify({
            type: 'success',
            text: 'Invitation sent successfully.',
          })
          this.user = null
          this.loadInvitations()
        } catch (e) {
          if (e.response && e.response.status === 403) {
            this.$alert('You are not authorized to complete this action.')
          } else if (e.response && e.response.status === 422) {
            const errors = new Errors(e.response.data)
            this.$alert(errors.toArray().join(' '))
          } else {
            this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
          }
          console.error(e)
        }
      },

      async toggleEdit(user) {
        try {
          const {data} = await axios.put(`/web/user-sites/site/${this.site.id}/user/${user.id}/toggle-edit`)
          this.sharedWith = this.sharedWith.map(u => u.id === user.id ? {...u, can_edit: data.editable} : u)
          this.$notify({
            type: 'success',
            text: 'Updated user permissions successfully',
          })
        } catch (e) {
          if (e.response && e.response.status === 403) {
            this.$notify({
              text: 'You are not authorized to complete this action.',
              type: 'error',
            })
          } else {
            this.$notify({
              text: 'Unable to change user permissions. Please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
      },

      cancelShare(user) {
        this.$confirm({
          title    : `Cancel sharing with ${user.name}`,
          text     : 'This action is permanent.',
          onConfirm: async () => {
            try {
              await axios.delete(`/web/user-sites/site/${this.site.id}/user/${user.id}`)
              this.sharedWith = this.sharedWith.filter(u => u.id !== user.id)
              this.$notify({
                type: 'success',
                text: 'Canceled sharing with user successfully',
              })
            } catch (e) {
              if (e.response && e.response.status === 403) {
                this.$notify({
                  text: 'You are not authorized to complete this action.',
                  type: 'error',
                })
              } else if (e.response && e.response.status === 422) {
                const errors = new Errors(e.response.data)
                this.$alert(errors.toArray().join(' '))
              } else {
                this.$notify({
                  text: 'Unable to cancel sharing. Please try refreshing the page.',
                  type: 'error',
                })
              }
              console.error(e)
            }
          },
        })
      },

      deleteInvite(invitation) {
        this.$confirm({
          title    : `Delete ${invitation.recipient.name}'s Invitation`,
          text     : 'This action is permanent.',
          onConfirm: async () => {
            try {
              await axios.delete(`/web/site/invitations/${invitation.id}`)
              this.invitations = this.invitations.filter(i => i.id !== invitation.id)
              this.$notify({
                type: 'success',
                text: 'Invitation deleted successfully',
              })
            } catch (e) {
              if (e.response && e.response.status === 403) {
                this.$notify({
                  text: 'You are not authorized to complete this action.',
                  type: 'error',
                })
              } else if (e.response && e.response.status === 422) {
                const errors = new Errors(e.response.data)
                this.$alert(errors.toArray().join(' '))
              } else {
                this.$notify({
                  text: 'Unable to delete invitation. Please try refreshing the page.',
                  type: 'error',
                })
              }
              console.error(e)
            }
          },
        })
      },
    },
  }
</script>
