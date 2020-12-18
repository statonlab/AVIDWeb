<template>
  <div>
    <div class="page-title">
      Data Quarantine
    </div>
    <div class="text-muted">
      Entries from spreadsheet importing that require additional information will show up here.
      After filling out the requisite information, these entries will be added to your sites.
    </div>
    <div v-if="sites">
      <dropdown class="bg-white"
                :options="sites.map(s => ({label: s.name, value: s.id}))"
                v-model="site">
      </dropdown>
    </div>
    <div v-for="plot in plots">
      <div class="d-flex">
        <span :class="{'text-danger': plot.is_incomplete}">Plot #{{plot.number}}</span>
        <div class="flex-shrink-0">
          <button class="btn btn-link btn-sm mr-1"
                  @click.prevent="editPlot(plot)"
                  v-tooltip="'Edit Plot'">
            <icon name="create"/>
          </button>
          <button class="btn btn-link"
                  @click.prevent="deletePlot(plot)"
                  v-tooltip="'Delete Plot'">
            <icon name="trash" v-if="deleting !== plot.id"/>
            <inline-spinner v-else/>
          </button>
          <button class="btn btn-link"
                  @click.prevent="importPlot(plot)"
                  v-tooltip="'Import Plot'"
                  :disabled="plot.is_incomplete">
            <icon name="cloud-upload-outline" />
          </button>
        </div>
      </div>
      <div v-for="plant in plot.plants">
        <span :class="{'text-danger': plant.is_incomplete}">Plant #{{plant.tag}}</span>
        <button class="btn btn-link btn-sm mr-1"
                @click.prevent="editPlant(plant)"
                v-tooltip="'Edit Plant'">
          <icon name="create"/>
        </button>
        <button class="btn btn-link"
                @click.prevent="deletePlant(plant)"
                v-tooltip="'Delete Plant'">
          <icon name="trash" v-if="deleting !== plant.id"/>
          <inline-spinner v-else/>
        </button>
        <button class="btn btn-link"
                @click.prevent="importPlant(plant)"
                v-tooltip="'Import Plant'"
                :disabled="plant.is_incomplete">
          <icon name="cloud-upload-outline" />
        </button>
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
        plot.is_incomplete = false
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
              await axios.patch(`/web/data-quarantine/${this.plot.id}`)
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
              await axios.delete(`/web/plots/${this.plot.id}`)
              this.loadPlots()
              this.$notify({
                text: 'Plot deleted successfully.',
                type: 'success',
              })
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

      plantUpdated(plant) {
        plant.is_incomplete = false
        this.plots = this.plots.map(p => {
          p.id === plant.plot_id ? p.plants.map(pp =>
            pp.id === plant.id ? plant : pp
          ) : p
        })
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
              await axios.patch(`/web/data-quarantine/${plant.id}`)
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
    }
  }
</script>

<style scoped>

</style>