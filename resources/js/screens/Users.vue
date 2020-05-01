<template>
    <div>
        <div class="d-flex">
            <h1 class="page-title mb-3">Users</h1>
            <div class="ml-auto text-muted">
                Page {{ page }} of {{ lastPage }}
            </div>
        </div>
        <div class="card mb-3">
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
                            <th>
                                <a href="#"
                                   class="d-flex align-items-center"
                                   @click.prevent="sort('name')">
                                    <span class="mr-1">Name</span>
                                    <icon :name="sortIcon('name')"/>
                                </a>
                            </th>
                            <th>
                                <a href="#"
                                   class="d-flex align-items-center"
                                   @click.prevent="sort('sites_count')">
                                    <span class="mr-1">Sites</span>
                                    <icon :name="sortIcon('sites_count')"/>
                                </a>
                            </th>
                            <th>
                                <a href="#"
                                   class="d-flex align-items-center"
                                   @click.prevent="sort('created_at')">
                                    <span class="mr-1">Member Since</span>
                                    <icon :name="sortIcon('created_at')"/>
                                </a>
                            </th>
                            <th>Role</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="user in users" class="hover-visible-container">
                            <td style="width: 55px">
                                <avatar :user="user" :tooltip="false"/>
                            </td>
                            <td>
                                <router-link :to="`/app/users/${user.id}`">
                                    <div>{{ user.name }}</div>
                                </router-link>
                                <div>
                                    <a :href="`mailto:${user.email}`" class="text-muted">
                                        {{ user.email }}
                                    </a>
                                </div>
                            </td>
                            <td>
                                {{ user.sites_count }}
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
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import Pager from '../components/Pager'
  import Avatar from '../components/Avatar'

  export default {
    name: 'Users',

    components: {
      Avatar,
      Pager,
      InlineSpinner,
      Icon,
    },

    data() {
      return {
        loading : true,
        users   : [],
        search  : '',
        page    : 1,
        lastPage: 1,
        total   : 0,
        orderBy : 'name',
        orderDir: 'asc',
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
              search   : this.search,
              page     : this.page,
              order_by : this.orderBy,
              order_dir: this.orderDir,
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

      sort(column) {
        if (column === this.orderBy) {
          this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
        } else {
          this.orderBy  = column
          this.orderDir = 'asc'
        }

        this.loadUsers()
      },

      sortIcon(column) {
        if (column !== this.orderBy) {
          return 'swap-vertical'
        }

        if (this.orderDir === 'asc') {
          return 'arrow-up'
        }

        return 'arrow-down'
      },
    },
  }
</script>

<style scoped>

</style>
