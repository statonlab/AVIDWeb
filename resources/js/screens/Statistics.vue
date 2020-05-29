<template>
    <div>
        <div class="d-flex mb-3">
            <dropdown class="bg-white"
                      :options="sites.map(s => ({label: s.name, value: s.id}))"
                      v-model="site">
            </dropdown>
        </div>
        <div class="mr-4" v-if="chart">
            <apex-chart type="bar"
                        width="500"
                        :options="chart.options"
                        :series="chart.series"/>
        </div>
    </div>
</template>

<script>
  import Dropdown from '../components/Dropdown'
  import ApexChart from 'vue-apexcharts'

  export default {
    name: 'Statistics',

    components: {ApexChart, Dropdown},

    mounted() {
      this.loadSites()
    },

    data() {
      return {
        site        : null,
        chart       : null,
        sites       : [],
        loadingSites: false,
      }
    },

    watch: {
      site() {

      }
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
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loadingSites = false
        this.setChart()
      },

      setChart() {
        this.chart = {
          options: {
            chart: {
              id: 'vuechart-example',
              toolbar: {
                show: false,
              }
            },
            xaxis: {
              categories: [1, 2, 3, 4, 5],
            },
            title: {
              text: `Annual Height at aaa`,
            }
          },
          series: [{
            name: 'series-1',
            data: [10, 20, 30, 40, 50]
          }],
        }
      }
    },
  }
</script>