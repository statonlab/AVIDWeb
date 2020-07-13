<template>
    <div class="card mb-3">
        <div class="card-body">
            <div class="mb-2 d-flex align-items-center">
                <div class="flex-grow-1 pb-2">
                    <strong>Sharing</strong>
                </div>
                <button class="flex-shrink-1 btn btn-link" @click.prevent="inviteUser()">
                    <icon name="add"/>
                    <span>Invite</span>
                </button>
            </div>
            <form action="" @submit.prevent="inviteUser()">
                <div class="mb-4">
                    <dropdown class="mb-0"
                              autocomplete
                              v-model="userForm.user_id"
                              :options="userOptions"
                              placeholder="Find a user"
                              @search="userSearch = $event"
                              :total="total"
                              ref="user" />
                    <div class="form-text text-danger" v-if="userForm.errors.has('user_id')">
                        {{ userForm.errors.first('user_id') }}
                    </div>
                </div>
            </form>
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
    </div>
</template>

<script>
  import Avatar from './Avatar'
  import Icon from './Icon'
  import Dropdown from './Dropdown'
  import User from '../helpers/User'
  import Form from '../forms/Form'

  export default {
    name: 'SiteSharingCard',

    components: {Icon, Avatar, Dropdown},

    props: {
      site: {required: true},
    },

    data() {
      return {
        User        : User,
        loading     : true,
        user        : null,
        sharedWith  : [],
        users       : [],
        userOptions : [],
        invitations : [],
        userSearch  : '',
        total       : 0,
        userForm    : new Form({
          user_id       : '',
        }),
      }
    },

    watch: {
      userSearch() {
        this.loadUsers()
      }
    },

    mounted() {
      this.loadUsers()
      this.loadSharedUsers()
      this.loadInvitations()
    },

    methods: {
      async loadUsers() {
        try {
          const {data} = await axios.get(`/web/user-sites/users`, {
            params     : {
              site_id  : this.site.id,
              search   : this.userSearch,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })

          this.users = data.data
          this.total = data.total
          this.userOptions = data.data.map(u => {
            return {
              label : u.name,
              value : u.id,
            }
          })
          this.loading  = false
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            this.request = null
          }
        }
      },

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
            this.loading = false
            this.request = null
          }
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
          if (e.response && e.response.status !== 422) {
            this.$notify({
              text: 'Unable to send invite. Please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
      },

      async toggleEdit(user) {
        try {
          const {data} = await axios.put(`/web/user-sites/site/${this.site.id}/user/${user.id}/toggle-edit`)
          user.can_edit = data.editable
          this.$notify({
            type: 'success',
            text: 'Updated user permissions successfully',
          })
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to change user permissions. Please try refreshing the page.',
            type: 'error',
          })
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
              console.error(e)
              this.$notify({
                text: 'Unable to cancel sharing. Please try refreshing the page.',
                type: 'error',
              })
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
              console.error(e)
              this.$notify({
                text: 'Unable to delete invitation. Please try refreshing the page.',
                type: 'error',
              })
            }
          },
        })
      },
    },
  }
</script>