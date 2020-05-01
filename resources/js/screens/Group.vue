<template>
    <div>
        <div class="d-flex align-items-center justify-content-center py-5" v-if="loading">
            <inline-spinner class="text-primary"/>
        </div>

        <div v-if="!loading && group">
            <div class="d-flex mb-3 align-items-center">
                <div class="flex-grow-1">
                    <h1 class="page-title">
                        {{ group.name }}
                    </h1>
                </div>
<<<<<<< HEAD
                <div class="flex-shrink-0 ml-auto" v-if="User.owns(group) || User.can('update groups')">
                    <button class="btn btn-link" @click.prevent="() => showGroupForm = true">
                        <icon name="create"/>
                        <span>Edit Group</span>
                    </button>
=======
                <div class="flex-shrink-0 ml-auto">
                    <div class="text-muted">
                        Page {{page}} of {{lastPage}}. {{ total }} sites found.
                    </div>
>>>>>>> master
                </div>
            </div>

            <div v-if="accepted" class="alert alert-success d-flex align-items-center">
                <div>
                    Invitation accepted successfully.
                </div>
                <div class="ml-auto pl-2">
                    <button class="btn btn-success" type="button" @click.prevent="accepted = false">
                        <icon name="close"/>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-3">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <strong>Members</strong>
                            <button class="btn btn-primary"
                                    v-if="User.owns(group)"
                                    @click.prevent="showInviteForm = true">
                                <icon name="add"/>
                                <span>Invite</span>
                            </button>
                        </div>
                        <div class="card-body px-0 pt-0">
                            <div v-for="(user, i) in group.users"
                                 class="d-flex align-items-center hover-visible-container hover-highlight px-4 py-2"
                                 :class="{'mt-3': i !== 0}">
                                <div class="flex-shrink-0">
                                    <avatar :user="user" small/>
                                </div>
                                <div class="flex-grow-1 px-2">
                                    <div class="font-weight-bold">{{ user.name }}</div>
                                    <div class="text-muted" v-if="group.owner.id === user.id">
                                        Group Owner
                                    </div>
                                    <div class="text-muted" v-else>
                                        Group Member
                                    </div>
                                </div>
                                <div class="flex-shrink-0 hover-visible" v-if="User.owns(group)">
                                    <button class="btn btn-link" v-tooltip="`Remove Member`" v-if="group.owner.id !== user.id">
                                        <icon name="trash"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3"
                         v-if="typeof group.invitations !== 'undefined' && group.invitations.length > 0">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <strong>Invitations</strong>
                        </div>
                        <div class="card-body px-0 pt-0">
                            <div class="d-flex align-items-center hover-visible-container hover-highlight px-4 py-2"
                                 v-for="invitation in group.invitations">
                                <div class="flex-grow-1 pr-2">
                                    <div class="font-weight-bold">{{ invitation.name }}</div>
                                    <div class="text-muted"
                                         v-if="!invitation.expired && invitation.status === 'pending'">
                                        Pending
                                    </div>
                                    <div class="text-danger" v-else-if="invitation.expired">
                                        Expired
                                    </div>
                                    <div class="text-danger" v-else>
                                        Rejected
                                    </div>
                                </div>
                                <div class="flex-shrink-0 hover-visible">
                                    <button class="btn btn-link" v-tooltip="`Delete Invitation`">
                                        <icon name="trash"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <sites-data-view
                            :url="`/web/groups/${group.id}/sites`"
                            :show-owner="true"
                            @load="sitesLoaded($event)"
                    />
                </div>
            </div>
        </div>


        <div v-if="!loading && !group">
            <div class="alert alert-danger">
                Group not found. Please try refreshing the page or <a href="/">contact us</a>.
            </div>
        </div>

        <invitation-form
                v-if="showInviteForm"
                @close="showInviteForm = false"
                :group="group"
                @create="invitationCreated($event)"
        />

        <group-form
                v-if="showGroupForm"
                :group="group"
                @update="updated($event)"
                @close="closeForm"
        />
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import Avatar from '../components/Avatar'
  import Icon from '../components/Icon'
  import InvitationForm from '../forms/InvitationForm'
  import User from '../helpers/User'
  import GroupForm from '../forms/GroupForm'
  import SitesDataView from '../components/Data/SitesDataView'

  export default {
    name: 'Group',

    components: {SitesDataView, GroupForm, InvitationForm, Icon, Avatar, InlineSpinner},

    data() {
      return {
        User          : User,
        group         : null,
        loading       : true,
        showInviteForm: false,
        showGroupForm : false,
        accepted      : false,
        page          : 1,
        lastPage      : 1,
        total         : 0,
      }
    },

    mounted() {
      this.loadGroup()
      if (typeof this.$route.query.accepted !== 'undefined') {
        this.accepted = true
        this.$router.replace({
          query: {},
        })
      }
    },

    methods: {
      async loadGroup() {
        this.loading = true
        const {id}   = this.$route.params
        try {
          const {data} = await axios.get(`/web/groups/${id}`)
          this.group   = data
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      },

      invitationCreated(invitation) {
        this.showInviteForm = false

        this.group = {
          ...this.group,
          invitations: [invitation].concat(this.group.invitations),
        }
      },

      updated(group) {
        this.closeForm()
        this.group = {
          ...this.group,
          ...group,
        }
      },

<<<<<<< HEAD
      closeForm() {
        this.showGroupForm = false
      },
=======
      sitesLoaded(data) {
        this.page = data.current_page
        this.total = data.total
        this.lastPage = data.last_page
      }
>>>>>>> master
    },
  }
</script>

<style scoped>

</style>
