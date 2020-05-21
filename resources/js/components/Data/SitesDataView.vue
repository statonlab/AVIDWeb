<template>
    <div>
        <div class="card mb-3">
            <div class="card-header d-flex p-2">
                <div class="flex-grow-1">
                    <input type="search" class="form-control" placeholder="Search..." v-model="search">
                </div>
                <div class="ml-auto flex-shrink-0 pl-1">
                    <button class="btn btn-primary" @click.prevent="showSiteForm = true">
                        <icon name="add"/>
                        <span>New Site</span>
                    </button>
                </div>
            </div>
            <div class="card-body p-0 table-responsive">
                <p class="mb-0 p-4" v-if="loading">
                    <inline-spinner class="text-primary"/>
                </p>
                <p class="mb-0 p-4 text-muted" v-if="unauthorized">
                    {{unauthorizedMessage}}
                </p>
                <p class="mb-0 p-4 text-muted" v-if="!loading && sites.length === 0 && !unauthorized">
                    No results found. Use the "New Site" button above to create a new one.
                </p>
                <table class="table mb-0 table-middle table-hover" v-if="!loading && sites.length > 0 && !unauthorized">
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
                        <th v-if="showOwner">
                            Created By
                        </th>
                        <th>
                            <a href="#"
                               class="d-flex align-items-center"
                               @click.prevent="sort('plots_count')">
                                <span class="mr-1">Plots</span>
                                <icon :name="sortIcon('plots_count')"/>
                            </a>
                        </th>
                        <th>
                            <a href="#"
                               class="d-flex align-items-center"
                               @click.prevent="sort('plants_count')">
                                <span class="mr-1">Plants</span>
                                <icon :name="sortIcon('plants_count')"/>
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
                    <tr v-for="site in sites" :class="{'on-hover': deleting !== site.id}">
                        <td>
                            <router-link :to="`${siteUrlPrefix}/${site.id}`">
                                <strong>{{ site.name }}</strong>
                            </router-link>
                            <div class="text-muted">
                                {{ site.county.name }}, {{ site.state.code }}
                            </div>
                        </td>
                        <td v-if="showOwner">{{ site.user.name }}</td>
                        <td>{{ site.plots_count | plural('Plot', 'Plots')}}</td>
                        <td>{{ site.plants_count | plural('Plant', 'Plants') }}</td>
                        <td>
                            <span v-if="site.last_measured_at">
                                {{ moment.utc(site.last_measured_at).format('MMM Do, YYYY') }}
                            </span>
                        </td>
                        <td class="text-right no-wrap">
                            <button class="show-on-hover btn btn-link btn-sm mr-1"
                                    @click.prevent="edit(site)"
                                    v-if="editable || User.owns(site) || User.can('delete sites')"
                                    v-tooltip="'Edit Site'">
                                <icon name="create"/>
                            </button>
                            <button class="show-on-hover btn btn-link btn-sm"
                                    v-tooltip="'Delete Site'"
                                    v-if="User.owns(site) || User.can('delete sites')"
                                    @click.prevent="destroy(site)">
                                <icon name="trash" v-if="deleting !== site.id"/>
                                <inline-spinner class="text-primary" v-else/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <pager :last-page="lastPage" :page="page" @change="goTo($event)"/>

        <site-form v-if="showSiteForm"
                   @close="closeForm"
                   @create="siteCreated($event)"
                   @update="siteUpdated($event)"
                   :site="site"
                   :groupURL="``"/>
    </div>
</template>

<script>
  import Pager from '../Pager'
  import InlineSpinner from '../InlineSpinner'
  import SiteForm from '../../forms/SiteForm'
  import Icon from '../Icon'
  import User from '../../helpers/User'
  import moment from 'moment'

  export default {
    name: 'SitesDataView',

    components: {Pager, InlineSpinner, SiteForm, Icon},

    props: {
      url                : {required: false, type: String, default: '/web/sites'},
      editable           : {required: false, type: Boolean, default: false},
      showOwner          : {required: false, type: Boolean, default: false},
      siteUrlPrefix      : {required: false, type: String, default: '/app/sites'},
      unauthorizedMessage: {required: false, type: String, default: 'You do not have permission to view sites.'},
    },

    data() {
      return {
        moment,
        User: User,
        showSiteForm: false,
        sites       : [],
        loading     : false,
        page        : 1,
        lastPage    : 1,
        total       : 0,
        site        : null,
        deleting    : null,
        search      : '',
        _request    : null,
        orderBy     : 'last_measured_at',
        orderDir    : 'desc',
        unauthorized: false,
      }
    },

    mounted() {
      this.loading = true
      this.loadSites()
    },

    watch: {
      search() {
        this.page = 1
        this.loadSites()
      },
    },

    methods: {
      async loadSites() {
        if (this._request) {
          this._request()
        }

        try {
          const {data}  = await axios.get(this.url, {
            params     : {
              search   : this.search,
              page     : this.page,
              order_by : this.orderBy,
              order_dir: this.orderDir,
            },
            cancelToken: new axios.CancelToken(c => this._request = c),
          })
          this.total    = data.total
          this.sites    = data.data
          this.lastPage = data.last_page
          this.loading  = false
          this.$emit('load', data)
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            if (e.response && e.response.status === 403) {
                this.unauthorized = true
                return
            }
            console.error(e)
          }
        }
      },

      siteCreated() {
        this.loadSites()
        this.closeForm()
      },

      siteUpdated(site) {
        this.sites = this.sites.map(s => s.id === site.id ? site : s)
        this.closeForm()
      },

      closeForm() {
        this.site         = null
        this.showSiteForm = false
      },

      edit(site) {
        this.site         = site
        this.showSiteForm = true
      },

      destroy(site) {
        this.$confirm({
          title    : `Are you sure you want to delete ${site.name}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.deleting = site.id
            try {
              await axios.delete(`/web/sites/${site.id}`)
              await this.loadSites()
            } catch (e) {
              this.$notify({
                text: 'Unable to delete site. Please try refreshing the page.',
                type: 'error',
              })
            }
            this.deleting = null
          },
        })
      },

      goTo(page) {
        this.page = page
        this.loadSites()
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
    },
  }
</script>

<style scoped>

</style>
