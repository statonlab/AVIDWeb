<template>
  <div>
    <div class="mb-3">
      <span class="page-title">Data Quarantine</span>
      <div class="text-muted">
        Entries from spreadsheet importing that require additional information will show up here.
        After filling out the requisite information, these entries will be added to your sites.
      </div>
    </div>

    <div v-if="!loadingSites && sites.length > 0">
      <div class="flex-grow-1 d-flex mb-3">
        <dropdown class="bg-white"
                  :options="sites.map(s => ({label: s.name, value: s.id}))"
                  v-model="site">
        </dropdown>
      </div>

      <div v-if="hasQuarantinedPlots">
        <div class="row">
          <div class="col-lg-6" v-for="plot in plots">
            <PlotFormCard :plot="plot"
                          @deleted="plotDeleted(plot)"
                          @imported="plotImported(plot)"/>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="card mb-3 position-static" v-if="!loadingSites && sites.length > 0">
          <div class="card-header d-flex px-2">
            <div class="flex-grow-1">
              <input type="search"
                     v-model="search"
                     class="form-control"
                     placeholder="Search by plant tag"
                     title="Search">
            </div>
          </div>
          <div class="p-3 d-flex align-items-center justify-content-center" v-if="loadingPlots">
            <inline-spinner class="text-primary"/>
          </div>
          <div class="p-3 text-muted" v-if="!loadingPlots && plots.length === 0">
            No plots found.
          </div>
          <div class="table table-bordered mb-0" v-if="!loadingPlots && plots.length > 0">
            <div class="tr">
              <div class="th text-muted border-bottom">Plot</div>
              <div class="th text-muted border-bottom">Tag</div>
              <div class="th text-muted border-bottom">Plant Type</div>
              <div class="th text-muted border-bottom">Species</div>
              <div class="th text-muted border-bottom">Quadrant</div>
            </div>
            <template v-for="plot in plots">
              <template v-if="plot.plants.length > 0">
                <template v-for="(plant, plant_index) in plot.plants">
                  <inline-plant-form :plot="plot"
                                     :plant="plant"
                                     :species="species"
                                     :plants="plants"
                                     :showPlotNumber="plant_index === 0"
                                     :total="total"/>
                </template>
              </template>
              <div class="tr" v-else>
                <div class="th">
                  <span>{{ `Plot #${plot.number}` }}</span>
                </div>
                <div class="td text-muted border-right-0">No Plants Found</div>
                <div class="td border-right-0" v-for="i in 2"></div>
                <div class="td"></div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Dropdown from '../components/Dropdown'
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import InlinePlantForm from '../components/Data/InlinePlantForm'
  import PlotEntryButton from '../components/Data/PlotEntryButton'
  import PlotFormCard from '../components/Data/PlotFormCard'

  export default {
    name: 'DataQuarantine',

    components: {
      Dropdown,
      Icon,
      InlineSpinner,
      InlinePlantForm,
      PlotEntryButton,
      PlotFormCard,
    },

    mounted() {
      this.loadSites()
      this.loadTypes()
    },

    watch: {
      site() {
        this.loadPlots()
      }
    },

    data() {
      return {
        plot              : null,
        plots             : [],
        sites             : [],
        species           : [],
        plants            : [],
        site              : '',
        importing         : null,
        deleting          : null,
        showPlotForm      : false,
        showPlantForm     : false,
        loadingSites      : false,
        loadingPlots      : false,
        loadingSpecies    : false,
        loadingPlants     : false,
        search            : '',
        speciesSearch     : '',
        total             : 0,
        hasQuarantinedPlots: false,
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
        this.loadingPlots = true

        try {
          const {data} = await axios.get(`/web/data-quarantine/sites/${this.site}`)
          this.plots   = data
          this.hasQuarantinedPlots = data.filter(plot => plot.is_quarantined).length !== 0
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loadingPlots = false
      },

      async loadSpecies() {
        this.loadingSpecies = true

        try {
          const {data} = await axios.get('/web/species', {
            params: {
              search        : this.speciesSearch,
            },
          })
          this.total = data.total
          this.species = data.data.map(species => ({
            label: species.name,
            value: species.id,
          }))
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loadingSpecies = false
      },

      async loadTypes() {
        this.loadingPlants = true
        try {
          const {data}            = await axios.get('/web/plant-types')
          this.plants             = data
          await this.loadSpecies()
        } catch (e) {
          this.$alert('Unable to load form. Please try refreshing the page.')
        }
        this.loadingPlants = false
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

      plotDeleted(plot) {
        this.plots = this.plots.filter(p => p.id !== plot.id)
      },

      plotImported(plot) {
        this.plots = this.plots.filter(p => p.id !== plot.id)
      },

      plantUpdated(plant) {
        plant.is_incomplete = false
        let plot = this.plots.filter(p => p.id === plant.plot_id)[0]
        plot.plants = plot.plants.map(p => p.id === plant.id ? plant : p)
        this.plots = this.plots.map(p => p.id === plant.plot_id ? plot : p)
        this.showPlantForm = false
      },

      getPlantDisabledTooltip(plot, plant) {
        if (plant.is_incomplete) {
          return 'Plant information is incomplete'
        }

        if (plot.is_quarantined) {
          return 'Plot must be imported first'
        }

        return ''
      },
    }
  }
</script>

<style scoped>

</style>