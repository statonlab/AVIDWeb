<template>
    <div>
        <div class="d-flex align-items-center justify-content-center" v-if="loading">
            <inline-spinner class="text-primary"/>
        </div>
        <div v-if="!loading && plant">
            <div class="d-flex mb-3">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <router-link :to="`${backUrlPrefix}/${plant.plot.site_id}`" class="btn btn-link-dark px-1 ml-n1">
                            <icon name="arrow-back"/>
                        </router-link>
                    </div>
                    <div class="ml-1">
                        <h1 class="page-title">Plant #{{ plant.tag }}</h1>
                        <p class="mb-0 text-muted">{{ plant.type.name }} ({{ plant.species.name }})</p>
                    </div>
                </div>
                <div class="ml-auto">
                    <button class="btn btn-link" v-if="editable || User.owns(plant) || User.can('update sites')" @click.prevent="editingPlant = true">
                        <icon name="create"/>
                        <span>Edit Plant</span>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header d-flex p-2" v-if="User.owns(plant) || User.can('update sites')">
                            <div class="ml-auto flex-shrink-0 pl-1">
                                <button class="btn btn-primary" :disabled="disableCreate" @click.prevent="add">
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
                            <div class="p-4" v-if="!unauthorized && !loadingMeasurements && measurements.length === 0">
                                <p class="mb-0 text-muted">No measurements recorded yet. Use the add measurement button above to add one.</p>
                            </div>
                            <table class="table mb-0" v-if="!unauthorized && !loadingMeasurements && measurements.length > 0">
                                <thead>
                                <tr>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('date')">
                                            <span class="mr-1">Date</span>
                                            <icon :name="sortIcon('date')"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('is_located')">
                                            <span class="mr-1">Located</span>
                                            <icon :name="sortIcon('is_located')"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('is_alive')">
                                            <span class="mr-1">Alive</span>
                                            <icon :name="sortIcon('is_alive')"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('height')">
                                            <span class="mr-1">Height</span>
                                            <icon :name="sortIcon('height')"/>
                                        </a>
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="measurement in measurements"
                                    :class="{'hover-visible-container': deleting !== measurement.id}">
                                    <td>{{ moment(measurement.date).format('MMM Do, YYYY') }}</td>
                                    <td>{{ measurement.is_located ? 'Yes' : 'No'}}</td>
                                    <td>
                                        <span v-if="measurement.is_alive !== null">
                                            {{ measurement.is_alive ? 'Yes' : 'No'}}
                                        </span>
                                    </td>
                                    <td>
                                        <span v-if="measurement.height !== null">
                                            {{ measurement.height }} in.
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex justify-content-end hover-visible">
                                            <button type="button"
                                                    class="btn btn-link btn-sm"
                                                    v-tooltip="'Edit'"
                                                    v-if="editable || User.owns(measurement) || User.can('update sites')"
                                                    @click.prevent="edit(measurement)">
                                                <icon name="create"/>
                                            </button>
                                            <button type="button"
                                                    class="btn btn-sm"
                                                    v-tooltip="'Delete'"
                                                    v-if="User.owns(measurement) || User.can('delete sites')"
                                                    @click.prevent="destroy(measurement)"
                                                    :class="deleting !== measurement.id ? 'btn-link' : 'btn-danger'"
                                                    :disabled="deleting === measurement.id">
                                                <icon name="trash" v-if="measurement.id !== deleting"/>
                                                <inline-spinner v-else/>
                                            </button>
                                        </div>
                                    </td>
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

        <div class="card p-4" v-if="unauthorized">
            {{unauthorizedMessage}}
        </div>

        <div class="card p-4" v-if="!unauthorized && !loading && !plant">
            Plant not found. Please try refreshing the page or contact us.
        </div>

        <measurement-form
                v-if="showForm"
                @close="showForm = false"
                :measurement="measurement"
                @update="updated($event)"
                @create="created($event)"
                :plant="plant"/>

        <plant-form
                v-if="editingPlant"
                :plant="plant"
                @close="editingPlant = false"
                @update="plantUpdated($event)"/>
    </div>
</template>

<script>
  import InlineSpinner from '../InlineSpinner'
  import Icon from '../Icon'
  import MeasurementForm from '../../forms/MeasurementForm'
  import moment from 'moment'
  import PlantForm from '../../forms/PlantForm'
  import User from '../../helpers/User'

  export default {
    name: 'MeasurementsDataView',

    components: {PlantForm, MeasurementForm, Icon, InlineSpinner},

    props: {
      unauthorizedMessage: {required: false, type: String, default: 'You do not have permission to view plots.'},
      backUrlPrefix      : {required: false, type: String, default: '/app/sites'},
      disableCreate      : {required: false, type: Boolean, default: false},
      editable           : {required: false, type: Boolean, default: false},
      backToSites        : {required: false, type: Boolean, default: false},
    },

    data() {
      return {
        User,
        moment,
        loading            : true,
        editingPlant       : false,
        loadingMeasurements: true,
        plant              : null,
        showForm           : false,
        measurements       : [],
        total              : 0,
        page               : 1,
        lastPage           : 1,
        measurement        : null,
        deleting           : null,
        orderBy            : 'date',
        orderDir           : 'desc',
        unauthorized       : false,
      }
    },

    mounted() {
      this.loadPlant()
      this.loadMeasurements()
    },

    watch: {
      '$route.params.id': {
        handler() {
          this.loadPlant()
          this.loadMeasurements()
        },
      },
    },

    methods: {
      async loadPlant() {
        this.loading = true
        try {
          const {id}   = this.$route.params
          const {data} = await axios.get(`/web/plants/${id}`)
          this.plant   = data
        } catch (e) {
          if (e.response && e.response.status === 403) {
            this.unauthorized = true
            this.loading = false
            return
          }
          console.error(e)
          this.$notify({
            text: 'Unable to load plant. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loading = false
      },

      async loadMeasurements() {
        try {
          const {id}   = this.$route.params
          const {data} = await axios.get(`/web/plants/${id}/measurements`, {
            params: {
              order_by : this.orderBy,
              order_dir: this.orderDir,
              page     : this.page,
            },
          })

          this.measurements = data.data
          this.lastPage     = data.last_page
          this.total        = data.total
        } catch (e) {
          if (e.response && e.response.status === 403) {
            this.unauthorized = true
            this.loadingMeasurements = false
            return
          }
          console.error(e)
          this.$notify({
            text: 'Unable to load measurements. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loadingMeasurements = false
      },

      add() {
        this.measurement = null
        this.showForm    = true
      },

      edit(measurement) {
        this.measurement = measurement
        this.showForm    = true
      },

      closeForm() {
        this.measurement = null
        this.showForm    = false
      },

      updated(measurement) {
        this.closeForm()
        this.measurements = this.measurements.map(m => m.id === measurement.id ? measurement : m)
      },

      created(measurement) {
        this.closeForm()
        this.loadMeasurements()
      },

      destroy(measurement) {
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
              this.loadMeasurements()
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

      plantUpdated(plant) {
        this.plant        = plant
        this.editingPlant = false
      },

      sort(column) {
        if (column === this.orderBy) {
          this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
        } else {
          this.orderBy  = column
          this.orderDir = 'asc'
        }

        this.loadMeasurements()
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
