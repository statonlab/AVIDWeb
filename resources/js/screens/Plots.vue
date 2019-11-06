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
                            <button class="btn btn-sm btn-primary">
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
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-8">
                <div class="card" v-if="plot">
                    <div class="card-header d-flex align-items-center">
                        <div>
                            <strong>Plot #1</strong>
                        </div>
                        <div class="ml-auto">
                            <button class="btn btn-sm btn-primary">
                                <icon name="add"/>
                                <span>Plant</span>
                            </button>
                        </div>
                    </div>
                    <div class="card-body">

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
                        <button class="btn btn-primary">
                            <icon name="add"/>
                            <span>Plot</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import Icon from '../components/Icon'

  export default {
    name: 'Plots',

    components: {Icon, InlineSpinner},

    data() {
      return {
        plots   : [],
        page    : 1,
        lastPage: 1,
        total   : 0,
        loading : false,
        search  : '',
        request : null,
        site    : null,
        plot    : null,
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
          const id      = this.$route.params.id
          const {data}  = await axios.get(`/web/sites/${id}/plots`, {
            params     : {
              page  : this.page,
              search: this.search,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })
          this.total    = data.total
          this.plots    = data.data
          this.page     = data.current_page
          this.lastPage = data.last_page
          this.loading  = false
          this.request  = null
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
