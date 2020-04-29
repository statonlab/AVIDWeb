<template>
    <div>
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
                        <p class="mb-0 text-muted">
                            {{ plot.site.name }}
                        </p>
                    </div>
                </div>
                <div class="ml-auto">
                    <button class="btn btn-link" v-if="User.owns(plot) || User.can('update sites')" @click.prevent="editingPlot = true">
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
                                <input type="search"
                                       class="search form-control"
                                       placeholder="Search plants"
                                       v-model="search"
                                       title="Search plants">
                            </div>
                            <div class="ml-auto pl-1 flex-shrink-0">
                                <button class="btn btn-primary"
                                        v-if="User.owns(plot) || User.can('update sites')"
                                        @click.prevent="showForm = true">
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
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('tag')">
                                            <span class="mr-1">Tag</span>
                                            <icon :name="sortIcon('tag')"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('name')">
                                            <span class="mr-1">Species</span>
                                            <icon :name="sortIcon('name')"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('quadrant')">
                                            <span class="mr-1">Quadrant</span>
                                            <icon :name="sortIcon('quadrant')"/>
                                        </a>
                                    </th>
                                    <th>
                                        <a href="#"
                                           class="d-flex align-items-center"
                                           @click.prevent="sort('measurements_count')">
                                            <span class="mr-1">Measurements</span>
                                            <icon :name="sortIcon('measurements_count')"/>
                                        </a>
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="plant in plants" :class="{'hover-visible-container': deleting !== plant.id}">
                                    <td>
                                        <router-link :to="`/app/plants/${plant.id}`">{{plant.type.name}} #{{ plant.tag }}</router-link>
                                    </td>
                                    <td>{{ plant.species_name }}</td>
                                    <td>{{ plant.quadrant }}</td>
                                    <td>{{ plant.measurements_count }}</td>
                                    <td>
                                        <div class="d-flex justify-content-end hover-visible">
                                            <button type="button" class="btn btn-sm btn-link"
                                                    v-tooltip="'Edit'"
                                                    v-if="User.owns(plant) || User.can('update sites')"
                                                    @click.prevent="edit(plant)">
                                                <icon name="create"/>
                                            </button>
                                            <button type="button"
                                                    v-if="User.owns(plant) || User.can('delete sites')"
                                                    @click="destroy(plant)"
                                                    class="btn btn-sm"
                                                    :class="deleting === plant.id ? 'btn-danger': 'btn-link'"
                                                    v-tooltip="'Delete'">
                                                <icon name="trash" v-if="deleting !== plant.id"/>
                                                <inline-spinner v-else/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <pager :page="page" :last-page="lastPage" @change="goTo($event)"/>
                </div>
                <div class="col-lg-4">
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

                                <dt>Site</dt>
                                <dd>{{plot.site.name}}</dd>
                            </dl>
                        </div>
                    </div>

                    <div class="card mb-3 overflow-hidden" v-if="plot.latitude && plot.longitude">
                        <div class="card-body p-2 position-relative overflow-hidden">
                            <plot-map :plot="plot" style="height: 300px;"/>
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
                :plant="plant"
                @close="closeForm"
                @update="updated($event)"
                v-if="showForm"
                @create="created($event)"
        />

        <plot-form
                :plot="plot"
                v-if="editingPlot"
                @close="editingPlot = false"
                @update="plotUpdated($event)"
        />
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  import PlotMap from '../components/PlotMap'
  import Icon from '../components/Icon'
  import PlantForm from '../forms/PlantForm'
  import Pager from '../components/Pager'
  import PlotForm from '../forms/PlotForm'
  import User from '../helpers/User'

  export default {
    name      : 'Plants',
    components: {PlotForm, Pager, PlantForm, Icon, PlotMap, InlineSpinner},
    data() {
      return {
        User       : User,
        loading    : true,
        plot       : null,
        deleting   : null,
        total      : 0,
        editingPlot: false,
        page       : 1,
        lastPage   : 1,
        search     : '',
        request    : null,
        plants     : [],
        showForm   : false,
        plant      : null,
        orderBy    : 'tag',
        orderDir   : 'asc',
      }
    },

    mounted() {
      this.loadPlot()
      this.loadPlants()
    },

    watch: {
      search() {
        this.loadPlants()
      },
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
              search   : this.search,
              page     : this.page,
              order_by : this.orderBy,
              order_dir: this.orderDir,
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
        this.closeForm()
        this.loadPlants()
        this.$notify({
          text: 'Plant created successfully',
          type: 'success',
        })
      },

      updated(plant) {
        this.closeForm()
        this.plants = this.plants.map(p => p.id === plant.id ? plant : p)
        this.$notify({
          text: 'Plant updated successfully',
          type: 'success',
        })
      },

      closeForm() {
        this.plant    = null
        this.showForm = false
      },

      edit(plant) {
        this.plant    = plant
        this.showForm = true
      },

      destroy(plant) {
        if (this.deleting !== null) {
          return
        }

        this.$confirm({
          title    : `Are you sure you want to delete Plant #${plant.tag}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.deleting = plant.id
            try {
              await axios.delete(`/web/plants/${plant.id}`)
              this.loadPlants()
            } catch (e) {
              this.$notify({
                text: 'Unable to delete plant. Please try refreshing the page.',
                type: 'error',
              })
              console.error(e)
            }
            this.deleting = null
          },
        })
      },

      plotUpdated(plot) {
        this.plot        = plot
        this.editingPlot = false
      },

      sort(column) {
        if (column === this.orderBy) {
          this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
        } else {
          this.orderBy  = column
          this.orderDir = 'asc'
        }

        this.loadPlants()
      },

      sortIcon(column) {
        if (column !== this.orderBy) {
          return 'swap-vertical'
        }

        if (this.orderDir === 'asc') {
          return 'arrow-up'
        }

        return 'arrow-down'
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
