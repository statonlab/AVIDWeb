<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="page-title">Filters</h1>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="d-flex">
                                    <label for="sites" class="flex-grow-1">
                                        <span>Sites</span>
                                    </label>
                                    <div class="form-check flex-shrink-0">
                                        <input class="form-check-input"
                                               type="checkbox"
                                               value="1"
                                               :checked="allSites"
                                               @change="allSites = $event.target.checked"
                                               id="show-all-sites">
                                        <label class="form-check-label font-weight-normal" for="show-all-sites">
                                            Show All
                                        </label>
                                    </div>
                                </div>
                                <tokens-field id="sites"
                                              :options="siteOptions"
                                              :disabled="allSites"
                                              v-model="sites"/>

                            </div>
                            <div class="form-group">
                                <label for="plots">
                                    Plots
                                </label>
                                <tokens-field id="plots"
                                              :options="plotOptions"
                                              :disabled="allPlots"
                                              v-model="plots"/>
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           value="1"
                                           :checked="allPlots"
                                           @change="allPlots = $event.target.checked"
                                           id="show-all-plots">
                                    <label class="form-check-label font-weight-normal" for="show-all-plots">
                                        Show all plots
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="quadrants">
                                    Quadrants
                                </label>
                                <tokens-field id="quadrants"
                                              :options="quadrantOptions"
                                              :disabled="allQuadrants"
                                              v-model="quadrants"/>
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           value="1"
                                           :checked="allQuadrants"
                                           @change="allQuadrants = $event.target.checked"
                                           id="show-all-quadrants">
                                    <label class="form-check-label font-weight-normal" for="show-all-plots">
                                        Show all quadrants
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="types">
                                    Plant Types
                                </label>
                                <tokens-field id="types"
                                              :options="typeOptions"
                                              :disabled="allTypes"
                                              v-model="types"/>
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           value="1"
                                           :checked="allTypes"
                                           @change="allTypes = $event.target.checked"
                                           id="show-all-types">
                                    <label class="form-check-label font-weight-normal" for="show-all-plots">
                                        Show all types
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="species">
                                    Species
                                </label>
                                <tokens-field id="species"
                                              :options="speciesOptions"
                                              :disabled="allSpecies"
                                              v-model="species"/>
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           value="1"
                                           :checked="allSpecies"
                                           @change="allSpecies = $event.target.checked"
                                           id="show-all-species">
                                    <label class="form-check-label font-weight-normal" for="show-all-plots">
                                        Show all species
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h1 class="page-title">Annual Heights</h1>
                        </div>
                        <div class="mr-4 card-body" v-if="chart">
                            <apex-chart type="bar"
                                        :options="chart.options"
                                        :series="chart.series"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import TokensField from '../components/TokensField'
  import ApexChart from 'vue-apexcharts'

  export default {
    name: 'Statistics',

    components: {ApexChart, TokensField},

    mounted() {
      this.setChartDefault()

      this.loadSites()
      this.loadPlots()
      this.loadTypes()
      this.loadSpecies()

      this.loadChart()
    },

    computed: {
      quadrantOptions() {
        return [
          'Northeast', 'Northwest', 'Southeast', 'Southwest',
        ]
      },
    },

    watch: {
      sites() {
        this.loadChart()
        this.loadPlots()
      },

      allSites() {
        this.loadChart()
      },

      plots() {
        this.loadChart()
      },

      allPlots() {
        this.loadChart()
      },

      quadrants() {
        this.loadChart()
      },

      allQuadrants() {
        this.loadChart()
      },

      types() {
        this.loadChart()
        this.loadSpecies()
      },

      allTypes() {
        this.loadChart()
      },

      species() {
        this.loadChart()
      },

      allSpecies() {
        this.loadChart()
      },
    },

    data() {
      return {
        chart         : null,
        allSites      : true,
        allPlots      : true,
        allQuadrants  : true,
        allTypes      : true,
        allSpecies    : true,
        siteOptions   : [],
        plotOptions   : [],
        typeOptions   : [],
        speciesOptions: [],
        sites         : [],
        plots         : [],
        quadrants     : [],
        types         : [],
        species       : [],
        _request      : null,
      }
    },

    methods: {
      async loadTypes() {
        try {
          const {data}     = await axios.get('/web/plant-types')
          this.typeOptions = data.map(({id, name}) => ({id, text: name}))
        } catch (e) {
          this.$alert('Unable to load plants. Please try refreshing the page.')
        }
      },

      async loadSpecies() {
        this.species = []
        try {
          const {data}        = await axios.get('/web/statistics/species', {
            params: {
              types: this.types,
            },
          })
          this.speciesOptions = data.map(({id, name}) => ({id, text: name}))
        } catch (e) {
          this.$alert('Unable to load species. Please try refreshing the page.')
        }
      },

      async loadSites() {
        try {
          const {data}     = await axios.get(`/web/statistics/sites`)
          this.siteOptions = data.map(({id, name}) => ({id, text: name}))
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }
      },

      async loadPlots() {
        this.plots = []
        try {
          const {data} = await axios.get('/web/statistics/plots', {
            params: {
              sites: this.allSites ? null : this.sites,
            },
          })
          console.log(data)
          this.plotOptions = data.map(({id, name}) => ({id, text: name}))
        } catch (e) {
          this.$alert('Unable to load plots. Please try refreshing the page or contact us.')
          console.error(e)
        }
      },

      async loadChart() {
        if (this._request) {
          this._request()
        }

        try {
          const {data} = await axios.get(`/web/statistics/chart`, {
            params: {
              sites    : this.allSites ? null : this.sites,
              plots    : this.allPlots ? null : this.plots,
              types    : this.allTypes ? null : this.types,
              quadrants: this.allQuadrants ? null : this.quadrants,
              species  : this.allSpecies ? null : this.species,
            },
          })

          data.length !== 0 ? this.setChart(data) : this.setChartDefault()
        } catch (e) {
          if (!axios.isCancel()) {
            this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
            console.error(e)
          }
        }
      },

      setChartDefault() {
        this.chart = {
          options: {
            chart : {
              id     : 'sites-chart',
              toolbar: {show: false},
            },
            xaxis : {
              labels: {show: false},
            },
            yaxis : {
              title: {
                text : 'Annual Height (inches)',
                style: {
                  fontSize: 14,
                },
              },
            },
            // title : {text: 'Annual Height'},
            noData: {text: 'No measurements found.'},
          },
          series : [
            {name: 'protected', data: []},
            {name: 'unprotected', data: []},
          ],
        }
      },

      setChart(data) {
        this.chart = {
          options: {
            chart     : {
              id     : 'sites-chart',
              toolbar: {show: false},
            },
            xaxis     : {
              labels    : {show: true},
              categories: data.xaxis,
            },
            yaxis     : {
              title: {
                text : 'Annual Height (inches)',
                style: {
                  fontSize: 14,
                },
              },
            },
            dataLabels: {
              formatter: (val, {seriesIndex, dataPointIndex}) => {
                return val + ` (N=${data.data[seriesIndex].count[dataPointIndex]})`
              },
            },
            // title : {text: 'Annual Height'},
            noData    : {text: 'No measurements found.'},
          },
          series : [
            {name: 'protected', data: data.data[0].protected},
            {name: 'unprotected', data: data.data[1].unprotected},
          ],
        }
      },
    },
  }
</script>

<style scoped>

</style>
