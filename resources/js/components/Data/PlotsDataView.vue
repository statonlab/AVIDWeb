<template>
    <div>
        <div class="d-flex align-items-center justify-content-center" v-if="loadingSite">
            <inline-spinner class="text-primary"/>
        </div>
        <div class="mb-3 d-flex" v-if="site && !loadingSite">
            <div class="flex-grow-1">
                <h1 class="page-title">
                    {{ site.name }}
                </h1>
                <p class="mb-0 text-muted">
                    {{ site.city ? `${site.city}, ` : ''}}{{ site.county.name }}, {{ site.state.name }}
                </p>
            </div>
            <div class="flex-shrink-0">

            </div>
        </div>

        <beta-plots-view
                @edit-site-request="edit"
                v-if="site"
                :site="site"
                :site-url-prefix="siteUrlPrefix"
                :editable="editable"/>

        <site-form
                v-if="showForm"
                :site="site"
                @close="showForm = false"
                @update="updated"
        />
    </div>
</template>

<script>
  import InlineSpinner from '../InlineSpinner'
  import BetaPlotsView from '../BetaPlotsView'
  import Icon from '../Icon'
  import SiteForm from '../../forms/SiteForm'

  export default {
    name: 'BetaSite',

    components: {SiteForm, Icon, BetaPlotsView, InlineSpinner},

    props: {
      siteUrlPrefix      : {required: false, type: String, default: '/app/plants'},
      editable           : {required: false, type: Boolean, default: true},
    },

    data() {
      return {
        loadingSite  : true,
        site         : null,
        plots        : [],
        loadingPlots : false,
        plotSearch   : '',
        plants       : [],
        loadingPlants: false,
        showForm     : false,
      }
    },

    mounted() {
      this.loadSite()
    },

    methods: {
      async loadSite() {
        this.loadingSite = true
        try {
          const {id}   = this.$route.params
          const {data} = await axios.get(`/web/sites/${id}`)
          this.site    = data
        } catch (e) {
          console.error(e)
          this.$alert('Unable to load site information. Please try refreshing the page.')
        }
        this.loadingSite = false
      },

      edit() {
        this.showForm = true
      },

      updated(site) {
        this.site = site
        this.showForm = false
      },
    },
  }
</script>

<style scoped>

</style>
