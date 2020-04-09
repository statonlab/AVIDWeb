<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-center" v-if="loading">
            <inline-spinner class="text-primary"/>
        </div>
        <div v-if="!loading && plant">
            <div class="d-flex mb-3">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <router-link :to="`/app/plots/${plant.plot_id}`" class="btn btn-link-dark px-1 ml-n1">
                            <icon name="arrow-back"/>
                        </router-link>
                    </div>
                    <div class="ml-1">
                        <h1 class="page-title">Plant #{{ plant.tag }}</h1>
                        <p class="mb-0 text-muted">{{ plant.species.name }}</p>
                    </div>
                </div>
                <div class="ml-auto">
                    <button class="btn btn-link">
                        <icon name="create"/>
                        <span>Edit Plant</span>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header d-flex p-2">
                            <div class="flex-grow-1">
                                <input type="search"
                                       name="search"
                                       class="form-control"
                                       title="Search..."
                                       placeholder="Search...">
                            </div>
                            <div class="ml-auto flex-shrink-0 pl-1">
                                <button class="btn btn-primary" @click.prevent="showForm = true">
                                    <icon name="add"/>
                                    <span>Add Measurement</span>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <div class="p-4 d-flex align-items-center justify-content-center"
                                 v-if="loadingMeasurements">
                                <inline-spinner class="text-primary"/>
                            </div>
                            <div class="p-4" v-if="!loadingMeasurements && measurements.length === 0">
                                <p class="mb-0 text-muted">No measurements recorded yet. Use the add measurement button above to add one.</p>
                            </div>
                            <table class="table" v-if="!loadingMeasurements && measurements.length > 0">
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Located</th>
                                    <th>Alive</th>
                                    <th>Height</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="measurement in measurements">
                                    <td>{{ measurement.date }}</td>
                                    <td>{{ measurement.is_alive ? 'Yes' : 'No'}}</td>
                                    <td>{{ measurement.is_located ? 'Yes' : 'No'}}</td>
                                    <td>{{ measurement.height }} in.</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title font-weight-bold">
                                Plant Information
                            </div>
                            <dl>
                                <dt>Species</dt>
                                <dd>{{ plant.type.name }}<br>{{ plant.species.name }}</dd>

                                <dt>Tag</dt>
                                <dd>#{{ plant.tag }}</dd>

                                <dt>Quadrant</dt>
                                <dd>{{ plant.quadrant }}</dd>

                                <dt>Plot</dt>
                                <dd>#{{ plant.plot.number }}</dd>

                                <dt>Site</dt>
                                <dd>{{ plant.plot.site.name }}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card p-4" v-if="!loading && !plant">
            Plant not found. Please try refreshing the page or contact us.
        </div>

        <measurement-form
                v-if="showForm"
                @close="showForm = false"
                :plant="plant"/>
    </div>
</template>

<script>
  import InlineSpinner from './InlineSpinner'
  import Icon from './Icon'
  import MeasurementForm from '../forms/MeasurementForm'

  export default {
    name: 'Measurements',

    components: {MeasurementForm, Icon, InlineSpinner},

    data() {
      return {
        loading            : true,
        loadingMeasurements: true,
        plant              : null,
        showForm           : false,
        measurements       : [],
        total              : 0,
        page               : 1,
        lastPage           : 1,
      }
    },

    mounted() {
      this.loadPlant()
      this.loadMeasurements()
    },

    methods: {
      async loadPlant() {
        this.loading = true
        try {
          const {id}   = this.$route.params
          const {data} = await axios.get(`/web/plants/${id}`)
          this.plant   = data
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to load plant. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loading = false
      },

      async loadMeasurements() {
        this.loadingMeasurements = true
        try {
          const {id}   = this.$route.params
          const {data} = await axios.get(`/web/plants/${id}/measurements`, {
            params: {
              page: this.page,
            },
          })

          this.measurements = data.data
          this.lastPage     = data.last_page
          this.total        = data.total
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to load measurements. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loadingMeasurements = false
      },
    },
  }
</script>

<style scoped>

</style>
