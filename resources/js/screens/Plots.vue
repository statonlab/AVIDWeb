<template>
    <div>
        <div v-if="site" class="mb-3 d-flex">
            <div>
                <h1 class="page-title mb-0">
                    {{ site.name }}
                </h1>
                <p class="mb-0 text-muted">
                    {{ site.city ? `${site.city}, ` : ''}}{{ site.county.name }}, {{ site.state.name }}
                </p>
            </div>
            <div class="ml-auto">
                <button class="btn btn-link">
                    <icon name="create"/>
                    <span>
                        Edit Site
                    </span>
                </button>
            </div>
        </div>

        <div class="card mb-3" v-if="site">
            <div class="card-header d-flex">
                <a href="#"
                   class="text-dark"
                   data-toggle="collapse"
                   data-target="#site-info-card"
                   v-tooltip="'Expand or Collapse'">
                    <strong>Site Information</strong>
                </a>
                <div class="ml-auto">
                    <button class="btn btn-sm btn-link"
                            data-toggle="collapse"
                            data-target="#site-info-card"
                            aria-expanded="true">
                        <icon name="ios-arrow-down"/>
                    </button>
                </div>
            </div>
            <div class="card-body collapse show px-2 pb-2 pt-0" id="site-info-card">
                <table class="table mb-0">
                    <tbody>
                    <tr>
                        <th class="small-cell no-wrap">Owner</th>
                        <td>
                            {{ optional(site.owner, 'Owner name') }}
                            <div class="text-muted">
                                {{ optional(site.owner_address, 'Owner address') }}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="small-cell no-wrap">Basal Area</th>
                        <td>{{optional(site.basal_area)}} <span v-show="site.basal_area">ft<sup>2</sup>/ac</span></td>
                    </tr>
                    <tr>
                        <th class="small-cell no-wrap">Average Overstory Tree Diameter</th>
                        <td>{{optional(site.diameter)}} <span v-show="site.diameter">in</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
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
                    <tabs v-if="selectedPlot">
                        <tab :name="`Plot #${selectedPlot.number}`" icon="ios-leaf" selected>
                            <div class="card-body">
                                <pre>{{ selectedPlot }}</pre>
                            </div>
                        </tab>
                        <tab :name="`Map`" icon="map">
                            <div class="card-body">
                               <plot-map :plot="selectedPlot"/>
                            </div>
                        </tab>
                        <tab :name="`New Plant`" icon="add">
                            <plant-form :plot="selectedPlot"/>
                        </tab>
                    </tabs>
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
    import Tab from '../components/Tab'
    import Tabs from '../components/Tabs'
    import PlantForm from '../forms/PlantForm'
    import PlotMap from '../components/PlotMap'

    export default {
        name: 'Plots',

        components: {PlotMap, PlantForm, Tabs, Tab, PlotForm, Icon, InlineSpinner},

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
                    hash: this.$route.hash
                }).catch(e => {
                })
            },
        },

        methods: {
            optional(value, field) {
                if (value) {
                    return value
                }

                if (typeof field !== 'undefined') {
                    return `${field} is not provided`
                }

                return 'Not provided'
            },

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
