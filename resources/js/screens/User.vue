<template>
    <div class="container">
        <inline-spinner v-if="loading"/>
        <div class="row" v-if="!loading && user">
            <div class="col-xl-3 col-lg-4">
                <div class="card">
                    <div class="card-body d-flex align-items-center">
                        <avatar :user="user" :tooltip="false"/>
                        <div class="ml-3">
                            <strong>{{ user.name }}</strong>
                            <p class="mb-0 text-muted">{{ user.member_since }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8">
                <div class="d-flex">
                    <h1 class="page-title mb-3">Sites</h1>
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
            </div>
        </div>
    </div>
</template>

<script>
  import Avatar from '../components/Avatar'
  import InlineSpinner from '../components/InlineSpinner'
  import Tabs from '../components/Tabs'
  import Tab from '../components/Tab'

  export default {
    name: 'User',

    components: {InlineSpinner, Avatar},

    data() {
      return {
        user        : null,
        sites       : [],
        loading     : false,
        search      : '',
      }
    },

    mounted() {
      this.loading = true
      this.loadUser()
      this.loadSites()
      this.loading = false
    },

    watch: {
      search() {
        this.loadSites()
      },
    },

    methods: {
      async loadUser() {
        this.loading = true
        try {
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/users/${id}`)
          this.user    = data
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loading = false
      },

      async loadSites() {
        this.loading = true
        try {
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/sites/user/${id}`, {
            params: {
              search: this.search,
            }
          })
          this.sites    = data.data
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loading = false
      }
    },
  }
</script>

<style scoped>

</style>
