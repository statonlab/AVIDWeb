<template>
  <div>
    <div class="mb-3">
      <span class="page-title">Incomplete Data</span>
      <div class="text-muted">
        Entries from spreadsheet importing that require additional information will show up here. Your data is saved but is incomplete and needs your review. It will not be lost if you navigate away from this page. Once the required information is entered, click the Save button.
      </div>
    </div>

    <div v-if="site">
      <div v-if="!loadingSite">
        <div v-if="quarantinedPlots.length !== 0">
          <div class="row">
            <div class="col-lg-6" v-for="plot in quarantinedPlots">
              <plot-form-card v-if="mapsReady"
                              :key="plot.id"
                              :plot="plot"
                              @deleted="plotDeleted(plot)"
                              @imported="plotImported(plot)"/>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="card mb-3 position-static" v-if="!loadingSite">
            <div class="p-3 d-flex align-items-center justify-content-center" v-if="loadingPlots">
              <inline-spinner class="text-primary"/>
            </div>
            <div class="p-3 text-muted" v-if="!loadingPlots && plots.length === 0">
              <span>
                No quarantined data found. Click
                <router-link :to="`/app/sites/${site.id}`">here</router-link>
                to return to the site.
              </span>
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
                <template v-for="(plant, plant_index) in plot.plants">
                  <inline-plant-form :key="plant.id"
                                     :plot="plot"
                                     :plant="plant"
                                     :species="species"
                                     :plants="plants"
                                     :showPlotNumber="plant_index === 0"
                                     :total="total"
                                     @create="plantImported(plant)"
                                     @delete="plantDeleted(plant)"
                                     @search="speciesSearch = $event"
                                     @plantTypeChanged="type = $event"/>
                </template>
              </template>
            </div>
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
import Maps from '../helpers/Maps'

export default {
  name: 'SiteQuarantine',

  components: {
    Dropdown,
    Icon,
    InlineSpinner,
    InlinePlantForm,
    PlotEntryButton,
    PlotFormCard,
  },

  mounted() {
    this.loadSite()
    this.loadTypes()

    Maps.load(() => this.mapsReady = true)
  },

  watch: {
    site() {
      this.loadPlots()
    },

    speciesSearch() {
      this.loadSpecies()
    },

    type() {
      this.loadSpecies()
    }
  },

  data() {
    return {
      site              : null,
      plot              : null,
      plots             : [],
      quarantinedPlots  : [],
      species           : [],
      plants            : [],
      importing         : null,
      deleting          : null,
      loadingSite       : false,
      loadingPlots      : false,
      loadingSpecies    : false,
      loadingPlants     : false,
      speciesSearch     : '',
      total             : 0,
      mapsReady         : false,
      type              : null,
    }
  },

  methods: {
    async loadSite() {
      this.loadingSite = true
      try {
        const {id}   = this.$route.params
        const {data} = await axios.get(`/web/sites/${id}`)
        this.site    = data
      } catch (e) {
        console.error(e)
        this.$alert('Unable to load site information. Please try refreshing the page.')
      }
      this.loadingSite = false
    },

    async loadPlots() {
      this.loadingPlots = true

      try {
        const {id}   = this.$route.params
        const {data} = await axios.get(`/web/data-quarantine/sites/${id}`)
        this.plots   = data
        this.quarantinedPlots = data.filter(p => p.is_quarantined)
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
            plant_type_id : this.type,
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
      this.quarantinedPlots = this.quarantinedPlots.filter(p => p.id !== plot.id)
    },

    plotImported(plot) {
      this.quarantinedPlots = this.quarantinedPlots.filter(p => p.id !== plot.id)
    },

    plantImported(plant) {
      let plot = this.plots.filter(p => p.id === plant.plot_id)[0]
      plot.plants = plot.plants.filter(p => p.id !== plant.id)

      if (plot.plants.length === 0) {
        this.plots = this.plots.filter(p => p.id !== plot.id)
      } else {
        this.plots = this.plots.map(p => p.id === plant.plot_id ? plot : p)
      }
    },

    plantDeleted(plant) {
      let plot = this.plots.filter(p => p.id === plant.plot_id)[0]
      plot.plants = plot.plants.filter(p => p.id !== plant.id)

      if (plot.plants.length === 0) {
        this.plots = this.plots.filter(p => p.id !== plot.id)
      } else {
        this.plots = this.plots.map(p => p.id === plant.plot_id ? plot : p)
      }
    }
  }
}
</script>

<style scoped>

</style>