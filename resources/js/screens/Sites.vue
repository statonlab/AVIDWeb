<template>
    <div>
        <h1 class="page-title mb-3">Sites</h1>

        <div class="card mb-3">
            <div class="card-header d-flex p-2">
                <div class="flex-grow-1">
                    <input type="search" class="form-control" placeholder="Search..." v-model="search">
                </div>
                <div class="ml-auto flex-shrink-0 pl-1">
                    <button class="btn btn-primary" @click.prevent="showSiteForm = true">
                        <icon name="add"/>
                        <span>New Site</span>
                    </button>
                </div>
            </div>
            <div class="card-body p-0 table-responsive">
                <p class="mb-0 p-4" v-if="loading">
                    <inline-spinner class="text-primary"/>
                </p>
                <p class="mb-0 p-4 text-muted" v-if="!loading && sites.length === 0">
                    No results found. Use the "New Site" button above to create a new one.
                </p>
                <table class="table mb-0 table-middle table-hover" v-if="!loading && sites.length > 0">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Plots</th>
                        <th>Plants</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="site in sites" :class="{'on-hover': deleting !== site.id}">
                        <td>
                            <router-link :to="`/app/sites/${site.id}`">
                                <strong>{{ site.name }}</strong>
                            </router-link>
                            <div class="text-muted">
                                {{ site.county.name }}, {{ site.state.code }}
                            </div>
                        </td>
                        <td>{{ site.plots_count | plural('Plot', 'Plots')}}</td>
                        <td>{{ site.plants_count | plural('Plant', 'Plants') }}</td>
                        <td class="text-right no-wrap">
                            <button class="show-on-hover btn btn-link btn-sm mr-1"
                                    @click.prevent="edit(site)"
                                    v-tooltip="'Edit Site'">
                                <icon name="create"/>
                            </button>
                            <button class="show-on-hover btn btn-link btn-sm"
                                    v-tooltip="'Delete Site'"
                                    @click.prevent="destroy(site)">
                                <icon name="trash" v-if="deleting !== site.id"/>
                                <inline-spinner class="text-primary" v-else/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <pager :last-page="lastPage" :page="page" @change="goTo($event)"/>

        <site-form v-if="showSiteForm"
                   @close="closeForm"
                   @create="siteCreated($event)"
                   @update="siteUpdated($event)"
                   :site="site"/>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import SiteForm from '../forms/SiteForm'
  import InlineSpinner from '../components/InlineSpinner'
  import Pager from '../components/Pager'

  export default {
    name: 'Sites',

    components: {Pager, InlineSpinner, SiteForm, Icon},

    data() {
      return {
        showSiteForm: false,
        sites       : [],
        loading     : false,
        page        : 1,
        lastPage    : 1,
        total       : 0,
        site        : null,
        deleting    : null,
        search      : '',
        _request    : null,
      }
    },

    mounted() {
      this.loading = true
      this.loadSites()
    },

    watch: {
      search() {
        this.loadSites()
      },
    },

    methods: {
      async loadSites() {
        if (this._request) {
          this._request()
        }

        try {
          const {data}  = await axios.get('/web/sites', {
            params     : {
              search: this.search,
              page  : this.page,
            },
            cancelToken: new axios.CancelToken(c => this._request = c),
          })
          this.total    = data.total
          this.sites    = data.data
          this.lastPage = data.last_page
          this.loading  = false
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loading = false
            console.error(e)
          }
        }
      },

      siteCreated() {
        this.loadSites()
        this.closeForm()
      },

      siteUpdated(site) {
        this.closeForm()
        this.sites = this.sites.map(s => s.id === site.id ? site : s)
      },

      closeForm() {
        this.site         = null
        this.showSiteForm = false
      },

      edit(site) {
        this.site         = site
        this.showSiteForm = true
      },

      destroy(site) {
        this.$confirm({
          title    : `Are you sure you want to delete ${site.name}?`,
          text     : 'This action is permanent!',
          onConfirm: async () => {
            this.deleting = site.id
            try {
              await axios.delete(`/web/sites/${site.id}`)
              await this.loadSites()
            } catch (e) {
              this.$notify({
                text: 'Unable to delete site. Please try refreshing the page.',
                type: 'error',
              })
            }
            this.deleting = null
          },
        })
      },

      goTo(page) {
        this.page = page
        this.loadSites()
      },
    },
  }
</script>

<style scoped>

</style>
