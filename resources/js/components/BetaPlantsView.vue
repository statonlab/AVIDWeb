<template>
    <div>
        <div class="card-header d-flex align-items-center p-2">
            <div class="flex-grow-1">
                <input type="search" class="form-control" placeholder="Search by tag or species" v-model="search">
            </div>
            <div class="flex-shrink-0 text-muted">
                <button class="btn btn-primary" @click.prevent="showForm = true">
                    <icon name="add"/>
                    <span>Plant</span>
                </button>
            </div>
        </div>
        <div class="card-body p-0 table-responsive">
            <div class="d-flex align-items-center justify-content-center" v-if="loading">
                <inline-spinner class="text-primary"/>
            </div>
            <div v-if="!loading && plants.length === 0" class="p-3 text-muted border-top">
                No plants found. Please try adjusting your filters or create a new plant using the "+ Plant" button above.
            </div>

            <table class="table mb-0" v-if="!loading && plants.length > 0">
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
                <tr v-for="plant in plants">
                    <td>
                        <router-link :to="`${siteUrlPrefix}/${plant.id}`">{{plant.type.name}} #{{ plant.tag }}</router-link>
                    </td>
                    <td>{{ plant.species_name }}</td>
                    <td>{{ plant.quadrant }}</td>
                    <td>{{ plant.measurements_count }}</td>
                    <td>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-sm btn-link"
                                    v-tooltip="'Edit'"
                                    v-if="editable || User.owns(plant) || User.can('update sites')"
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

            <div class="py-2" v-if="lastPage > 1">
                <pager
                        :page="page"
                        :last-page="lastPage"
                        @change="goTo($event)"/>
            </div>
        </div>

        <plant-form
                :plot="plot"
                v-if="showForm"
                :plant="plant"
                @close="closeForm"
                @create="created"
                @update="updated"
        />
    </div>
</template>

<script>
  import Icon from './Icon'
  import InlineSpinner from './InlineSpinner'
  import User from '../helpers/User'
  import PlantForm from '../forms/PlantForm'
  import Pager from './Pager'

  export default {
    name: 'BetaPlantsView',

    components: {Pager, PlantForm, InlineSpinner, Icon},

    props: {
      plot          : {required: true},
      editable      : {required: false, type: Boolean, default: true},
      siteUrlPrefix : {required: false, type: String, default: '/app/plants'},
    },

    watch: {
      'plot.id': {
        handler() {
          this.loading = true
          this.loadPlants()
        },
      },

      search() {
        this.loadPlants()
      }
    },

    data() {
      return {
        User    : User,
        plants  : [],
        plant   : null,
        showForm: false,
        lastPage: 1,
        page    : 1,
        orderBy : 'tag',
        orderDir: 'asc',
        request : null,
        total   : 0,
        deleting: null,
        loading : true,
        search: '',
      }
    },

    mounted() {
      this.loadPlants()
    },

    methods: {
      async loadPlants() {
        if (this.request) {
          this.request()
        }

        try {
          const {data}  = await axios.get(`/web/plots/${this.plot.id}/plants`, {
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

        this.loading = false
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

<style scoped>

</style>
