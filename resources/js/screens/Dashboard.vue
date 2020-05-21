<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body p-0 table-responsive">
                        <p class="mb-0 p-4" v-if="loading">
                            <inline-spinner class="text-primary"/>
                        </p>
                        <p class="mb-0 p-4 text-muted" v-if="!loading && sites.length === 0">
                            No sites found. Visit the "My Data" page to get started.
                        </p>
                        <table class="table mb-0 table-middle table-hover" v-if="!loading && sites.length > 0">
                            <thead>
                            <tr>
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
                                       @click.prevent="sort('last_measured_at')">
                                        <span class="mr-1">Latest Measurement Date</span>
                                        <icon :name="sortIcon('last_measured_at')"/>
                                    </a>
                                </th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="site in sites">
                                <td>
                                    <router-link :to="`app/sites/${site.id}`">
                                        <strong>{{ site.name }}</strong>
                                    </router-link>
                                    <div class="text-muted">
                                        {{ site.county.name }}, {{ site.state.code }}
                                    </div>
                                </td>
                                <td>
                                    <span v-if="site.last_measured_at">
                                        {{ moment(site.last_measured_at).format('MMM Do, YYYY') }}
                                    </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card col-lg-6 mb-3">
                <div class="card-body d-flex align-items-center justify-content-center flex-column">
                    <p class="font-weight-bold">Welcome to AVID!</p>
                    <p>This page is under construction but you can visit "My Data" to manage your data.</p>
                    <router-link class="btn btn-outline-primary" to="/app/sites">
                        <icon name="file-tray-full"/>
                        <span>My Data</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import moment from 'moment'

  export default {
    name      : 'Dashboard',

    components: {Icon, InlineSpinner},

    mounted() {
      this.loadSites()
    },

    data() {
      return {
        moment,
        loading : true,
        sites   : null,
        orderBy     : 'last_measured_at',
        orderDir    : 'desc',
      }
    },

    methods: {
      async loadSites() {
        try {
          const {data}  = await axios.get(`/web/sites`, {
            params     : {
              order_by : this.orderBy,
              order_dir: this.orderDir,
              limit    : 10,
            },
            cancelToken: new axios.CancelToken(c => this._request = c),
          })
          this.sites    = data.data
          this.loading  = false
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            console.error(e)
          }
        }
      },

      sort(column) {
        if (column === this.orderBy) {
          this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
        } else {
          this.orderBy  = column
          this.orderDir = 'asc'
        }

        this.loadSites()
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
    }
  }
</script>

<style scoped>

</style>
