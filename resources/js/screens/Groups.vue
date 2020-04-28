<template>
    <div>
        <div>
            <h1 class="page-title mb-3">User Groups</h1>

            <div class="card mb-3" v-if="!loading && groups.length === 0">
                <div class="card-body d-flex align-items-center justify-content-center flex-column text-center">
                    <div class="d-flex align-items-center justify-content-center icon-circle">
                        <icon name="people-outline"/>
                    </div>
                    <p class="font-weight-bold mt-4">Welcome to User Groups</p>
                    <p class="text-muted max-w-700">
                        Groups provide an easy and secure way to share your data with other members.
                        You can get started by creating a new group. To join an existing group, a user
                        must send you an invitation to join the group.
                    </p>
                    <button class="btn btn-primary mt-4" @click.prevent="showForm = true">
                        <icon name="add"/>
                        <span>
                            New Group
                        </span>
                    </button>
                </div>
            </div>

            <div class="card mb-3" v-if="!loading && groups.length > 0">
                <div class="d-flex card-header p-2">
                    <div class="flex-grow-1">
                        <input type="search" class="form-control" placeholder="Search Groups">
                    </div>
                    <div class="flex-shrink-0">
                        <button class="btn btn-primary">
                            <icon name="add"/>
                            <span>New Group</span>
                        </button>
                    </div>
                </div>
                <div class="card-body table-responsive p-0">
                    <table class="table mb-0">
                        <thead>
                        <tr>
                            <th>Group Name</th>
                            <th>Owner</th>
                            <th>Members</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="group in groups" class="hover-visible-container">
                            <td>
                                <router-link :to="`/app/groups/${group.id}`" class="font-weight-bold">
                                    {{ group.name }}
                                </router-link>
                            </td>
                            <td>
                                {{ group.owner.name }}
                            </td>
                            <td>{{ group.users_count }}</td>
                            <td>
                                <div class="d-flex justify-content-end hover-visible" v-if="User.owns(group) || User.can(['update groups', 'delete groups'])">
                                    <button class="btn btn-link mr-1" v-tooltip="'Edit Group'" v-if="User.can('update groups')">
                                        <icon name="create"/>
                                    </button>
                                    <button class="btn btn-link" v-tooltip="'Delete Group'" v-if="User.can('delete groups')">
                                        <icon name="trash"/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <group-form
                v-if="showForm"
                :group="group"
                @create="created($event)"
                @update="updated($event)"/>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import GroupForm from '../forms/GroupForm'
  import User from '../helpers/User'

  export default {
    name      : 'Groups',
    components: {GroupForm, Icon},
    data() {
      return {
        User: User,
        showForm: false,
        loading : true,
        groups  : [],
        page    : 1,
        lastPage: 1,
        group: null
      }
    },

    mounted() {
      this.loadGroups()
    },

    methods: {
      async loadGroups() {
        try {
          const {data}  = await axios.get('/web/groups')
          this.groups   = data.data
          this.lastPage = data.last_page
        } catch (e) {
          this.$alert('Unable to load group. Please try refreshing the page.')
          console.error(e)
        }

        this.loading = false
      },

      created(group) {
        this.closeForm()
        this.$router.push({
          path: `/app/groups/${group.id}`,
        })
      },

      updated(group) {
        this.closeForm()
        this.groups   = this.groups.map(g => g.id === group.id ? group : g)
      },

      closeForm() {
        this.group = null
        this.showForm = false
      },

      edit(group) {
        this.group = group
        this.showForm = true
      }
    },
  }
</script>

<style scoped>

</style>
