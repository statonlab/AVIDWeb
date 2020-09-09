<template>
  <div>
    <div class="d-flex mb-3 align-items-center">
      <h1 class="page-title">Species</h1>
      <div class="ml-auto text-muted">
        Page {{ page }} of {{ lastPage }}.
        Show <select name="limit"
                     id="limit"
                     title="per page"
                     v-model="limit"
                     class="custom-select d-inline-block w-auto">
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="100">100</option>
      </select> per page.
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header d-flex p-2 align-items-center">
        <div class="flex-grow-1">
          <input type="search" class="form-control" placeholder="Search..." v-model="search" title="Search">
        </div>
        <div class="ml-auto">
          <button class="btn btn-info" type="button" @click.prevent="merge()" v-if="selected.length > 1">
            <icon name="git-merge"/>
            <span>Merge {{ selected.length }} Species</span>
          </button>

          <button class="btn btn-primary" @click.prevent="showForm = true">
            <icon name="add"/>
            <span>Species</span>
          </button>
        </div>
      </div>
      <div class="card-body p-0">
        <div class="d-flex align-items-center justify-content-center p-3" v-if="loading">
          <inline-spinner class="text-primary"/>
        </div>
        <p class="text-muted mb-0 p-3" v-if="species.length === 0 && !loading">
          There are no species found. Please user the "+ species" button above to add one.
        </p>
        <div class="table-responsive" v-if="!loading && species.length > 0">
          <table class="table table-hover table-middle mb-0">
            <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Plants</th>
              <th>Overstory</th>
              <th>Seedling/Shrubs</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in species" class="hover-visible-container">
              <td style="width: 30px">
                <input type="checkbox"
                       title="Select species"
                       @change="select(item, $event)"
                       :checked="selected.indexOf(item.id) > -1">
              </td>
              <td>
                <inline-spinner v-if="destroying.indexOf(item.id) > -1" class="text-primary"/>
                <strong>{{ item.name }}</strong>
              </td>
              <td>
                {{ item.type ? item.type.name : null }}
              </td>
              <td>{{ item.plants_count }}</td>
              <td>{{ item.sites_count }}</td>
              <td>{{ item.shrubs_count }}</td>
              <td>
                <div class="d-flex justify-content-end hover-visible">
                  <button class="btn btn-link" @click.prevent="edit(item)" v-tooltip="'Edit'">
                    <icon name="create"/>
                  </button>

                  <button class="btn btn-link"
                          @click.prevent="destroy(item)"
                          v-tooltip="'Delete'">
                    <icon name="trash"/>
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <pager @change="goTo($event)" :last-page="lastPage" :page="page"/>

    <species-form
        @close="closeForm"
        :species="editing"
        v-if="showForm"
        @create="created($event)"
        @update="updated($event)"/>

    <species-merge-form v-if="showMergeForm"
                        :selected="selected"
                        @close="showMergeForm = false"
                        @merged="merged"/>

    <div class="floating-button rounded shadow" v-if="selected.length > 1">
      <button class="btn btn-info" type="button" @click.prevent="merge()">
        <icon name="git-merge"/>
        <span>Merge {{ selected.length }} Species</span>
      </button>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'
import InlineSpinner from '../components/InlineSpinner'
import SpeciesForm from '../forms/SpeciesForm'
import Pager from '../components/Pager'
import Errors from '../forms/Errors'
import SpeciesMergeForm from '../forms/SpeciesMergeForm'

export default {
  name: 'Species',

  components: {SpeciesMergeForm, Pager, SpeciesForm, InlineSpinner, Icon},

  data() {
    return {
      loading      : true,
      search       : '',
      species      : [],
      page         : 1,
      lastPage     : 1,
      total        : 0,
      editing      : null,
      showForm     : false,
      request      : null,
      limit        : '20',
      destroying   : [],
      selected     : [],
      showMergeForm: false,
    }
  },

  mounted() {
    this.loadSpecies()
  },

  watch: {
    search() {
      this.loadSpecies()
    },

    limit() {
      this.page = 1
      this.loadSpecies()
    },
  },

  methods: {
    async loadSpecies() {
      if (this.request) {
        this.request()
      }

      try {
        const {data} = await axios.get(`/web/species`, {
          params     : {
            page  : this.page,
            search: this.search,
            limit : this.limit,
          },
          cancelToken: new axios.CancelToken(c => this.request = c),
        })

        this.species  = data.data
        this.page     = data.current_page
        this.lastPage = data.last_page
        this.total    = data.total
      } catch (e) {
        if (!axios.isCancel(e)) {
          console.error(e)
          this.$notify({
            type: 'error',
            text: 'Unable to load species. Please try refreshing the page.',
          })
        }
      }
      this.loading = false
    },

    created(species) {
      this.loadSpecies()
      this.editing = null
    },

    updated(species) {
      this.editing  = null
      this.species  = this.species.map(s => s.id === species.id ? species : s)
      this.showForm = false
    },

    destroy(species) {
      this.$confirm({
        title    : `Delete ${species.name}?`,
        text     : 'This action is permanent',
        onConfirm: async () => {
          this.destroying.push(species.id)
          try {
            await axios.delete(`/web/species/${species.id}`)
            this.species = this.species.filter(s => s.id !== species.id)
            this.$notify({
              type: 'success',
              text: 'Species deleted successfully',
            })
          } catch (e) {
            if (e.response && e.response.status === 422) {
              const errors = new Errors(e.response.data)
              if (errors.has('species')) {
                this.$alert(errors.first('species'))
              }
            } else {
              this.$alert({
                title: 'Error',
                text : 'Unable to delete species. Please try refreshing the page.',
              })
            }
          }

          this.destroying = this.destroying.filter(id => id !== species.id)
        },
      })
    },

    edit(species) {
      this.editing  = species
      this.showForm = true
    },

    closeForm() {
      this.editing  = null
      this.showForm = false
    },

    goTo(page) {
      this.loading = true
      this.page    = page
      this.loadSpecies()
    },

    merge() {
      this.showMergeForm = true
    },

    select(species, event) {
      if (this.selected.indexOf(species.id) > -1) {
        event.target.checked = false
        this.selected        = this.selected.filter(id => id !== species.id)
      } else {
        event.target.checked = true
        this.selected.push(species.id)
      }
    },

    merged() {
      this.showMergeForm = false
      this.loading       = true
      this.page          = 1
      this.selected      = []
      this.loadSpecies()
    },
  },
}
</script>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
