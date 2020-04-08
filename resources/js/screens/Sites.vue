<template>
    <div class="container">
        <h1 class="page-title mb-3">Sites</h1>

        <div class="card mb-3">
            <div class="card-header d-flex p-2">
                <div class="flex-grow-1">
                    <input type="search" class="form-control" placeholder="Search...">
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
                        <th class="text-right">Plots</th>
                        <th class="text-right">Plants</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="site in sites" class="on-hover">
                        <td>
                            <router-link :to="`/app/sites/${site.id}`">
                                <strong>{{ site.name }}</strong>
                            </router-link>
                            <div class="text-muted">
                                {{ site.county.name }}, {{ site.state.code }}
                            </div>
                        </td>
                        <td class="text-right">{{ site.plots_count }} Plots</td>
                        <td class="text-right">{{ site.plants_count }} Plants</td>
                        <td class="text-right no-wrap">
                            <button class="show-on-hover btn btn-link btn-sm mr-1" v-tooltip="'Edit Site'">
                                <icon name="create"/>
                            </button>
                            <button class="show-on-hover btn btn-link btn-sm" v-tooltip="'Delete Site'">
                                <icon name="trash"/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <site-form
                v-if="showSiteForm"
                @close="showSiteForm = false"
                @create="siteCreated($event)"
        />
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import SiteForm from '../forms/SiteForm'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'Sites',

    components: {InlineSpinner, SiteForm, Icon},

    data() {
      return {
        showSiteForm: false,
        sites       : [],
        loading     : false,
        page        : 1,
        lastPage    : 1,
        total       : 0,
      }
    },

    mounted() {
      this.loading = true
      this.loadSites()
    },

    methods: {
      async loadSites() {
        try {
          const {data}  = await axios.get('/web/sites')
          this.total    = data.total
          this.sites    = data.data
          this.lastPage = data.last_page
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      },

      siteCreated() {
        this.loadSites()
        this.showSiteForm = false
      },
    },
  }
</script>

<style scoped>

</style>
