<template>
    <div>
        <div v-if="site" class="mb-3 d-flex">
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <router-link :to="back" class="btn btn-link-dark px-1 ml-n1">
                        <icon name="arrow-back"/>
                    </router-link>
                </div>
                <div class="ml-1">
                    <h1 class="page-title mb-0">
                        {{ site.name }}
                    </h1>
                    <p class="mb-0 text-muted">
                        {{ site.city ? `${site.city}, ` : ''}}{{ site.county.name }}, {{ site.state.name }}
                    </p>
                </div>
            </div>
            <div class="ml-auto">
                <button class="btn btn-link"
                        @click.prevent="editingSite = true"
                        v-if="editable || User.owns(site) || User.can('update sites')">
                    <icon name="create"/>
                    <span>
                        Edit Site
                    </span>
                </button>
            </div>
        </div>

        <div class="row flex-column-reverse flex-md-row">
            <div class="col-md-8">
                <div class="card mb-3 table-responsive mb-0">
                    <div class="card-header d-flex align-items-center p-2" v-if="!unauthorized">
                        <div class="flex-grow-1">
                            <input type="search"
                                   class="form-control form-control-search"
                                   title="Search"
                                   placeholder="Search Plots"
                                   v-model="search">
                        </div>
                        <div class="ml-auto flex-shrink-0 pl-1">
                            <button class="btn btn-primary"
                                    @click.prevent="showPlotForm = true"
                                    v-if="(site && User.owns(site)) || User.can('update sites')"
                                    :disabled="disableCreate">
                                <icon name="add"/>
                                <span>New Plot</span>
                            </button>
                        </div>
                    </div>
                    <div class="p-4 d-flex justify-content-center" v-if="loading">
                        <inline-spinner class="text-primary"/>
                    </div>

                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-muted"
                        v-if="unauthorized">
                        <p class="mb-0 p-4 text-muted" v-if="unauthorized">
                            {{unauthorizedMessage}}
                        </p>
                    </div>

                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-muted"
                         v-if="!unauthorized && !loading && plots.length === 0">
                        <div>
                            <p>Get started by creating a new plot using the button below.</p>
                        </div>
                        <button class="btn btn-outline-primary" @click.prevent="showPlotForm = true">
                            <icon name="add"/>
                            <span>New Plot</span>
                        </button>
                    </div>
                    <table class="table table-middle mb-0" v-if="!unauthorized && !loading && plots.length > 0">
                        <thead>
                        <tr>
                            <th>
                                <a href="#"
                                   class="d-flex align-items-center"
                                   @click.prevent="sort('number')">
                                    <span class="mr-1">Plot</span>
                                    <icon :name="sortIcon('number')"/>
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
                        <tr v-for="plot in plots" class="hover-visible-container">
                            <td>
                                <router-link :to="`${siteUrlPrefix}/${plot.id}`">Plot #{{ plot.number }}</router-link>
                            </td>
                            <td>
                                {{ plot.plants_count | plural('Plant', 'Plants') }}
                            </td>
                            <td>
                                <span v-if="plot.last_measured_at">{{ moment.utc(plot.last_measured_at).format('MMM Do, YYYY') }}</span>
                            </td>
                            <td>
                                <div class="d-flex justify-content-end hover-visible">
                                    <button class="btn btn-link"
                                            v-if="editable || User.owns(plot) || User.can('update sites')"
                                            @click.prevent="edit(plot)" v-tooltip="'Edit'">
                                        <icon name="create"/>
                                    </button>

                                    <button class="btn"
                                            v-if="User.owns(plot) || User.can('delete sites')"
                                            :class="deleting === plot.id ? 'btn-danger' : 'btn-link'"
                                            @click.prevent="destroy(plot)"
                                            v-tooltip="'Delete'">
                                        <icon name="trash" v-if="deleting !== plot.id"/>
                                        <inline-spinner v-else/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <pager :last-page="lastPage" :page="page" @change="goTo($event)"/>
            </div>
            <div class="col-md-4">
                <div class="card mb-3" v-if="site">
                    <div class="card-body">
                        <div class="pb-2">
                            <strong>Site Information</strong>
                        </div>
                        <dl class="mb-0">
                            <dt>Owner</dt>
                            <dd class="text-muted">{{ optional(site.owner, 'Owner name') }}</dd>

                            <dt>Contact Info</dt>
                            <dd class="text-muted">
                                {{ optional(site.owner_contact, 'Owner contact info') }}
                            </dd>

                            <dt>Overstory Species</dt>
                            <dd class="text-muted" v-if="site.species.length !== 0">
                                {{ site.species.map(v => v.name).join(', ') }}
                            </dd>
                            <dd class="text-muted" v-else>Not provided</dd>

                            <dt>Seedling or Shrub Species</dt>
                            <dd class="text-muted" v-if="site.shrubs.length !== 0">
                                {{ site.shrubs.map(v => v.name).join(', ') }}
                            </dd>
                            <dd class="text-muted" v-else>Not provided</dd>

                            <dt>Basal Area</dt>
                            <dd class="text-muted">
                                {{optional(site.basal_area)}}
                                <span v-show="site.basal_area">ft<sup>2</sup>/ac</span>
                            </dd>

                            <dt>Average Overstory Tree Diameter</dt>
                            <dd class="text-muted">{{optional(site.diameter)}} <span v-show="site.diameter">in</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <plot-form
                @close="closeForm"
                v-if="site && showPlotForm"
                :site="site"
                :plot="plot"
                @create="plotCreated($event)"
                @update="plotUpdated($event)"
        />

        <site-form @close="editingSite = false"
                   @update="siteUpdated($event)"
                   :site="site"
                   v-if="editingSite"/>
    </div>
