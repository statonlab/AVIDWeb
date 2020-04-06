<template>
    <div class="container">
        <div class="d-flex align-items-center justify-content-center" v-if="loading">
            <inline-spinner class="text-primary"/>
        </div>
        <div v-else-if="plot">
            <div class="d-flex mb-3">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <router-link :to="`/app/sites/${plot.site_id}`" class="btn btn-link-dark px-1 ml-n1">
                            <icon name="arrow-back"/>
                        </router-link>
                    </div>
                    <div class="ml-1">
                        <h1 class="page-title mb-0">
                            Plot #{{ plot.number }}
                        </h1>
                    </div>
                </div>
                <div class="ml-auto">
                    <button class="btn btn-link">
                        <icon name="create"/>
                        <span>Edit Plot</span>
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-3">
                        <div class="card-header d-flex p-2">
                            <div class="flex-grow-1">
                                <input type="search" class="search form-control" placeholder="Search plants">
                            </div>
                            <div class="ml-auto pl-1 flex-shrink-0">
                                <button class="btn btn-primary" @click.prevent="showForm = true">
                                    <icon name="add"/>
                                    <span>New Plant</span>
                                </button>
                            </div>
                        </div>
                        <div class="card-body p-0 table-responsive">
                            <div class="p-4 text-muted" v-if="plants.length === 0">
                                No plants found. Please use the add plant button above to add one.
                            </div>
                            <table class="table mb-0" v-if="plants.length > 0">
                                <thead>
                                <tr>
                                    <th>Tag</th>
                                    <th>Species</th>
                                    <th>Quadrant</th>
                                    <th>Measurements</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="plant in plants">
                                    <td>
                                        <router-link to="#">Plant #{{ plant.tag }}</router-link>
                                    </td>
                                    <td>{{ plant.species.name }}</td>
                                    <td>{{ plant.quadrant }}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <pager :page="page" :last-page="lastPage" @change="goTo($event)"/>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-3 overflow-hidden" v-if="plot.latitude && plot.longitude">
                        <div class="card-body p-2 position-relative overflow-hidden">
                            <plot-map :plot="plot" style="height: 300px;"/>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body pb-1">
                            <div class="card-title font-weight-bold">Plot Information</div>
                            <dl>
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
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card">
                <div class="card-body">
                    Plot Not Found! Please try refreshing the page or contact us.
                </div>
            </div>
        </div>

        <plant-form
                :plot="plot"
                @close="showForm = false"
                v-if="showForm"
                @create="created(plant)"
        />
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import PlotMap from '../components/PlotMap'
  import Icon from '../components/Icon'
  import PlantForm from '../forms/PlantForm'
  import Pager from '../components/Pager'

  export default {
    name      : 'Plants',
    components: {Pager, PlantForm, Icon, PlotMap, InlineSpinner},
    data() {
      return {
        loading : true,
        plot    : null,
        total   : 0,
        page    : 1,
        lastPage: 1,
        search  : '',
        request : null,
        plants  : [],
        showForm: false,

      }
    },

    mounted() {
      this.loadPlot()
      this.loadPlants()
    },

    methods: {
      async loadPlot() {
        this.loading = true
        try {
          const {id}   = this.$route.params
          const {data} = await axios.get(`/web/plots/${id}`)
          this.plot    = data
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to load plot. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loading = false
      },

      async loadPlants() {
        if (this.request) {
          this.request()
        }

        const {id} = this.$route.params
        try {
          const {data}  = await axios.get(`/web/plots/${id}/plants`, {
            params     : {
              search: this.search,
              page  : this.page,
            },
            cancelToken: new axios.CancelToken(c => this.request = c),
          })
          this.plants   = data.data
          this.lastPage = data.last_page
          this.total    = data.total
        } catch (e) {
          if (!axios.isCancel(e)) {
            console.error(e)
            this.$notify({
              text: 'Unable to load plot. Please try refreshing the page.',
              type: 'error',
            })
          }
        }
      },

      goTo(page) {
        this.page = page
        this.loadPlants()
      },

      created(plant) {
        this.showForm = false
        this.loadPlants()
        this.$notify({
          text: 'Plant created successfully',
          type: 'success',
        })
      },

      updated(plant) {
        this.showForm = false
        this.plants = this.plants.map(p => p.id === plant.id ? plant : p)
        this.$notify({
          text: 'Plant updated successfully',
          type: 'success',
        })
      },
    },
  }
</script>

<style scoped lang="scss">
    @import "../../sass/_variables.scss";

    dd {
        color: $gray-600;
    }
</style>
