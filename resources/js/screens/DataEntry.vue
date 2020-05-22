<template>
    <div>
        <div class="mb-3 d-flex">
            <div>
                <select class="form-control" v-model="site">
                    <option v-for="a_site in sites" :value="a_site.id">
                        {{ a_site.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="bg-white mb-3 table-responsive">
            <table class="table table-bordered table-middle mb-0">
                <thead>
                <tr>
                    <th>Plot</th>
                    <th>Plant</th>
                    <th>Measurement Date</th>
                    <th>Located</th>
                    <th>Alive</th>
                    <th>Height</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="plot in plots">
                    <template v-if="plot.plants.length > 0">
                        <template v-for="(plant, plant_index) in plot.plants">
                            <template v-if="plant.measurements.length > 0">
                                <tr v-for="(measurement, measurement_index) in plant.measurements">
                                    <th>
                                        <span v-if="plant_index === 0 && measurement_index === 0">Plot #{{ plot.number }}</span>
                                    </th>
                                    <th>
                                        <span v-if="measurement_index === 0">Plant #{{plant.tag}}</span>
                                    </th>
                                    <td>{{ moment(measurement.date).format('MMM Do, YYYY') }}</td>
                                    <td>{{ measurement.is_located ? 'Yes' : 'No'}}</td>
                                    <td>{{ measurement.is_alive ? 'Yes' : 'No'}}</td>
                                    <td>
                                        <span v-if="measurement.height !== null">
                                            {{measurement.height}} in.
                                        </span>
                                    </td>
                                </tr>
                                <inline-measurement-form :plant="plant"/>
                            </template>
                            <template v-else>
                                <tr>
                                    <th>
                                        <span v-if="plant_index === 0">
                                            Plot #{{ plot.number }}
                                        </span>
                                    </th>
                                    <th>Plant #{{plant.tag}}</th>
                                    <td colspan="4">
                                        <span class="text-muted">No Measurements Found</span>
                                    </td>
                                </tr>
                                <inline-measurement-form :plant="plant"/>
                            </template>
                        </template>
                    </template>
                    <tr v-else>
                        <th>Plot #{{ plot.number }}</th>
                        <td colspan="5" class="text-muted">No Plants Found</td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import InlineMeasurementForm from '../components/Data/InlineMeasurementForm'

  export default {
    name: 'DataEntry',
    components: {InlineMeasurementForm},
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
