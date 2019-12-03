<template>
    <div>
        <div v-if="site">
            <h1 class="page-title mb-0">
                {{ site.name }}
            </h1>
            <p class="mb-3 text-muted">{{ site.county.name }}, {{ site.state.name }}</p>
        </div>

        <div class="row">
            <div class="col-lg-3 col-md-4">
                <div class="card mb-3">
                    <div class="card-header d-flex align-items-center">
                        <div>
                            <strong>Plots</strong>
                        </div>
                        <div class="ml-auto">
                            <button class="btn btn-sm btn-primary" @click.prevent="showPlotForm = true">
                                <icon name="add"/>
                                <span>Plot</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <inline-spinner class="text-primary" v-if="loading"/>
                        <div class="text-muted" v-if="!loading && plots.length === 0">
                            No plots found. Use the button above to create a new one.
                        </div>
                        <div class="nav nav-pills flex-column" v-if="plots.length > 0">
                            <a href="#"
                               v-for="plot in plots"
                               :class="['nav-link', 'align-items-center', 'pr-0', {'active': selectedPlot && selectedPlot.id === plot.id}]"
                               @click.prevent="selectedPlot = plot">
                                <span>Plot #{{ plot.number }}</span>
                                <icon name="ios-arrow-forward" class="right-arrow ml-auto"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-8">
                <div class="card" v-if="selectedPlot">
                    <div class="card-header d-flex align-items-center">
                        <div>
                            <strong>Plot #{{ selectedPlot.number }}</strong>
                        </div>
                        <div class="ml-auto d-flex">
                            <div class="dropdown mr-1">
                                <button class="btn btn-link btn-sm" data-toggle="dropdown">
                                    Actions
                                    <icon name="ios-arrow-down" class="ml-1"/>
                                </button>
                                <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">Plot</a>
                                </div>
                            </div>
                            <button class="btn btn-sm btn-primary">
                                <icon name="add"/>
                                <span>Plant</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        {{ selectedPlot }}
                    </div>
                </div>
                <div class="card" v-else>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center text-muted">
                        <div v-if="!loading && plots.length === 0">
                            <p>Get started by creating a new plot using the button below.</p>
                        </div>
                        <div v-else>
                            <p class="mb-0">Select a plot from the left sidebar or use the button below to create a new one.</p>
                        </div>
                        <button class="btn btn-outline-primary" @click.prevent="showPlotForm = true">
                            <icon name="add"/>
                            <span>New Plot</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <plot-form
            @close="showPlotForm = false"
            v-if="site && showPlotForm"
            :site="site"
            @create="plotCreated($event)"
        />
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import Icon from '../components/Icon'
  import PlotForm from '../forms/PlotForm'

  export default {
    name: 'Plots',

    components: {PlotForm, Icon, InlineSpinner},

    data() {
      return {
        showPlotForm: false,
        plots       : [],
        page        : 1,
        lastPage    : 1,
        total       : 0,
        loading     : false,
        search      : '',
        request     : null,
        site        : null,
        selectedPlot: null,
      }
    },

    mounted() {
      this.loading = true
      this.loadPlots()
      this.loadSite()
    },

    watch: {
      search() {
        this.loadPlots()
      },

      page() {
        this.loading = true
        this.loadPlots()
      },

      selectedPlot() {
        const id = this.$route.params.id
        this.$router.replace({
          path : `/app/sites/${id}`,
          query: {
            plot: this.selectedPlot.id,
          },
        }).catch(e => {
        })
      },
    },

    methods: {
      async loadSite() {
        const id = this.$route.params.id
        try {
          const {data} = await axios.get(`/web/sites/${id}`)
          this.site    = data
        } catch (e) {

        }
      },

      async loadPlots() {
        if (this.request !== null) {
          this.request()
        }
        try {
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/sites/${id}/plots`, {
            params     : {
              page  : this.page,
              search: this.search,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })
          this.plots   = data
          this.loading = false
          this.request = null

          if (this.selectedPlot === null && this.plots.length > 0) {
            this.setFromHistory()
          }
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            this.request = null
          }
        }
      },

      plotCreated() {
        this.showPlotForm = false
        this.loadPlots()
      },

      setFromHistory() {
        let plot_id = this.$route.query.plot
        if (plot_id) {
          plot_id     = parseInt(plot_id)
          const plots = this.plots.filter(p => p.id === plot_id)
          if (plots.length > 0) {
            this.selectedPlot = plots[0]
            return
          }
        }

        this.selectedPlot = this.plots[0]
      },
    },
  }
</script>

<style scoped>

</style>