</template>

<script>
  import InlineSpinner from '../InlineSpinner'
  import Icon from '../Icon'
  import PlotForm from '../../forms/PlotForm'
  import Tab from '../Tab'
  import Tabs from '../Tabs'
  import PlantForm from '../../forms/PlantForm'
  import PlotMap from '../PlotMap'
  import Dropdown from '../Dropdown'
  import SiteForm from '../../forms/SiteForm'
  import Pager from '../Pager'
  import User from '../../helpers/User'
  import moment from 'moment'

  export default {
    name: 'PlotsDataView',

    components: {Pager, SiteForm, Dropdown, PlotMap, PlantForm, Tabs, Tab, PlotForm, Icon, InlineSpinner},

    props: {
      unauthorizedMessage: {required: false, type: String, default: 'You do not have permission to view plots.'},
      back               : {required: false, type: String, default: `/app/sites`},
      siteUrlPrefix      : {required: false, type: String, default: '/app/plots'},
      disableCreate      : {required: false, type: Boolean, default: false},
      editable           : {required: false, type: Boolean, default: false},
    },

    data() {
      return {
        moment,
        User        : User,
        search      : '',
        showPlotForm: false,
        editingSite : false,
        plots       : [],
        deleting    : null,
        page        : 1,
        lastPage    : 1,
        total       : 0,
        loading     : false,
        request     : null,
        site        : null,
        plot        : null,
        orderBy     : 'last_measured_at',
        orderDir    : 'desc',
        unauthorized: false,
      }
    },

    mounted() {
      this.loading = true
      this.loadPlots()
      this.loadSite()
    },

    watch: {
      search() {
        this.loadPlots()
      },

      page() {
        this.loading = true
        this.loadPlots()
      },
    },

    methods: {
      optional(value, field) {
        if (value) {
          if (Array.isArray(value) && value.length !== 0) {
            return value.map(v => v.name).join(', ')
          }
          return value
        }

        if (typeof field !== 'undefined') {
          return `${field} is not provided`
        }

        return 'Not provided'
      },

      async loadSite() {
        const id = this.$route.params.id
        try {
          const {data} = await axios.get(`/web/sites/${id}`)
          this.site    = data
        } catch (e) {
          console.error(e)
        }
      },

      async loadPlots() {
        if (this.request !== null) {
          this.request()
        }

        try {
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/sites/${id}/plots`, {
            params     : {
              page     : this.page,
              search   : this.search,
              order_by : this.orderBy,
              order_dir: this.orderDir,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })

          this.plots    = data.data
          this.lastPage = data.last_page
          this.loading  = false
          this.request  = null
        } catch (e) {
          if (!axios.isCancel(e)) {
            if (e.response && e.response.status === 403) {
              this.unauthorized = true
            }
            this.loading = false
            this.request = null
          }
        }
      },

      plotCreated(plot) {
        this.closeForm()
        this.loadPlots()
      },

      plotUpdated(plot) {
        this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
        this.closeForm()
      },

      edit(plot) {
        this.plot         = plot
        this.showPlotForm = true
      },

      closeForm() {
        this.plot         = null
        this.showPlotForm = false
      },

      destroy(plot) {
        if (this.deleting !== null) {
          return
        }

        this.$confirm({
          title    : `Are you sure you want to delete Plot #${plot.number}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.deleting = plot.id
            try {
              await axios.delete(`/web/plots/${plot.id}`)
              this.loadPlots()
            } catch (e) {
              this.$notify({
                text: 'Unable to delete plot. Please try refreshing the page.',
                type: 'error',
              })
            }
            this.deleting = null
          },
        })
      },

      siteUpdated(site) {
        this.site        = site
        this.editingSite = false
      },

      goTo(page) {
        this.page = page
        this.loadPlots()
      },

      sort(column) {
        if (column === this.orderBy) {
          this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
        } else {
          this.orderBy  = column
          this.orderDir = 'asc'
        }

        this.loadPlots()
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
