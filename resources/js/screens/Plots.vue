<template>
    <div class="container">
        <div v-if="site" class="mb-3 d-flex">
            <div>
                <h1 class="page-title mb-0">
                    {{ site.name }}
                </h1>
                <p class="mb-0 text-muted">
                    {{ site.city ? `${site.city}, ` : ''}}{{ site.county.name }}, {{ site.state.name }}
                </p>
            </div>
            <div class="ml-auto">
                <button class="btn btn-link">
                    <icon name="create"/>
                    <span>
                        Edit Site
                    </span>
                </button>
            </div>
        </div>

        <div class="card mb-3" v-if="site">
            <div class="card-header d-flex">
                <a href="#"
                   class="text-dark"
                   data-toggle="collapse"
                   data-target="#site-info-card"
                   v-tooltip="'Expand or Collapse'">
                    <strong>Site Information</strong>
                </a>
                <div class="ml-auto">
                    <button class="btn btn-sm btn-link"
                            data-toggle="collapse"
                            data-target="#site-info-card"
                            aria-expanded="true">
                        <icon name="arrow-down"/>
                    </button>
                </div>
            </div>
            <div class="card-body collapse show px-2 pb-2 pt-0" id="site-info-card">
                <table class="table mb-0">
                    <tbody>
                    <tr>
                        <th class="small-cell no-wrap">Owner</th>
                        <td>
                            {{ optional(site.owner, 'Owner name') }}
                            <div class="text-muted">
                                {{ optional(site.owner_contact, 'Owner contact info') }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="small-cell no-wrap">Basal Area</th>
                        <td>{{optional(site.basal_area)}} <span v-show="site.basal_area">ft<sup>2</sup>/ac</span></td>
                    </tr>
                    <tr>
                        <th class="small-cell no-wrap">Average Overstory Tree Diameter</th>
                        <td>{{optional(site.diameter)}} <span v-show="site.diameter">in</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-4">
                <div class="card mb-3">
                    <div class="card-header d-flex align-items-center">
                        <div>
                            <strong>Plots</strong>
                        </div>
                        <div class="ml-auto">
                            <button class="btn btn-sm btn-primary" @click.prevent="showPlotForm = true">
                                <icon name="add"/>
                                <span>Plot</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <inline-spinner class="text-primary" v-if="loading"/>
                        <div class="text-muted" v-if="!loading && plots.length === 0">
                            No plots found. Use the button above to create a new one.
                        </div>

                        <dropdown
                                autocomplete
                                v-if="plots.length > 0"
                                :options="plotOptions"
                                :value="selectedPlotID"
                                @input="selectPlot($event)"
                                @search="plotSearch = $event"
                        />

                        <div class="nav nav-pills flex-column" v-if="false">
                            <a href="#"
                               v-for="plot in plots"
                               :class="['nav-link', 'align-items-center', 'pr-0', {'active': selectedPlot && selectedPlot.id === plot.id}]"
                               @click.prevent="selectedPlot = plot">
                                <span>Plot #{{ plot.number }}</span>
                                <icon name="arrow-forward" class="right-arrow ml-auto"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-header">
                        <strong>Filters</strong>
                    </div>
                    <div class="card-body pt-0">
                        <div class="form-group">
                            <label for="plant-search">Search</label>
                            <input id="plant-search" type="search" class="form-control" placeholder="Type to search...">
                        </div>
                        <div class="form-group">
                            <label>Collection Date</label>
                            <dropdown
                                    placeholder="Any Date"
                                    :options="[{label: 'Any Date', value: null}]"
                                    :value="null"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-8">
                <div class="card mb-3" v-if="selectedPlot">
                    <tabs v-if="selectedPlot">
                        <tab :name="`Plot #${selectedPlot.number}`" icon="leaf" selected>
                            <div class="card-body pb-0">
                                <div class="row">
                                    <div class="col-md-4 mb-4" v-if="selectedPlot.basal_area !== null">
                                        <div class="text-muted"><strong>Basal Area</strong></div>
                                        <b>{{ selectedPlot.basal_area}} ft<sup>2</sup>/ac</b>
                                    </div>
                                    <div class="col-md-4 mb-4" v-if="selectedPlot.is_protected !== null">
                                        <div class="text-muted"><strong>Enclosed/Protected Plot</strong></div>
                                        <b>{{ selectedPlot.is_protected }}</b>
                                    </div>
                                    <div class="col-md-4 mb-4" v-if="selectedPlot.protection_seasons !== null">
                                        <div class="text-muted"><strong>Protection Seasons</strong></div>
                                        <b>{{ selectedPlot.protection_seasons }}</b>
                                    </div>
                                    <div class="col-md-4 mb-4" v-if="selectedPlot.ground_cover !== null">
                                        <div class="text-muted"><strong>Ground and Shrub Cover</strong></div>
                                        <b>{{ selectedPlot.ground_cover }}</b>
                                    </div>
                                    <div class="col-md-4 mb-4" v-if="selectedPlot.canopy !== null">
                                        <div class="text-muted"><strong>Canopy</strong></div>
                                        <b>{{ selectedPlot.canopy }}</b>
                                    </div>
                                    <div class="col-md-4 mb-4" v-if="selectedPlot.subcanopy !== null">
                                        <div class="text-muted"><strong>Subcanopy</strong></div>
                                        <b>{{ selectedPlot.subcanopy }}</b>
                                    </div>
                                </div>
                            </div>

                            <table class="table mb-0">
                                <thead>
                                <tr>
                                    <th>Tag #</th>
                                    <th>Plant Type</th>
                                    <th>Quadrant</th>
                                    <th>Species</th>
                                    <th>Date</th>
                                    <th>Stems</th>
                                    <th>Flowers</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Tag #9</td>
                                    <td>Wildflower</td>
                                    <td>Northeast</td>
                                    <td>Ash</td>
                                    <td>19 Oct 2019</td>
                                    <td>3 Stems</td>
                                    <td>4 Flowers</td>
                                </tr>
                                </tbody>
                            </table>
                        </tab>
                        <tab :name="`Map`" icon="map">
                            <div class="card-body">
                                <plot-map :plot="selectedPlot"/>
                            </div>
                        </tab>
                        <tab :name="`New Plant`" icon="add">
                            <plant-form :plot="selectedPlot"/>
                        </tab>

                        <div class="dropdown ml-auto" slot="right">
                            <a href="#" class="nav-link" data-toggle="dropdown">
                                <span>Options</span>
                                <icon name="arrow-down" class="ml-2 mr-0"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a href="#" class="dropdown-item">
                                    <icon name="create"/>
                                    <span>Edit Plot</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <icon name="trash"/>
                                    <span>Delete Plot</span>
                                </a>
                            </div>
                        </div>
                    </tabs>
                </div>

                <div class="card" v-if="!selectedPlot">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-muted">
                        <div v-if="!loading && plots.length === 0">
                            <p>Get started by creating a new plot using the button below.</p>
                        </div>
                        <div v-else>
                            <p class="mb-0">Select a plot from the left sidebar or use the button below to create a new one.</p>
                        </div>
                        <button class="btn btn-outline-primary" @click.prevent="showPlotForm = true">
                            <icon name="add"/>
                            <span>New Plot</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <plot-form
                @close="showPlotForm = false"
                v-if="site && showPlotForm"
                :site="site"
                @create="plotCreated($event)"
        />
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import Icon from '../components/Icon'
  import PlotForm from '../forms/PlotForm'
  import Tab from '../components/Tab'
  import Tabs from '../components/Tabs'
  import PlantForm from '../forms/PlantForm'
  import PlotMap from '../components/PlotMap'
  import Dropdown from '../components/Dropdown'

  export default {
    name: 'Plots',

    components: {Dropdown, PlotMap, PlantForm, Tabs, Tab, PlotForm, Icon, InlineSpinner},

    data() {
      return {
        plotSearch    : '',
        showPlotForm  : false,
        plots         : [],
        plotOptions   : [],
        selectedPlotID: null,
        page          : 1,
        lastPage      : 1,
        total         : 0,
        loading       : false,
        search        : '',
        request       : null,
        site          : null,
        selectedPlot  : null,
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

      plotSearch(terms) {
        terms = terms.toLowerCase().trim()
        if (terms.length === 0) {
          this.toOptions(this.plots)
          return
        }
        const plots = this.plots.filter(p => `plot #${p.number}`.indexOf(terms) > -1)
        this.toOptions(plots)
      },

      selectedPlot() {
        const id = this.$route.params.id
        this.$router.replace({
          path : `/app/sites/${id}`,
          query: {
            plot: this.selectedPlot.id,
          },
          hash : this.$route.hash,
        }).catch(e => {
        })
      },
    },

    methods: {
      optional(value, field) {
        if (value) {
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

        }
      },

      async loadPlots(plot) {
        if (this.request !== null) {
          this.request()
        }
        try {
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/sites/${id}/plots`, {
            params     : {
              page  : this.page,
              search: this.search,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })
          this.plots   = data
          this.loading = false
          this.request = null
          this.toOptions(data)

          if (this.selectedPlot === null && this.plots.length > 0) {
            this.setFromHistory()
          }

          if (plot) {
            this.selectPlot(plot.id)
          }
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            this.request = null
          }
        }
      },

      toOptions(plots) {
        this.plotOptions = plots.map(p => ({label: `Plot #${p.number}`, value: p.id}))
      },

      plotCreated(plot) {
        this.showPlotForm = false
        this.loadPlots(plot)
      },

      setFromHistory() {
        let plot_id = this.$route.query.plot
        if (plot_id) {
          plot_id     = parseInt(plot_id)
          const plots = this.plots.filter(p => p.id === plot_id)
          if (plots.length > 0) {
            this.selectedPlot   = plots[0]
            this.selectedPlotID = plots[0].id
            return
          }
        }

        this.selectedPlotID = this.plots[0].id
        this.selectedPlot   = this.plots[0]
      },

      selectPlot(id) {
        this.selectedPlotID = id

        let plot = null

        const plots = this.plots.filter(p => {
          return p.id === id
        })
        if (plots.length > 0) {
          plot = plots[0]
        }

        this.selectedPlot = plot
      },
    },
  }
</script>

<style scoped>

</style>
