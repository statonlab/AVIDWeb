<template>
  <div>
    <div class="row">
      <div class="col-md-4 col-lg-3">
        <div class="card mb-3">
          <div class="card-header d-flex">
            <div class="flex-grow-1">
              <strong>Plots</strong>
            </div>
            <div class="flex-shrink-0" v-if="sharedEdit || editable || User.owns(site) || User.can('update sites')">
              <button class="btn btn-primary" @click.prevent="showPlotForm = true">
                <icon name="add"/>
                <span>Plot</span>
              </button>
            </div>
          </div>
          <div class="card-body">
            <dropdown
                autocomplete
                @search="search = $event"
                v-model="plotId"
                :loading="loading"
                :options="plotOptions"/>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body">
            <div class="pb-2">
              <strong>Actions</strong>
            </div>
            <div class="mb-4">
              <a class="d-flex align-items-center" :href="`/web/sites/${site.id}/export`" target="_blank">
                <icon name="cloud-download-outline"/>
                <span class="ml-2">Download Spreadsheet</span>
              </a>
              <div class="mb-2">
                <small class="text-muted">The produced spreadsheet can be filled and imported into the site</small>
              </div>
              <a class="mt-3 d-flex align-items-center" href="#" @click.prevent="importing = true">
                <icon name="cloud-upload-outline"/>
                <span class="ml-2">Import Spreadsheet</span>
              </a>
              <div class="mb-2">
                <small class="text-muted">Import data recorded in spreadsheet format</small>
              </div>
              <div v-if="User.can('change owner')">
                <a class="mt-3 d-flex align-items-center" href="#" @click.prevent="showOwnerForm = true">
                  <icon name="people-outline"/>
                  <span class="ml-2">Transfer Ownership</span>
                </a>
                <div class="mb-4">
                  <small class="text-muted">Transfer ownership of this site to another user</small>
                </div>
              </div>
            </div>
            <div class="custom-control custom-checkbox">
              <input class="custom-control-input"
                     id="send-notifications"
                     type="checkbox"
                     :checked="this.sendReminders"
                     @change.prevent="toggleReminders()">
              <label class="custom-control-label font-weight-normal" for="send-notifications">
                Receive reminders to revisit this site
              </label>
            </div>
          </div>
        </div>
        <site-sharing-card :site="site" v-if="User.can('share sites') || User.owns(site)"/>
      </div>
      <div class="col-md-8 col-lg-9">
        <div class="card mb-3">
          <tabs v-if="!loading">
            <tab name="Plants" selected>
              <beta-plants-view
                  :site-url-prefix="siteUrlPrefix"
                  :editable="sharedEdit || editable"
                  v-if="plot"
                  :plot="plot"
                  :site="site"/>
              <div v-else>
                <div class="p-3 d-flex align-items-center justify-content-center" v-if="loading">
                  <inline-spinner class="text-primary"/>
                </div>
                <div class="card-body d-flex align-items-center justify-content-center flex-column text-center"
                     v-if="!loading && plots.length === 0">
                  <div class="d-flex align-items-center justify-content-center icon-circle">
                    <icon name="document-text-outline"/>
                  </div>
                  <p class="font-weight-bold mt-4">Welcome to Your Site</p>
                  <p class="text-muted max-w-700">
                    In this page, you will be able to create and manage plots for your site.
                  </p>
                  <p class="text-muted max-w-700">
                    Get started by creating a new plot using the button below.
                  </p>
                  <button class="btn btn-primary mt-4" @click.prevent="showPlotForm = true">
                    <icon name="add"/>
                    <span>
                      New Plot
                    </span>
                  </button>
                </div>
              </div>
            </tab>
            <tab name="Plot Info" v-if="plot">
              <div class="card-header border-bottom d-flex">
                <div class="flex-grow-1">
                  <strong>Plot Information</strong>
                </div>
                <div class="flex-shrink-0">
                  <button class="btn btn-link"
                          @click.prevent="edit"
                          v-if="sharedEdit || editable || User.owns(plot) || User.owns(site) || User.can('update sites')">
                    <icon name="create"/>
                    <span>Edit Plot</span>
                  </button>
                  <button class="btn btn-link"
                          @click.prevent="deletePlot"
                          v-if="User.owns(plot) || User.owns(site) || User.can('delete sites')">
                    <icon name="trash" v-if="deleting !== plot.id"/>
                    <inline-spinner v-else/>
                    <span>Delete Plot</span>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <dl v-if="plot" class="mb-0">
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
                  <dd v-if="plot.ground_cover !== null">{{ plot.ground_cover }}</dd>
                  <dd v-else>Not Provided</dd>

                  <dt>Canopy</dt>
                  <dd v-if="plot.canopy !== null">{{ plot.canopy }}</dd>
                  <dd v-else>Not Provided</dd>

                  <dt>Subcanopy</dt>
                  <dd v-if="plot.subcanopy !== null">{{ plot.subcanopy }}</dd>
                  <dd v-else>Not Provided</dd>

                  <dt>Recorders</dt>
                  <dd v-if="plot.recorders !== null">{{ plot.recorders }}</dd>
                  <dd v-else>Not Provided</dd>

                  <dt>Wildlife Management Unit</dt>
                  <dd v-if="plot.wmu">{{ plot.wmu }}</dd>
                  <dd v-else>Not Provided</dd>
                </dl>
              </div>
            </tab>
            <tab name="Site Info">
              <div class="card-header border-bottom d-flex">
                <div class="flex-grow-1">
                  <strong>Site Information</strong>
                </div>
                <div class="flex-shrink-0">
                  <button class="btn btn-link"
                          @click.prevent="$emit('edit-site-request')"
                          v-if="sharedEdit || editable || User.owns(site) || User.can('update sites')">
                    <icon name="create"/>
                    <span>Edit Site</span>
                  </button>
                </div>
                <div class="flex-shrink-0">
                  <button class="btn btn-link"
                          @click.prevent="deleteSite"
                          v-if="User.owns(site) || User.can('delete sites')">
                    <icon name="trash" v-if="deleting !== site.id"/>
                    <inline-spinner v-else/>
                    <span>Delete Site</span>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <dl class="mb-0">
                  <dt>Owner</dt>
                  <dd class="text-muted">{{ optional(site.owner_name, 'Owner name') }}</dd>

                  <dt>Contact Info</dt>
                  <dd class="text-muted">
                    {{ optional(site.owner_contact, 'Owner contact info') }}
                  </dd>

                  <dt>Overstory Species</dt>
                  <dd class="text-muted" v-if="site.species.length !== 0">
                    {{ site.species.map(v => v.name).join(', ') }}
                  </dd>
                  <dd class="text-muted" v-else>Not provided</dd>

                  <dt>Seedling or Shrub Species</dt>
                  <dd class="text-muted" v-if="site.shrubs.length !== 0">
                    {{ site.shrubs.map(v => v.name).join(', ') }}
                  </dd>
                  <dd class="text-muted" v-else>Not provided</dd>

                  <dt>Basal Area</dt>
                  <dd class="text-muted">
                    {{ optional(site.basal_area) }}
                    <span v-show="site.basal_area">ft<sup>2</sup>/ac</span>
                  </dd>

                  <dt>Average Overstory Tree Diameter</dt>
                  <dd class="text-muted">{{ optional(site.diameter) }} <span v-show="site.diameter">in</span>
                  </dd>
                </dl>
              </div>
            </tab>
          </tabs>
        </div>
      </div>
    </div>

    <import-form
        @close="closeImportForm"
        v-if="importing"
        :site="site"
        @create="measurementsCreated()"
    />

    <plot-form
        :site="site"
        :plot="editing"
        v-if="showPlotForm"
        @create="created($event)"
        @update="updated($event)"
        @close="closeForm"/>

    <owner-form
        :site="site"
        v-if="showOwnerForm"
        @close="showOwnerForm = false"/>
  </div>
