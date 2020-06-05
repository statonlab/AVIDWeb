<template>
    <div class="card">
        <div class="card-header d-flex">
            <div class="flex-grow-1">
                <strong>Annual Height Chart</strong>
            </div>
            <div class="flex-shrink-0 d-flex">
                <dropdown class="bg-white"
                          :options="sites.map(s => ({label: s.name, value: s.id}))"
                          v-model="site">
                </dropdown>
                <dropdown class="bg-white ml-2"
                          :options="plantOptions"
                          v-model="type">
                </dropdown>
                <dropdown class="bg-white ml-2"
                          :options="speciesOptions"
                          :disabled="type === ''"
                          v-model="species">
                </dropdown>
            </div>
        </div>
        <div class="card-body p-2">
            <div class="mr-4" v-if="chart">
                <apex-chart type="bar"
                            :options="chart.options"
                            :series="chart.series"/>
            </div>
        </div>
    </div>
</template>

<script>
  import Dropdown from '../components/Dropdown'
  import ApexChart from 'vue-apexcharts'

  export default {
    name: 'StatisticsCard',

    components: {ApexChart, Dropdown},

    mounted() {
      this.setChartDefault()

      this.loadSites()
      this.loadTypes()

      this.speciesOptionsClear()
    },

    data() {
      return {
        site            : '',
        chart           : null,
        sites           : [],
        type            : '',
        species         : '',
        plants          : [],
        loadingSites    : false,
        _request        : null,
        speciesOptions  : [],
      }
    },

    watch: {
      site() {
        this.loadChart()
      },

      type() {
        this.speciesOptionsClear()
        this.loadChart()
        this.loadSpecies()
      },

      species() {
        this.loadChart()
      },
    },

    computed: {
      plantOptions: function () {
        return [{label: 'All Plants', value: ''}].concat(this.plants.map(p => ({label: p.name, value: p.id})))
      },
    },

    methods: {
      async loadTypes() {
        try {
          const {data} = await axios.get('/web/plant-types')
          this.plants  = data
        } catch (e) {
          this.$alert('Unable to load plants. Please try refreshing the page.')
        }
      },

      async loadSpecies() {
        try {
          const {data} = await axios.get('/web/species', {
            params: {
              plant_type_id: this.type,
            },
          })
          this.setSpeciesOptions(data.data)
        } catch (e) {
          this.$alert('Unable to load species. Please try refreshing the page.')
        }
      },

      async loadSites() {
        this.loadingSites = true

        try {
          const {data} = await axios.get(`/web/statistics/sites`)
          this.sites   = data
          if (this.site === '' && data.length > 0) {
            this.site = this.sites[0].id
          }
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loadingSites = false
        this.loadChart()
      },

      async loadChart() {
        if (this._request) {
          this._request()
        }

        try {
          if (this.site) {
            const {data} = await axios.get(`/web/statistics/${this.site}/chart`, {
              params: {
                species_id   : this.species,
                plant_type_id: this.type,
              },
            })

            data.length !== 0 ? this.setChart(data) : this.setChartDefault()
          }
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
            yaxis: {
              title: {
                text: 'Annual Height (inches)',
                style: {
                  fontSize: 14,
                }
              }
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
            chart : {
              id     : 'sites-chart',
              toolbar: {show: false},
            },
            xaxis : {
              labels: {show: true},
              categories: data.xaxis,
            },
            yaxis: {
              title: {
                text: 'Annual Height (inches)',
                style: {
                  fontSize: 14,
                }
              }
            },
            dataLabels: {
              formatter: (val, {seriesIndex, dataPointIndex}) => {
                return val + ` (N=${data.data[seriesIndex].count[dataPointIndex]})`
              }
            },
            // title : {text: 'Annual Height'},
            noData: {text: 'No measurements found.'},
          },
          series : [
            {name: 'protected', data: data.data[0].protected},
            {name: 'unprotected', data: data.data[1].unprotected},
          ],
        }
      },

      speciesOptionsClear() {
        this.species = ''
        this.speciesOptions = [{label: 'All Species', value: ''}]
      },

      setSpeciesOptions(data) {
        this.speciesOptionsClear()
        this.speciesOptions = [{label: 'All Species', value: ''}].concat(data.map(s => ({label: s.name, value: s.id})))
      }

    },
  }
</script>
