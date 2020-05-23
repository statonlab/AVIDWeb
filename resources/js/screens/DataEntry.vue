<template>
    <div>
        <div class="mb-3 d-flex" v-if="!loadingSites">
            <div class="flex-grow-1 d-flex">
                <dropdown
                        class="bg-white"
                        :options="sites.map(s => ({label: s.name, value: s.id}))"
                        v-model="site"
                >
                    <div slot="header">
                        <a href="#" class="dropdown-item d-flex align-items-center pl-2">
                            <icon name="add"/>
                            <span>New Site</span>
                        </a>
                        <div class="dropdown-divider"></div>
                    </div>

                </dropdown>
            </div>
            <div class="flex-shrink-0">
                <button class="btn btn-primary">
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
                    <input type="search" class="form-control" placeholder="Search by plant tag">
                </div>
                <div class="flex-shrink-0 d-flex align-items-center">
                    <select name="measurement_filter" id="measurement-filter" class="ml-1 custom-select">
                        <option value="">Show all measurements</option>
                        <option value="1">Show last measurement</option>
                        <option value="2">Show last 2 measurements</option>
                        <option value="3">Show last 3 measurements</option>
                        <option value="4">Show last 4 measurements</option>
                    </select>
                    <select name="plot_filter" id="plot-filter" class="custom-select ml-1">
                        <option value="">Filter by plot</option>
                    </select>
                </div>
            </div>
            <div class="p-3 d-flex align-items-center justify-content-center" v-if="loadingPlots">
                <inline-spinner class="text-primary"/>
            </div>
            <div class="p-3 text-muted" v-if="!loadingPlots && plots.length === 0"></div>
            <div class="table table-bordered mb-0" v-if="!loadingPlots">
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
                                        <span v-if="measurement_index === 0">Plant #{{plant.tag}}</span>
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
                                <inline-measurement-form :plant="plant" @create="measurementCreated"/>
                            </template>
                            <template v-else>
                                <div class="tr">
                                    <div class="th" :class="{'border-top-0': plant_index > 0}">
                                        <plot-entry-button @addPlant="addPlant(plot)"
                                                           :plot="plot"
                                                           v-if="plant_index === 0"/>
                                    </div>
                                    <div class="th">Plant #{{plant.tag}}</div>
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
                                <inline-measurement-form :plant="plant" @create="measurementCreated"/>
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

  export default {
    name: 'DataEntry',

    components: {PlantForm, Dropdown, InlineSpinner, Icon, PlotEntryButton, InlineMeasurementForm},

    data() {
      return {
        moment,
        sites        : [],
        site         : '',
        plots        : [],
        loadingSites : true,
        loadingPlots : true,
        showPlantForm: false,
        plantPlot    : null,
      }
    },

    mounted() {
      this.loadSites()
    },

    watch: {
      site() {
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
          console.error(e)
        }

        this.loadingSites = false
      },

      async loadPlots() {
        try {
          const {data} = await axios.get(`/web/data-entry/sites/${this.site}/plots`)
          this.plots   = data
        } catch (e) {
          console.error(e)
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
      }
    },
  }
</script>

<style scoped>

</style>
