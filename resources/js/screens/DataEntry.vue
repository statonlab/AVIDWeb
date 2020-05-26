<template>
    <div>
        <div class="mb-3 d-flex" v-if="!loadingSites">
            <div class="flex-grow-1 d-flex">
                <dropdown class="bg-white"
                          :options="sites.map(s => ({label: s.name, value: s.id}))"
                          v-model="site">
                    <div slot="header">
                        <a href="#"
                           class="dropdown-item d-flex align-items-center pl-2"
                           @click.prevent="showSiteForm = true">
                            <icon name="add"/>
                            <span>New Site</span>
                        </a>
                        <div class="dropdown-divider"></div>
                    </div>
                </dropdown>
            </div>
            <div class="flex-shrink-0">
                <button class="btn btn-primary" type="button" @click.prevent="showPlotForm = true">
                    <icon name="add"/>
                    <span>Plot</span>
                </button>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center" v-if="loadingSites">
            <inline-spinner class="text-primary"/>
        </div>
        <div class="card mb-3 position-static" v-if="!loadingSites">
            <div class="card-header d-flex px-2">
                <div class="flex-grow-1">
                    <input type="search"
                           v-model="search"
                           class="form-control"
                           placeholder="Search by plant tag"
                           title="Search">
                </div>
                <div class="flex-shrink-0 d-flex align-items-center">
                    <select title="Limit Measurements"
                            name="measurement_filter"
                            id="measurement-filter"
                            class="ml-1 custom-select"
                            v-model="limit">
                        <option value="">Show all measurements</option>
                        <option value="1">Show last measurement</option>
                        <option value="2">Show last 2 measurements</option>
                        <option value="3">Show last 3 measurements</option>
                        <option value="4">Show last 4 measurements</option>
                    </select>
                    <select name="plot_filter"
                            id="plot-filter"
                            class="custom-select ml-1"
                            title="Filter by plot"
                            v-model="plot">
                        <option value="">All Plots</option>
                        <option v-for="plot in allPlots" :value="plot.id">
                            Plot #{{ plot.number }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="p-3 d-flex align-items-center justify-content-center" v-if="loadingPlots">
                <inline-spinner class="text-primary"/>
            </div>
            <div class="p-3 text-muted" v-if="!loadingPlots && plots.length === 0">
                No plots found. Please use the "+ PLOT" button above to create a new one.
            </div>
            <div class="table table-bordered mb-0" v-if="!loadingPlots && plots.length > 0">
                <div class="tr">
                    <div class="th text-muted border-bottom">Plot</div>
                    <div class="th text-muted border-bottom">Plant</div>
                    <div class="th text-muted border-bottom">Measurement Date</div>
                    <div class="th text-muted border-bottom">Located</div>
                    <div class="th text-muted border-bottom">Alive</div>
                    <div class="th text-muted border-bottom">Height</div>
                </div>
                <template v-for="(plot) in plots">
                    <template v-if="plot.plants.length > 0">
                        <template v-for="(plant, plant_index) in plot.plants">
                            <template v-if="plant.measurements.length > 0">
                                <div class="tr" v-for="(measurement, measurement_index) in plant.measurements">
                                    <div class="th"
                                         :class="{'border-top-0': plant_index > 0 || measurement_index > 0 }">
                                        <plot-entry-button :plot="plot"
                                                           @addPlant="addPlant(plot)"
                                                           v-if="plant_index === 0 && measurement_index === 0"/>
                                    </div>
                                    <div class="th" :class="{'border-top-0': measurement_index > 0}">
                                        <div v-if="measurement_index === 0">
                                            {{ plant.type.name }} #{{plant.tag}}
                                        </div>
                                    </div>
                                    <div class="td">{{ moment(measurement.date).format('MMM Do, YYYY') }}</div>
                                    <div class="td">{{ measurement.is_located ? 'Yes' : 'No'}}</div>
                                    <div class="td">{{ measurement.is_alive ? 'Yes' : 'No'}}</div>
                                    <div class="td">
                                        <span v-if="measurement.height !== null">
                                            {{measurement.height}} in.
                                        </span>
                                    </div>
                                </div>
                                <inline-measurement-form :plant="plant"
                                                         @create="measurementCreated"
                                                         :default-date="defaultDate"
                                                         @date="defaultDate = $event"/>
                            </template>
                            <template v-else>
                                <div class="tr">
                                    <div class="th" :class="{'border-top-0': plant_index > 0}">
                                        <plot-entry-button @addPlant="addPlant(plot)"
                                                           :plot="plot"
                                                           v-if="plant_index === 0"/>
                                    </div>
                                    <div class="th">
                                        {{ plant.type.name }} #{{plant.tag}}
                                    </div>
                                    <div class="td border-right-0">
                                        <span class="text-muted">No Measurements Found</span>
                                    </div>
                                    <div class="td border-right-0">
                                    </div>
                                    <div class="td border-right-0">
                                    </div>
                                    <div class="td">
                                    </div>
                                </div>
                                <inline-measurement-form :plant="plant"
                                                         @create="measurementCreated"
                                                         :default-date="defaultDate"
                                                         @date="defaultDate = $event"/>
                            </template>
                        </template>
                    </template>
                    <div class="tr" v-else>
                        <div class="th">
                            <plot-entry-button @addPlant="addPlant(plot)" :plot="plot"/>
                        </div>
                        <div class="td text-muted border-right-0">No Plants Found</div>
                        <div class="td border-right-0" v-for="i in 3"></div>
                        <div class="td"></div>
                    </div>
                </template>
            </div>
        </div>

        <plant-form
                :plot="plantPlot"
                v-if="showPlantForm"
                @close="hidePlantForm"
                @create="plantCreated"
        />

        <plot-form
                :site="plotSite"
                v-if="showPlotForm"
                @close="showPlotForm = false"
                @create="plotCreated"
        />

        <site-form
                v-if="showSiteForm"
                @close="showSiteForm = false"
                @create="siteCreated"/>
    </div>
