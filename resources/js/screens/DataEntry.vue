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
                    <select title="Sort Quadrant"
                            name="quadrant_filter"
                            id="quadrant-filter"
                            class="ml-1 custom-select"
                            v-model="sortOrder">
                        <option value="tag_asc">Sort by plant tag, ascending</option>
                        <option value="tag_desc">Sort by plant tag, descending</option>
                        <option value="quadrant_asc">Sort by quadrant, ascending</option>
                        <option value="quadrant_desc">Sort by quadrant, descending</option>
                    </select>
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
                            v-model="plotFilter">
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
                                                           @editPlot="editPlot(plot)"
                                                           @deletePlot="deletePlot(plot)"
                                                           v-if="plant_index === 0 && measurement_index === 0"/>
                                    </div>
                                    <div class="th" :class="{'border-top-0': measurement_index > 0}">
                                        <div v-if="measurement_index === 0">
                                            <plant-entry-button :plant="plant"
                                                                @editPlant="editPlant(plant)"
                                                                @deletePlant="deletePlant(plant)"/>
                                            <p class="mb-0 text-muted">{{plant.species.name}}</p>
                                            <p class="mb-0 text-muted">{{plant.quadrant}} Quadrant</p>
                                        </div>
                                    </div>
                                    <div class="td">
                                        <measurement-entry-button :measurement="measurement"
                                                                  @editMeasurement="editMeasurement(plant, measurement)"
                                                                  @deleteMeasurement="deleteMeasurement(measurement)"/>
                                    </div>
                                    <div class="td">{{ measurement.is_located ? 'Yes' : 'No'}}</div>
                                    <div class="td">{{ measurement.is_alive ? 'Yes' : 'No'}}</div>
                                    <div class="td">
                                        <span v-if="measurement.height !== null">
                                            {{Number(measurement.height).toFixed(2)}} in.
                                        </span>
                                    </div>
                                </div>
                                <inline-measurement-form :plant="plant"
                                                         @create="measurementCreated"
                                                         @set="formsSet++"
                                                         @unset="formsSet--"
                                                         :default-date="defaultDate"
                                                         @date="defaultDate = $event"/>
                            </template>
                            <template v-else>
                                <div class="tr">
                                    <div class="th" :class="{'border-top-0': plant_index > 0}">
                                        <plot-entry-button :plot="plot"
                                                           @addPlant="addPlant(plot)"
                                                           @editPlot="editPlot(plot)"
                                                           @deletePlot="deletePlot(plot)"
                                                           v-if="plant_index === 0"/>
                                    </div>
                                    <div class="th">
                                        <plant-entry-button :plant="plant"
                                                            @editPlant="editPlant(plant)"
                                                            @deletePlant="deletePlant(plant)"/>
                                        <p class="mb-0 text-muted">{{plant.species.name}}</p>
                                        <p class="mb-0 text-muted">{{plant.quadrant}} Quadrant</p>
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
                            <plot-entry-button :plot="plot"
                                               @addPlant="addPlant(plot)"
                                               @editPlot="editPlot(plot)"
                                               @deletePlot="deletePlot(plot)" />
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
                :plant="plant"
                v-if="showPlantForm"
                @close="hidePlantForm"
                @create="plantCreated"
                @update="plantUpdated($event)"
        />

        <plot-form
                :site="plotSite"
                :plot="plot"
                v-if="showPlotForm"
                @close="showPlotForm = false"
                @create="plotCreated"
                @update="plotUpdated($event)"
        />

        <site-form
                v-if="showSiteForm"
                @close="showSiteForm = false"
                @create="siteCreated"/>

        <measurement-form
                :plant="plant"
                :measurement="measurement"
                v-if="showMeasurementForm"
                @close="showMeasurementForm = false"
                @update="measurementUpdated($event)"/>
    </div>
</template>