</template>

<script>
import Icon from './Icon'
import Tabs from './Tabs'
import Tab from './Tab'
import SiteSharingCard from './SiteSharingCard'
import BetaPlantsView from './BetaPlantsView'
import Dropdown from './Dropdown'
import PlotForm from '../forms/PlotForm'
import ImportForm from '../forms/ImportForm'
import OwnerForm from '../forms/OwnerForm'
import InlineSpinner from './InlineSpinner'
import User from '../helpers/User'

export default {
  name: 'BetaPlotsView',

  components: {
    InlineSpinner,
    PlotForm,
    ImportForm,
    OwnerForm,
    Dropdown,
    BetaPlantsView,
    Tab,
    Tabs,
    Icon,
    SiteSharingCard,
  },

  props: {
    site         : {required: true},
    siteUrlPrefix: {required: false, type: String, default: '/app/plants'},
    editable     : {required: false, type: Boolean, default: false},
  },

  data() {
    return {
      User         : User,
      loading      : true,
      plots        : [],
      plot         : null,
      plotId       : null,
      page         : 1,
      lastPage     : 1,
      search       : '',
      orderBy      : 'number',
      orderDir     : 'asc',
      request      : null,
      plotOptions  : [],
      showPlotForm : false,
      showOwnerForm: false,
      editing      : null,
      deleting     : null,
      importing    : false,
      userSite     : null,
      sendReminders: false,
      sharedEdit   : false,
    }
  },

  watch: {
    'site.id': {
      handler() {
        this.loadPlots()
      },
    },

    plotId(id) {
      const plots = this.plots.filter(p => p.id === id)
      if (plots.length > 0) {
        this.plot = plots[0]
      }
    },

    search() {
      this.loadPlots()
    },
  },

  mounted() {
    this.loadPlots()
    if (!this.User.owns(this.site)) {
      this.loadUserSite()
    } else {
      this.sendReminders = this.site.sends_reminders
    }
  },

  methods: {
    async loadPlots() {
      if (this.request !== null) {
        this.request()
      }

      try {
        const {data} = await axios.get(`/web/sites/${this.site.id}/plots`, {
          params     : {
            page     : this.page,
            search   : this.search,
            order_by : this.orderBy,
            order_dir: this.orderDir,
            limit    : 250,
          },
          cancelToken: new axios.CancelToken(c => this.request = c),
        })

        this.plots    = data.data
        this.lastPage = data.last_page
        this.loading  = false
        this.request  = null

        if ((this.plotId === null || this.plot === null) && this.plots.length > 0) {
          this.plotId = this.plots[0].id
          this.plot   = this.plots[0]
        }

        this.setOptions()
      } catch (e) {
        if (!axios.isCancel(e)) {
          this.loading = false
          this.request = null
        }
      }
    },

    async loadUserSite() {
      try {
        const {data}       = await axios.get(`/web/user-sites/site/${this.site.id}`)
        this.userSite      = data
        this.sharedEdit    = data.editable
        this.sendReminders = data.sends_reminders
      } catch (e) {
        if (e.response && e.response.status === 404) {
          this.sends_reminders = false
        } else {
          this.$notify({
            text: 'Unable to load site information. Please try refreshing the page.',
            type: 'error',
          })
          console.error(e)
        }
      }
    },

    created(plot) {
      this.plots.push(plot)
      this.plot   = plot
      this.plotId = plot.id
      this.setOptions()
      this.closeForm()
      console.log(this.plots.length)
    },

    updated(plot) {
      this.plot  = plot
      this.plots = this.plots.map(p => p.id === plot.id ? plot : p)
      this.setOptions()
      this.closeForm()
    },

    setOptions() {
      this.plotOptions = this.plots.map(p => {
        return {
          value: p.id,
          label: `Plot #${p.number}`,
        }
      })
    },

    closeForm() {
      this.showPlotForm = false
      this.editing      = null
    },

    edit() {
      this.editing      = this.plot
      this.showPlotForm = true
    },

    deletePlot() {
      if (this.deleting !== null) {
        return
      }

      this.$confirm({
        title    : `Are you sure you want to delete Plot #${this.plot.number}?`,
        text     : 'This action is permanent!',
        onConfirm: async () => {
          this.deleting = this.plot.id
          try {
            await axios.delete(`/web/plots/${this.plot.id}`)
            this.plot = null
            this.loadPlots()
            this.$notify({
              text: 'Plot deleted successfully.',
              type: 'success',
            })
          } catch (e) {
            this.$notify({
              text: 'Unable to delete plot. Please try refreshing the page.',
              type: 'error',
            })
          }
          this.deleting = null
        },
      })
    },

    deleteSite() {
      if (this.deleting !== null) {
        return
      }

      this.$confirm({
        title    : `Are you sure you want to delete ${this.site.name}?`,
        text     : 'This action is permanent!',
        onConfirm: async () => {
          this.deleting = this.site.id
          try {
            await axios.delete(`/web/sites/${this.site.id}`)
            this.$notify({
              text: 'Site deleted successfully',
              type: 'error',
            })
            this.$router.replace({
              path : '/app/sites',
              query: {},
            }).catch(e => {
            })
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

    optional(value, field) {
      if (value) {
        if (Array.isArray(value) && value.length !== 0) {
          return value.map(v => v.name).join(', ')
        }
        return value
      }

      if (typeof field !== 'undefined') {
        return `${field} is not provided`
      }

      return 'Not provided'
    },

    measurementsCreated() {
      this.closeImportForm()
    },

    closeImportForm() {
      this.importing = false
    },

    async toggleReminders() {
      try {
        if (this.User.owns(this.site)) {
          const {data}              = await axios.put(`/web/sites/${this.site.id}/toggle-reminders`)
          this.site.sends_reminders = data.sends_reminders
          this.sendReminders        = data.sends_reminders
        } else {
          const {data}       = await axios.put(`/web/user-sites/${this.site.id}/toggle-reminders`)
          this.userSite      = {
            ...this.userSite,
            sends_reminders: data.sends_reminders,
          }
          this.sendReminders = data.sends_reminders
        }
        this.$notify({
          text: 'Reminders updated successfully.',
          type: 'success',
        })
      } catch (e) {
        console.error(e)
        this.$notify({
          text: 'Unable to update reminders. Please try refreshing the page.',
          type: 'error',
        })
      }
    },
  },
}
</script>

<style scoped>

</style>