</template>

<script>
  import moment from 'moment'
  import InlineMeasurementForm from '../components/Data/InlineMeasurementForm'
  import PlotEntryButton from '../components/Data/PlotEntryButton'
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import Dropdown from '../components/Dropdown'
  import PlantForm from '../forms/PlantForm'
  import SiteForm from '../forms/SiteForm'
  import PlotForm from '../forms/PlotForm'

  export default {
    name: 'DataEntry',

    components: {PlotForm, SiteForm, PlantForm, Dropdown, InlineSpinner, Icon, PlotEntryButton, InlineMeasurementForm},

    data() {
      return {
        moment,
        sites        : [],
        site         : '',
        allPlots     : [],
        plots        : [],
        loadingSites : true,
        loadingPlots : true,
        limit        : '',
        plot         : '',
        search       : '',
        showPlantForm: false,
        showSiteForm : false,
        showPlotForm : false,
        plantPlot    : null,
        plotSite     : null,
        _request     : null,
        defaultDate  : null,
      }
    },

    mounted() {
      this.loadSites()
    },

    watch: {
      site(site) {
        this.plot   = ''
        this.search = ''
        const sites = this.sites.filter(s => s.id === site)
        if (sites.length > 0) {
          this.plotSite = sites[0]
          this.allPlots = sites[0].plots
        }
        this.loadPlots()
      },

      limit() {
        this.loadPlots()
      },

      plot() {
        this.loadPlots()
      },

      search() {
        this.loadPlots()
      },
    },

    methods: {
      async loadSites() {
        this.loadingSites = true

        try {
          const {data} = await axios.get(`/web/data-entry/sites`)
          this.sites   = data
          if (this.site === '' && data.length > 0) {
            this.site = this.sites[0].id
          }
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loadingSites = false
      },

      async loadPlots() {
        if (this._request) {
          this._request()
        }

        try {
          const {data} = await axios.get(`/web/data-entry/sites/${this.site}/plots`, {
            params     : {
              limit : this.limit,
              plot  : this.plot,
              search: this.search,
            },
            cancelToken: new axios.CancelToken(fn => this._request = fn),
          })
          this.plots   = data
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.$alert('Unable to load plots. Please try refreshing the page or contact us.')

            console.error(e)
          }
        }

        this.loadingPlots = false
      },

      addPlant(plot) {
        this.plantPlot     = plot
        this.showPlantForm = true
      },

      hidePlantForm() {
        this.showPlantForm = false
        this.plantPlot     = null
      },

      plantCreated() {
        this.loadPlots()
        this.hidePlantForm()
        this.$notify({
          type: 'success',
          text: 'Plant created successfully',
        })
      },

      measurementCreated() {
        this.loadPlots()
      },

      siteCreated(site) {
        site.plots = []
        this.sites.push(site)
        this.site         = site.id
        this.showSiteForm = false
      },

      plotCreated() {
        this.loadPlots()
        this.showPlotForm = false
      },
    },
  }
</script>

<style scoped>

</style>
