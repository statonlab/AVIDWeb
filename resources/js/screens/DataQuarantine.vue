<template>
  <div>
    <div class="mb-3">
      <span class="page-title">Data Quarantine</span>
      <div class="text-muted">
        Entries from spreadsheet importing that require additional information will show up here.
        After filling out the requisite information, these entries will be added to your sites.
      </div>
    </div>
    <div class="card">
      <div class="card-header d-flex" v-if="sites.length !== 0">
        <div class="flex-shrink-0">
          <dropdown class="bg-white"
                    :options="sites.map(s => ({label: s.name, value: s.id}))"
                    v-model="site">
          </dropdown>
        </div>
      </div>
      <div class="card-body px-4 py-2">
        <p class="mb-0 p-4 text-muted" v-if="plots.length === 0">
          No quarantined data exists.
        </p>
        <div v-else v-for="plot in plots">
          <div class="d-flex">
            <span class="page-title mb-2 mr-2">Plot #{{plot.number}}</span>
            <div v-if="plot.is_quarantined">
              <button class="btn btn-link btn-sm mr-1"
                      @click.prevent="editPlot(plot)"
                      v-tooltip="'Edit Plot'">
                <icon name="create"/>
              </button>
              <button class="btn btn-link btn-sm mr-1"
                      @click.prevent="deletePlot(plot)"
                      v-tooltip="'Delete Plot'">
                <icon name="trash" v-if="deleting !== plot.id"/>
                <inline-spinner v-else/>
              </button>
              <button class="btn btn-link btn-sm mr-1"
                      @click.prevent="importPlot(plot)"
                      v-tooltip="'Import Plot'"
                      :disabled="plot.is_incomplete">
                <icon name="cloud-upload-outline" />
              </button>
            </div>
          </div>
          <table class="table">
            <thead>
            <tr>Tag</tr>
            <tr></tr>
            </thead>
            <tbody>
              <tr v-for="plant in plot.plants">
                <td :class="{'text-danger': plant.is_incomplete}">#{{plant.tag}}</td>
                <td class="text-right no-wrap">
                  <button class="btn btn-link btn-sm mr-1"
                          @click.prevent="editPlant(plant)"
                          v-tooltip="'Edit Plant'">
                    <icon name="create"/>
                  </button>
                  <button class="btn btn-link btn-sm mr-1"
                          @click.prevent="deletePlant(plant)"
                          v-tooltip="'Delete Plant'">
                    <icon name="trash" v-if="deleting !== plant.id"/>
                    <inline-spinner v-else/>
                  </button>
                  <span class="d-inline-block"
                        data-toggle="tooltip"
                        :title="getPlantDisabledTooltip(plot, plant)">
                    <button class="btn btn-link btn-sm mr-1"
                            @click.prevent="importPlant(plant)"
                            v-tooltip="'Import Plant'"
                            :disabled="plant.is_incomplete || plot.is_quarantined">
                      <icon name="cloud-upload-outline" />
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <plot-form
        :site="sites.filter(s => s === site)[0]"
        :plot="plot"
        v-if="showPlotForm"
        @update="plotUpdated($event)"
        @close="showPlotForm = false"/>

    <plant-form
        v-if="showPlantForm"
        :plant="plant"
        @close="showPlantForm = false"
        @update="plantUpdated($event)"/>
  </div>
</template>

<script>
  import Dropdown from '../components/Dropdown'
  import Icon from '../components/Icon'
  import PlotForm from '../forms/PlotForm'
  import PlantForm from '../forms/PlantForm'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'DataQuarantine',

    components: { Dropdown, PlotForm, PlantForm, Icon, InlineSpinner },

    mounted() {
      this.loadSites()
    },

    watch: {
      site() {
        this.loadPlots()
      }
    },

    data() {
      return {
        plot: null,
        plant: null,
        plots: [],
        sites: [],
        site: '',
        loading: false,
        showPlotForm: false,
        showPlantForm: false,
        deleting: null,
        importing: null,
      }
    },

    methods: {
      async loadSites() {
        this.loadingSites = true

        try {
          const {data} = await axios.get(`/web/data-quarantine/sites`)
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
        this.loading = true

        try {
          const {data} = await axios.get(`/web/data-quarantine/sites/${this.site}`)
          this.plots   = data
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loading = false
      },

      editPlot(plot) {
        this.plot = plot
        this.showPlotForm = true
      },

      plotUpdated(plot) {
        let plants = this.plots.filter(p => p.id === plot.id)[0].plants
        plot.is_incomplete = false
        plot.plants = plants
        this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
        this.showPlotForm = false
      },

      async importPlot(plot) {
        if (this.importing !== null) {
          return
        }

        this.$confirm({
          title    : `Are you sure you want to import Plot #${plot.number}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.importing = plot.id
            try {
              await axios.patch(`/web/data-quarantine/import/plot/${plot.id}`)
              this.loadPlots()
              this.$notify({
                text: 'Plot imported successfully.',
                type: 'success',
              })
            } catch (e) {
              this.$notify({
                text: 'Unable to import plot. Please try refreshing the page.',
                type: 'error',
              })
              console.error(e)
            }
            this.importing = null
          },
        })
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
              this.$notify({
                text: 'Plot deleted successfully.',
                type: 'success',
              })
            } catch (e) {
              console.error(e)
              this.$notify({
                text: 'Unable to delete plot. Please try refreshing the page.',
                type: 'error',
              })
            }
            this.deleting = null
          },
        })
      },

      plantUpdated(plant) {
        plant.is_incomplete = false
        let plot = this.plots.filter(p => p.id === plant.plot_id)[0]
        plot.plants = plot.plants.map(p => p.id === plant.id ? plant : p)
        this.plots = this.plots.map(p => p.id === plant.plot_id ? plot : p)
        this.showPlantForm = false
      },

      editPlant(plant) {
        this.plant = plant
        this.showPlantForm = true
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
              this.$notify({
                text: 'Plant deleted successfully.',
                type: 'success',
              })
            } catch (e) {
              this.$notify({
                text: 'Unable to delete plant. Please try refreshing the page.',
                type: 'error',
              })
            }
            this.deleting = null
          },
        })
      },

      async importPlant(plant) {
        if (this.importing !== null) {
          return
        }

        this.$confirm({
          title    : `Are you sure you want to import Plant #${plant.tag}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.importing = plant.id
            try {
              await axios.patch(`/web/data-quarantine/import/plant/${plant.id}`)
              this.loadPlots()
              this.$notify({
                text: 'Plant imported successfully.',
                type: 'success',
              })
            } catch (e) {
              this.$notify({
                text: 'Unable to import plant. Please try refreshing the page.',
                type: 'error',
              })
            }
            this.importing = null
          },
        })
      },

      getPlantDisabledTooltip(plot, plant) {
        if (plant.is_incomplete) {
          return 'Plant information is incomplete'
        }

        if (plot.is_quarantined) {
          return 'Plot must be imported first'
        }

        return ''
      }
    }
  }
</script>

<style scoped>

</style>