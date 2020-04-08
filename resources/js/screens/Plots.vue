<template>
    <div class="container">
        <div v-if="site" class="mb-3 d-flex">
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <router-link :to="`/app/sites`" class="btn btn-link-dark px-1 ml-n1">
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
                <button class="btn btn-link">
                    <icon name="create"/>
                    <span>
                        Edit Site
                    </span>
                </button>
            </div>
        </div>

        <div class="row flex-column-reverse flex-md-row">
            <div class="col-md-8">
                <div class="d-flex justify-content-center" v-if="loading">
                    <inline-spinner class="text-primary"/>
                </div>
                <div class="card mb-3" v-if="!loading && plots.length === 0">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-muted">
                        <div>
                            <p>Get started by creating a new plot using the button below.</p>
                        </div>
                        <button class="btn btn-outline-primary" @click.prevent="showPlotForm = true">
                            <icon name="add"/>
                            <span>New Plot</span>
                        </button>
                    </div>
                </div>

                <div class="card mb-3 table-responsive mb-0" v-if="!loading && plots.length > 0">
                    <div class="card-header d-flex align-items-center p-2">
                        <div class="flex-grow-1">
                            <input type="search"
                                   class="form-control form-control-search"
                                   title="Search"
                                   placeholder="Search Plots"
                                   v-model="search">
                        </div>
                        <div class="ml-auto flex-shrink-0 pl-1">
                            <button class="btn btn-primary" @click.prevent="showPlotForm = true">
                                <icon name="add"/>
                                <span>New Plot</span>
                            </button>
                        </div>
                    </div>
                    <table class="table table-middle mb-0">
                        <thead>
                        <tr>
                            <th>Plot</th>
                            <th>Plants</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="plot in plots" class="hover-visible-container">
                            <td>
                                <router-link :to="`/app/plots/${plot.id}`">Plot #{{ plot.number }}</router-link>
                            </td>
                            <td>
                                {{ plot.plants_count }} {{plot.plants_count === 0 || plot.plants_count > 1 ? 'Plants' : 'Plant'}}
                            </td>
                            <td>
                                <div class="d-flex justify-content-end hover-visible">
                                    <button class="btn btn-link" @click.prevent="edit(item)" v-tooltip="'Edit'">
                                        <icon name="create"/>
                                    </button>

                                    <button class="btn btn-link"
                                            @click.prevent="destroy(item)"
                                            v-tooltip="'Delete'">
                                        <icon name="trash"/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-3" v-if="site">
                    <div class="card-body">
                        <div class="pb-2">
                            <strong>Site Information</strong>
                        </div>
                        <dl>
                            <dt>Owner</dt>
                            <dd class="text-muted">{{ optional(site.owner, 'Owner name') }}</dd>

                            <dt>Contact Info</dt>
                            <dd class="text-muted">
                                {{ optional(site.owner_contact, 'Owner contact info') }}
                            </dd>

                            <dt>Basal Area</dt>
                            <dd class="text-muted">{{optional(site.basal_area)}}
                                <span v-show="site.basal_area">ft<sup>2</sup>/ac</span></dd>

                            <dt>Average Overstory Tree Diameter</dt>
                            <dd class="text-muted">{{optional(site.diameter)}} <span v-show="site.diameter">in</span>
                            </dd>
                        </dl>
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
        search    : '',
        showPlotForm  : false,
        plots         : [],
        selectedPlotID: null,
        page          : 1,
        lastPage      : 1,
        total         : 0,
        loading       : false,
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
          console.error(e)
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