<script>
  import moment from 'moment'
  import InlineMeasurementForm from '../components/Data/InlineMeasurementForm'
  import PlotEntryButton from '../components/Data/PlotEntryButton'
  import PlantEntryButton from '../components/Data/PlantEntryButton'
  import MeasurementEntryButton from '../components/Data/MeasurementEntryButton'
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import Dropdown from '../components/Dropdown'
  import PlantForm from '../forms/PlantForm'
  import SiteForm from '../forms/SiteForm'
  import PlotForm from '../forms/PlotForm'
  import MeasurementForm from '../forms/MeasurementForm'

  export default {
    name: 'DataEntry',

    components: {
      PlotForm,
      SiteForm,
      PlantForm,
      MeasurementForm,
      Dropdown,
      InlineSpinner,
      Icon,
      PlotEntryButton,
      PlantEntryButton,
      MeasurementEntryButton,
      InlineMeasurementForm
    },

    data() {
      return {
        moment,
        sites              : [],
        site               : '',
        allPlots           : [],
        plots              : [],
        loadingSites       : true,
        loadingPlots       : true,
        limit              : '',
        sortOrder          : 'tag_asc',
        plotFilter         : '',
        search             : '',
        showMeasurementForm: false,
        showPlantForm      : false,
        showSiteForm       : false,
        showPlotForm       : false,
        measurement        : null,
        plot               : null,
        plant              : null,
        plantPlot          : null,
        plotSite           : null,
        _request           : null,
        defaultDate        : null,
        deleting           : null,
        formsSet           : 0,
      }
    },

    mounted() {
      this.loadSites()

      window.onbeforeunload = () => (this.formsSet > 0 ? true : null);
    },

    watch: {
      site(site) {
        this.plotFilter   = ''
        this.search       = ''
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

      plotFilter() {
        this.loadPlots()
      },

      search() {
        this.loadPlots()
      },

      sortOrder() {
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
              limit     : this.limit,
              plot      : this.plotFilter,
              search    : this.search,
              sort_order: this.sortOrder,
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

      editPlant(plant) {
        this.plant = plant
        this.showPlantForm = true
      },

      editPlot(plot) {
        this.plot = plot
        this.showPlotForm = true
      },

      deletePlot(plot) {
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

      deletePlant(plant) {
        if (this.deleting !== null) {
          return
        }

        this.$confirm({
          title    : `Are you sure you want to delete Plant #${plant.tag}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.deleting = plant.id
            try {
              await axios.delete(`/web/plants/${plant.id}`)
              this.loadPlots()
            } catch (e) {
              this.$notify({
                text: 'Unable to delete plant. Please try refreshing the page.',
                type: 'error',
              })
              console.error(e)
            }
            this.deleting = null
          },
        })
      },

      deleteMeasurement(measurement) {
        if (this.deleting !== null) {
          return
        }

        this.$confirm({
          title    : 'Are you sure you want to delete measurement collected on ' + moment(measurement.date).format('MMM Do, YYYY') + '?',
          text     : 'This action is permanent.',
          onConfirm: async () => {
            this.deleting = measurement.id
            try {
              await axios.delete(`/web/measurements/${measurement.id}`)
              this.loadPlots()
            } catch (e) {
              console.error(e)
              this.$notify({
                text: 'Unable to delete measurement. Please try refreshing the page.',
              })
            }
            this.deleting = null
          },
        })
      },

      editMeasurement(plant, measurement) {
        this.plant               = plant
        this.measurement         = measurement
        this.showMeasurementForm = true
      },

      plotUpdated(plot) {
        this.showPlotForm = false
        this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
      },

      measurementUpdated(measurement) {
        this.showMeasurementForm = false
        let plot = this.plots.find(p => p.id === measurement.plot_id)
        let plant = plot.plants.find(p => p.id === measurement.plant_id)
        plant.measurements = plant.measurements.map(m => m.id === measurement.id ? measurement : m)
        plot.plants = plot.plants.map(p => p.id === plant.id ? plant : p)
        this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
      },

      plantUpdated(plant) {
        this.hidePlantForm()
        let plot = this.plots.find(p => p.id === plant.plot_id)
        plot.plants = plot.plants.map(p => p.id === plant.id ? plant : p)
        this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
        this.$notify({
          type: 'success',
          text: 'Plant updated successfully',
        })
      },

      hidePlantForm() {
        this.showPlantForm = false
        this.plantPlot     = null
        this.plant         = null
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

    beforeRouteLeave(to, from, next) {
      if (this.formsSet > 0) {
        this.$confirm({
            title: 'Unsaved Changes!',
            text: 'Do you really want to leave? You have unsaved changes!',
            onConfirm: next,
        })
      } else {
        next()
      }
    }
  }
</script>

<style scoped>

</style>
