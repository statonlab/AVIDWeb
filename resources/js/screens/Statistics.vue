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
                                <label>
                                    Data Type
                                </label>
                                <select name="data-type"
                                        id="data-type"
                                        v-model="dataType"
                                        class="form-control">
                                    <option value="owned">My Sites Only</option>
                                    <option v-if="User.can('view sites')" value="admin">All Sites</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>
                                    Group
                                </label>
                                <div class="d-flex">
                                    <dropdown
                                            class="flex-grow-1"
                                            autocomplete
                                            v-model="group"
                                            :options="groups"
                                            placeholder="Select a group"
                                            @search="groupSearch = $event"
                                            ref="group"
                                    />
                                    <a v-if="group !== null"
                                       href="#"
                                       class="btn btn-link p-1 ml-2"
                                       @click.prevent="$refs.group.clear()">
                                        Clear
                                    </a>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>
                                    Sites
                                </label>
                                <tokens-field id="sites"
                                              :options="siteOptions"
                                              :placeholder="'Showing all sites'"
                                              v-model="sites"/>
                            </div>

                            <div class="form-group">
                                <label>
                                    Plots
                                </label>
                                <tokens-field id="plots"
                                              :options="plotOptions"
                                              :placeholder="'Showing all plots'"
                                              v-model="plots"/>
                            </div>

                            <div class="form-group">
                                <label>
                                    Protection
                                </label>
                                <select name="protection"
                                        id="protection"
                                        v-model="protection"
                                        class="form-control">
                                    <option value="">Protected and unprotected</option>
                                    <option value="unprotected">Unprotected only</option>
                                    <option value="protected">Protected only</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>
                                    Plant Types
                                </label>
                                <tokens-field id="types"
                                              :options="typeOptions"
                                              :placeholder="'Showing all types'"
                                              v-model="types"/>
                            </div>

                            <div class="form-group">
                                <label>
                                    Species
                                </label>
                                <tokens-field id="species"
                                              :options="speciesOptions"
                                              :placeholder="'Showing all species'"
                                              v-model="species"/>
                            </div>

                            <div class="form-group">
                                <label>
                                    State
                                </label>
                                <div class="d-flex">
                                    <dropdown
                                            class="flex-grow-1"
                                            autocomplete
                                            v-model="state"
                                            @input="selectState($event)"
                                            :options="stateOptions"
                                            placeholder="Select a state"
                                            @search="stateSearch = $event"
                                            ref="state"
                                    />
                                    <a v-if="state !== null"
                                       href="#"
                                       class="btn btn-link p-1 ml-2"
                                       @click.prevent="clearState()">
                                        Clear
                                    </a>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>
                                    County
                                </label>
                                <div class="d-flex">
                                    <dropdown
                                            class="flex-grow-1"
                                            autocomplete
                                            @search="countySearch = $event"
                                            :placeholder="state === null ? 'Select a state first' : 'Select a County'"
                                            v-model="county"
                                            :options="countyOptions"
                                            :disabled="state === null"
                                            ref="county"
                                    />
                                    <a v-if="county !== null"
                                       href="#"
                                       class="btn btn-link p-1 ml-2"
                                       @click.prevent="$refs.county.clear()">
                                        Clear
                                    </a>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>
                                    Wildlife Management Unit
                                </label>
                                <select name="wmu"
                                        id="wmu"
                                        v-model="wmu"
                                        class="form-control">
                                    <option value="">Show all units</option>
                                    <option v-for="wmu in options.wmus" :value="wmu">{{wmu}}</option>
                                </select>
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
                            <apex-chart ref="chart"
                                        type="bar"
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
  import Dropdown from '../components/Dropdown'
  import Icon from '../components/Icon'
  import User from '../helpers/User'
  import ApexChart from 'vue-apexcharts'
  import Options from '../helpers/Options'

  export default {
    name: 'Statistics',

    components: {ApexChart, TokensField, Dropdown, Icon},

    mounted() {
      this.setChartDefault()

      this.loadSites()
      this.loadPlots()
      this.loadTypes()
      this.loadSpecies()
      this.loadStates()
      this.loadChart()
      this.loadGroups()
    },

    watch: {
      sites() {
        this.loadChart()
        this.loadPlots()
      },

      plots() {
        this.loadChart()
      },

      types() {
        this.loadChart()
        this.loadSpecies()
      },

      species() {
        this.loadChart()
      },

      state() {
        this.loadChart()
      },

      stateSearch() {
        this.loadStates()
      },

      county() {
        this.loadChart()
      },

      countySearch() {
        this.loadCounties()
      },

      protection() {
        this.setProtection()
      },

      dataType() {
        this.loadChart()
      },

      group() {
        this.loadChart()
      },

      groupSearch() {
        this.loadGroups()
      },

      wmu() {
        this.loadChart()
      }
    },

    data() {
      return {
        User,
        chart         : null,
        siteOptions   : [],
        plotOptions   : [],
        typeOptions   : [],
        speciesOptions: [],
        stateOptions  : [],
        countyOptions : [],
        groups        : [],
        sites         : [],
        plots         : [],
        types         : [],
        species       : [],
        stateSearch   : '',
        countySearch  : '',
        groupSearch   : '',
        protection    : '',
        dataType      : 'owned',
        wmu           : '',
        state         : null,
        county        : null,
        group         : null,
        _request      : null,
        options       : Options,
      }
    },

    methods: {
      async loadGroups() {
        try {
          const {data}     = await axios.get(`/web/groups`, {
            params: {
              search: this.groupSearch,
            }
          })
          this.groups = data.data.map(g => {
            return {
              label: g.name,
              value: g.id,
            }
          })
        } catch (e) {
          this.$alert('Unable to load groups. Please try refreshing the page or contact us.')
          console.error(e)
        }
      },

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

      async loadStates() {
        try {
          const {data}     = await axios.get(`/web/states`, {
            params     : {
              search: this.stateSearch,
            },
          })
          this.stateOptions = data.data.map(s => {
            return {
              label : `${s.name} (${s.code})`,
              value : s.id,
              search: s.name,
            }
          })
          if (this.state) {
            this.loadCounties()
          }
        } catch (e) {
          this.$alert('Unable to load states. Please try refreshing the page or contact us.')
          console.error(e)
        }
      },

      async loadCounties() {
        try {
          const {data} = await axios.get('/web/counties', {
            params     : {
              state_id  : this.state,
              search    : this.countySearch,
            },
          })

          this.countyOptions = data.data.map(c => {
            return {
              label: c.name,
              value: c.id,
            }
          })
        } catch (e) {
          this.$alert('Unable to load counties. Please try refreshing the page or contact us.')
          console.error(e)
        }
      },

      async loadPlots() {
        this.plots = []
        try {
          const {data} = await axios.get('/web/statistics/plots', {
            params: {
              sites: this.sites,
            },
          })
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
              sites     : this.sites,
              plots     : this.plots,
              types     : this.types,
              species   : this.species,
              state     : this.state,
              county    : this.county,
              data_type : this.dataType,
              group     : this.group,
              wmu       : this.wmu,
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
        let series = []

        if (data.data[0].unprotected === undefined) {
          series.push({name: 'protected', data: data.data[0].protected})
        } else {
          series.push({name: 'unprotected', data: data.data[0].unprotected})
        }

        if (data.data.length === 2) {
          series.push({name: 'unprotected', data: data.data[1].unprotected})
        }

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
            colors    : ['#2E93FA', '#2EB07A'],
            dataLabels: {
              formatter: (val, {seriesIndex, dataPointIndex}) => {
                return val + ` (N=${data.data[seriesIndex].count[dataPointIndex]})`
              },
            },
            // title : {text: 'Annual Height'},
            noData    : {text: 'No measurements found.'},
          },
          series : series,
        }
      },

      selectState() {
        if (this.state) {
          this.loadCounties()
        }
        this.$refs.county.clear()
      },

      clearState() {
        this.$refs.county.clear()
        this.$refs.state.clear()
      },

      setProtection() {
        switch (this.protection)
        {
          case 'unprotected':
            this.$refs.chart.showSeries('unprotected')
            this.$refs.chart.hideSeries('protected')
            break
          case 'protected':
            this.$refs.chart.showSeries('protected')
            this.$refs.chart.hideSeries('unprotected')
            break
          default:
            this.$refs.chart.showSeries('protected')
            this.$refs.chart.showSeries('unprotected')
        }
      }
    },
  }
</script>

<style scoped>

</style>
