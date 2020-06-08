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
                                <label for="sites">
                                    Sites
                                </label>
                                <tokens-field id="sites"
                                              :options="siteOptions"
                                              :disabled="allSites"
                                              v-model="sites"/>
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           value="1"
                                           :checked="allSites"
                                           @change="allSites = $event.target.checked"
                                           id="show-all-sites">
                                    <label class="form-check-label font-weight-normal" for="show-all-sites">
                                        Show all sites
                                    </label>
                                </div>
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
    },

    computed: {
      quadrantOptions() {
        return [
          'Northeast', 'Northwest', 'Southeast', 'Southwest'
        ]
      }
    },

    data() {
      return {
        chart           : null,
        allSites        : true,
        allPlots        : true,
        allQuadrants    : true,
        siteOptions     : [],
        plotOptions     : [],
        sites           : [],
        plots           : [],
        quadrants       : [],
      }
    },

    methods: {
      async loadSites() {
        try {
          const {data} = await axios.get(`/web/statistics/sites`)
          this.siteOptions   = data.map(({id, name}) => ({id, text: name}))
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
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
            // title : {text: 'Annual Height'},
            noData: {text: 'No measurements found.'},
          },
          series : [
            {name: 'protected', data: []},
            {name: 'unprotected', data: []},
          ],
        }
      },
    }
  }
</script>

<style scoped>

</style>
