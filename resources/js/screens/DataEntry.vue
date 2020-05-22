<template>
    <div>
        <div class="mb-3 d-flex" v-if="!loadingSites">
            <div class="flex-grow-1">
                <select class="custom-select w-auto" v-model="site">
                    <option v-for="a_site in sites" :value="a_site.id">
                        {{ a_site.name }}
                    </option>
                </select>
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
        <div class="card mb-3 table-responsive position-static" v-if="!loadingSites">
            <div class="card-header d-flex px-2 border-bottom">
                <div class="flex-grow-1">
                    <input type="search" class="form-control" placeholder="Search by plant tag">
                </div>
                <div class="flex-shrink-0">
                    <select name="" id="" class="custom-select">
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
                                    <div class="th" :class="{'border-top-0': plant_index > 0 || measurement_index > 0 }">
                                        <plot-entry-button :plot="plot"
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
                                <inline-measurement-form :plant="plant"/>
                            </template>
                            <template v-else>
                                <div class="tr">
                                    <div class="th" :class="{'border-top-0': plant_index > 0}">
                                        <plot-entry-button :plot="plot" v-if="plant_index === 0"/>
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
                                <inline-measurement-form :plant="plant"/>
                            </template>
                        </template>
                    </template>
                    <div class="tr" v-else>
                        <div class="th">
                            <plot-entry-button :plot="plot"/>
                        </div>
                        <div class="td text-muted border-right-0">No Plants Found</div>
                        <div class="td border-right-0" v-for="i in 3"></div>
                        <div class="td"></div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import InlineMeasurementForm from '../components/Data/InlineMeasurementForm'
  import PlotEntryButton from '../components/Data/PlotEntryButton'
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name      : 'DataEntry',
    components: {InlineSpinner, Icon, PlotEntryButton, InlineMeasurementForm},
    data() {
      return {
        moment,
        sites       : [],
        site        : '',
        plots       : [],
        loadingSites: true,
        loadingPlots: true,
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
        this.loadingPlots = true
        try {
          const {data} = await axios.get(`/web/data-entry/sites/${this.site}/plots`)
          this.plots   = data
        } catch (e) {
          console.error(e)
        }
        this.loadingPlots = false
      },
    },
  }
</script>

<style scoped>

</style>
