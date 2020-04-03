<template>
    <div class="container">
        <div class="d-flex">
            <h1 class="page-title mb-3">Users</h1>
            <div class="ml-auto text-muted">
                Page {{ page }} of {{ lastPage }}
            </div>
        </div>
        <div class="card">
            <div class="card-header d-flex p-2">
                <div class="flex-grow-1">
                    <input type="search" class="form-control" placeholder="Search..." v-model="search" title="Search">
                </div>
            </div>
            <div class="card-body p-0">
                <div class="d-flex align-items-center justify-content-center p-3" v-if="loading">
                    <inline-spinner class="text-primary"/>
                </div>
                <p class="text-muted mb-0 p-3" v-if="users.length === 0 && !loading">
                    There are no users found.
                </p>
                <div class="table-responsive" v-if="users.length > 0 && !loading">
                    <table class="table table-middle mb-0">
                        <thead>
                        <tr>
                            <th style="width: 55px"></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Member Since</th>
                            <th>Role</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users" class="hover-visible-container">
                            <td style="width: 55px">
                                <avatar :user="user" :tooltip="false"/>
                            </td>
                            <td>
                                <div>{{ user.name }}</div>
                            </td>
                            <td>
                                <a :href="`mailto:${user.email}`">
                                    {{ user.email }}
                                </a>
                            </td>
                            <td>
                                <div>{{ user.member_since }}</div>
                            </td>
                            <td>
                                <div>{{ user.role.name }}</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <pager @change="goTo($event)"
               :last-page="lastPage"
               :page="page"/>
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import Pager from '../components/Pager'
  import Avatar from '../components/Avatar'

  export default {
    name: 'Users',

    components: {
      Avatar,
      Pager,
      InlineSpinner
    },

    data() {
      return {
        loading : true,
        users   : [],
        search  : '',
        page    : 1,
        lastPage: 1,
        total   : 0,
      }
    },

    mounted() {
      this.loadUsers()
    },

    watch: {
      search() {
        this.loadUsers()
      },
    },

    methods: {
      async loadUsers() {
        try {
          const {data} = await axios.get(`/web/users`, {
            params     : {
              search: this.search,
              page  : this.page,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })

          this.users    = data.data
          this.page     = data.current_page
          this.lastPage = data.last_page
          this.total    = data.total
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.$notify({
              type: 'error',
              text: 'Unable to load species. Please try refreshing the page.',
            })
            console.error(e)
          }
        }
        this.loading = false
      },

      goTo(page) {
        this.loading = true
        this.page    = page
        this.loadUsers()
      },
    },
  }
</script>

<style scoped>

</style>
