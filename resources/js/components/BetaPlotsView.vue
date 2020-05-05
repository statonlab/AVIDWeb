<template>
    <div>
        <div class="row">
            <div class="col-md-4 col-lg-3">
                <div class="card mb-3">
                    <div class="card-header d-flex">
                        <div class="flex-grow-1">
                            <strong>Plots</strong>
                        </div>
                        <div class="flex-shrink-0">
                            <button class="btn btn-primary">
                                <icon name="add"/>
                                <span>Plot</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-lg-9">
                <div class="card mb-3">
                    <tabs>
                        <tab name="Plants" selected>
                            <beta-plants-view :plot="plot"/>
                        </tab>
                        <tab name="Site Info">
                            Site info
                        </tab>
                        <tab name="Plot Info">
                            Plot info
                        </tab>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from './Icon'
  import Tabs from './Tabs'
  import Tab from './Tab'
  import BetaPlantsView from './BetaPlantsView'

  export default {
    name: 'BetaPlotsView',

    components: {BetaPlantsView, Tab, Tabs, Icon},

    props: {
      site: {required: true},
    },

    data() {
      return {
        loading : false,
        plots   : [],
        plot    : null,
        page    : 1,
        lastPage: 1,
        search  : '',
        orderBy : 'number',
        orderDir: 'asc',
        request : null,
      }
    },

    watch: {
      'site.id': {
        handler() {
          this.loadPlots()
        },
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
          const id     = this.$route.params.id
          const {data} = await axios.get(`/web/sites/${id}/plots`, {
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
          if(this.plot === null && this.plots.length > 0) {
            this.plot = this.plots[0]
          }
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            this.request = null
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
