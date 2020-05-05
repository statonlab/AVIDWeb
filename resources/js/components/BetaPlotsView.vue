<template>
    <div>
        <div class="row">
            <div class="col-md-4 col-lg-3">
                <div class="card mb-3">
                    <div class="card-header d-flex border-bottom">
                        <div class="flex-grow-1">
                            <strong>Plots</strong>
                        </div>
                        <div class="flex-shrink-0">
                            <button class="btn btn-primary" @click.prevent="showPlotForm = true">
                                <icon name="add"/>
                                <span>Plot</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <dropdown
                                autocomplete
                                @search="search = $event"
                                v-model="plotId"
                                :options="plotOptions"/>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-lg-9">
                <div class="card mb-3">
                    <tabs>
                        <tab name="Plants" selected>
                            <beta-plants-view
                                    v-if="plot"
                                    :plot="plot"/>
                        </tab>
                        <tab name="Plot Info">
                            <div class="card-header border-bottom d-flex">
                                <div class="flex-grow-1">
                                    <strong>Plot Information</strong>
                                </div>
                                <div class="flex-shrink-0">
                                    <button class="btn btn-link" @click.prevent="edit">
                                        <icon name="create"/>
                                        <span>Edit Plot</span>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <dl v-if="plot" class="mb-0">
                                    <dt>Basal Area</dt>
                                    <dd v-if="plot.basal_area !== null">{{ plot.basal_area }}</dd>
                                    <dd v-else>Not Provided</dd>

                                    <dt>Enclosed or Protected</dt>
                                    <dd v-if="plot.is_protected">Yes</dd>
                                    <dd v-else>No</dd>

                                    <dt>Protection Period</dt>
                                    <dd v-if="plot.protection_seasons !== null">{{ plot.protection_seasons }}</dd>
                                    <dd v-else>Not Provided</dd>

                                    <dt>Ground and Shrub Cover</dt>
                                    <dd v-if="plot.ground_cover !== null">{{plot.ground_cover}}</dd>
                                    <dd v-else>Not Provided</dd>

                                    <dt>Canopy</dt>
                                    <dd v-if="plot.canopy !== null">{{plot.canopy}}</dd>
                                    <dd v-else>Not Provided</dd>

                                    <dt>Subcanopy</dt>
                                    <dd v-if="plot.subcanopy !== null">{{plot.subcanopy}}</dd>
                                    <dd v-else>Not Provided</dd>

                                    <dt>Recorders</dt>
                                    <dd v-if="plot.recorders !== null">{{plot.recorders}}</dd>
                                    <dd v-else>Not Provided</dd>
                                </dl>
                            </div>
                        </tab>
                        <tab name="Site Info">
                            <div class="card-header border-bottom d-flex">
                                <div class="flex-grow-1">
                                    <strong>Site Information</strong>
                                </div>
                                <div class="flex-shrink-0">
                                    <button class="btn btn-link" @click.prevent="$emit('edit-site-request')">
                                        <icon name="create"/>
                                        <span>Edit Site</span>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body">
                                <dl class="mb-0">
                                    <dt>Owner</dt>
                                    <dd class="text-muted">{{ optional(site.owner, 'Owner name') }}</dd>

                                    <dt>Contact Info</dt>
                                    <dd class="text-muted">
                                        {{ optional(site.owner_contact, 'Owner contact info') }}
                                    </dd>

                                    <dt>Overstory Species</dt>
                                    <dd class="text-muted" v-if="site.species.length !== 0">
                                        {{ site.species.map(v => v.name).join(', ') }}
                                    </dd>
                                    <dd class="text-muted" v-else>Not provided</dd>

                                    <dt>Seedling or Shrub Species</dt>
                                    <dd class="text-muted" v-if="site.shrubs.length !== 0">
                                        {{ site.shrubs.map(v => v.name).join(', ') }}
                                    </dd>
                                    <dd class="text-muted" v-else>Not provided</dd>

                                    <dt>Basal Area</dt>
                                    <dd class="text-muted">
                                        {{optional(site.basal_area)}}
                                        <span v-show="site.basal_area">ft<sup>2</sup>/ac</span>
                                    </dd>

                                    <dt>Average Overstory Tree Diameter</dt>
                                    <dd class="text-muted">{{optional(site.diameter)}} <span v-show="site.diameter">in</span>
                                    </dd>
                                </dl>
                            </div>
                        </tab>
                    </tabs>
                </div>
            </div>
        </div>

        <plot-form
                :site="site"
                :plot="editing"
                v-if="showPlotForm"
                @create="created($event)"
                @update="updated($event)"
                @close="closeForm"/>
    </div>
</template>

<script>
  import Icon from './Icon'
  import Tabs from './Tabs'
  import Tab from './Tab'
  import BetaPlantsView from './BetaPlantsView'
  import Dropdown from './Dropdown'
  import PlotForm from '../forms/PlotForm'

  export default {
    name: 'BetaPlotsView',

    components: {PlotForm, Dropdown, BetaPlantsView, Tab, Tabs, Icon},

    props: {
      site: {required: true},
    },

    data() {
      return {
        loading     : false,
        plots       : [],
        plot        : null,
        plotId      : null,
        page        : 1,
        lastPage    : 1,
        search      : '',
        orderBy     : 'number',
        orderDir    : 'asc',
        request     : null,
        plotOptions : [],
        showPlotForm: false,
        editing     : null,
      }
    },

    watch: {
      'site.id': {
        handler() {
          this.loadPlots()
        },
      },

      plotId(id) {
        const plots = this.plots.filter(p => p.id === id)
        if (plots.length > 0) {
          this.plot = plots[0]
        }
      },

      search() {
        this.loadPlots()
      },
    },

    mounted() {
      this.loadPlots()
    },

    methods: {
      async loadPlots() {
        if (this.request !== null) {
          this.request()
        }

        try {
          const {data} = await axios.get(`/web/sites/${this.site.id}/plots`, {
            params     : {
              page     : this.page,
              search   : this.search,
              order_by : this.orderBy,
              order_dir: this.orderDir,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })

          this.plots    = data.data
          this.lastPage = data.last_page
          this.loading  = false
          this.request  = null

          if ((this.plotId === null || this.plot === null) && this.plots.length > 0) {
            this.plotId = this.plots[0].id
            this.plot   = this.plots[0]
          }

          this.setOptions()
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            this.request = null
          }
        }
      },

      created(plot) {
        this.plots.push(plot)
        this.plot   = plot
        this.plotId = plot.id
        this.setOptions()
        this.closeForm()
      },

      updated(plot) {
        this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
        this.setOptions()
        this.closeForm()
      },

      setOptions() {
        this.plotOptions = this.plots.map(p => {
          return {
            value: p.id,
            label: `Plot #${p.number}`,
          }
        })
      },

      closeForm() {
        this.showPlotForm = false
        this.editing      = null
      },

      edit() {
        this.editing      = this.plot
        this.showPlotForm = true
      },

      optional(value, field) {
        if (value) {
          if (Array.isArray(value) && value.length !== 0) {
            return value.map(v => v.name).join(', ')
          }
          return value
        }

        if (typeof field !== 'undefined') {
          return `${field} is not provided`
        }

        return 'Not provided'
      },
    },
  }
</script>

<style scoped>

</style>
