<template>
    <div class="container">
        <inline-spinner v-if="loading"/>
        <div class="row" v-if="!loading && user">
            <div class="col-xl-4 col-md-5">
                <div class="card mb-4">
                    <div class="card-body d-flex align-items-center">
                        <avatar class="flex-shrink-0" :user="user" :tooltip="false"/>
                        <div class="ml-3">
                            <strong>{{ user.name }}</strong>
                            <p class="mb-0 text-muted">{{ `Member since ${user.member_since}` }}</p>
                            <a :href="`mailto:${user.email}`">
                                {{ user.email }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body rounded">
                        <p class="font-weight-bold text-dark text-sm mb-1">Roles</p>
                        <div v-for="(role, index) in roles" class="d-flex align-items-center">
                            <div class="custom-control custom-radio">
                                <input type="radio"
                                       :id="`role-${index}`"
                                       name="role-select"
                                       class="custom-control-input"
                                       :value="`${role.id}`"
                                       v-model="userRole"
                                       v-on:change="setRole">
                                <label class="custom-control-label"
                                       :for="`role-${index}`">
                                    {{ role.name }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-md-7">
                <div class="d-flex">
                    <h1 class="page-title mb-3">Sites</h1>
                    <div class="ml-auto text-muted">
                        Page {{ page }} of {{ lastPage }}
                    </div>
                </div>
                <div class="card">
                    <div class="card-header d-flex p-2">
                        <div class="flex-grow-1">
                            <input type="search" class="form-control" v-model="search" placeholder="Search...">
                        </div>
                    </div>
                    <p class="mb-0 p-4" v-if="loading">
                        <inline-spinner class="text-primary"/>
                    </p>
                    <p class="mb-0 p-4 text-muted" v-if="!loading && sites.length === 0">
                        User does not have any sites.
                    </p>
                    <table class="table mb-0 table-middle table-hover" v-if="!loading && sites.length > 0">
                        <thead>
                        <tr>
                            <th style="width: 100%">Name</th>
                            <th>Plots</th>
                            <th>Plants</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="site in sites" class="on-hover">
                                <td>
                                    <router-link :to="`/app/sites/${site.id}`">
                                        <strong>{{ site.name }}</strong>
                                    </router-link>
                                    <div class="text-muted">
                                        {{ site.county.name }}, {{ site.state.code }}
                                    </div>
                                </td>
                                <td class="text-right">{{ site.plots_count }}</td>
                                <td class="text-right">{{ site.plants_count }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <pager @change="goTo($event)"
                       :last-page="lastPage"
                       :page="page"/>
            </div>
        </div>
    </div>
</template>

<script>
  import Avatar from '../components/Avatar'
  import InlineSpinner from '../components/InlineSpinner'
  import Pager from '../components/Pager'

  export default {
    name: 'User',

    components: {InlineSpinner, Avatar, Pager},

    data() {
      return {
        user        : null,
        userRole    : '',
        sites       : [],
        roles       : [],
        loading     : true,
        search      : '',
        page        : 1,
        lastPage    : 1,
      }
    },

    mounted() {
      this.loadUser()
      this.loadSites()
      this.loadRoles()
      this.loading = false
    },

    watch: {
      search() {
        this.loadSites()
      },
    },

    methods: {
      async loadUser() {
        try {
          const id      = this.$route.params.id
          const {data}  = await axios.get(`/web/users/${id}`)
          this.user     = data
          this.userRole = this.user.role_id
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
      },

      async loadSites() {
        try {
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/user/${id}/sites`, {
            params: {
              search: this.search,
              page  : this.page,
            }
          })
          this.sites    = data.data
          this.page     = data.current_page
          this.lastPage = data.last_page
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
      },

      async loadRoles() {
        try {
          const {data} = await axios.get(`/web/roles`)
          this.roles    = data
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
      },

      async setRole() {
        try {
          const id      = this.$route.params.id
          await axios.patch(`/web/user/${id}/role`, {
            role: this.userRole,
          })
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
      },

      goTo(page) {
        this.loading = true
        this.page    = page
        this.loadSites()
        this.loading = false
      },
    },
  }
</script>

<style scoped>

</style>
