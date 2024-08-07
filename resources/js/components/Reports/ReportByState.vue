<template>
  <div class="col-md-8">
    <div class="card border shadow-sm">
        <div class="card-header shadow-none bg-light rounded d-flex align-items-center">
            <strong class="flex-grow-1">Number of Sites per State</strong>
            <a class="flex-shrink-0 btn btn-primary"
               :href="`/web/reports/export/site-state`"
               target="_blank">
                <icon name="cloud-download"/>
                <span>Export Data</span>
            </a>
        </div>
      <inline-spinner class="ml-5 mt-5 mb-5" v-if="loading"/>
      <div class="card-body" v-if="!loading">
        <span v-if="states.length === 0"> No sites found</span>
        <table class="table table-bordered table-middle mb-0" v-if="states.length > 0">
          <thead>
          <tr>
            <th>
              <a href="#" class="d-flex align-items-center" @click.prevent="sort('name')">
                <span>{{ 'State' }}</span>
                <icon :name="sortIcon('name')"
                      class="ml-2"
                      :class="{'invisible': orderBy !== 'name'}"
                      style="width: 20px;"/>
              </a>
            </th>
            <th>
                <a href="#" class="d-flex align-items-center" @click.prevent="sort('sites_count')">
                  <span>{{ 'Total' }}</span>
                  <icon :name="sortIcon('sites_count')"
                        class="ml-2"
                        :class="{'invisible': orderBy !== 'sites_count'}"
                        style="width: 20px;"/>
                </a>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="state in states">
            <td>
              {{ state.name }}
            </td>
            <td>
              {{ state.sites_count }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TokensField from '../TokensField'
import InlineSpinner from '../InlineSpinner'
import Dropdown from '../Dropdown'
import Icon from '../Icon'
import User from '../../helpers/User'
import ApexChart from 'vue-apexcharts'
import Errors from '../../forms/Errors'

export default {
  name: 'ReportByState',

  components: {ApexChart, InlineSpinner, TokensField, Dropdown, Icon},

  mounted() {
    this.loadReport()
  },

  data() {
    return {
      User,
      loading : true,
      orderBy : 'name',
      orderDir: 'asc',
      states  : null,
      _request: null,
    }
  },

  methods: {
    async loadReport() {
      if (this._request) {
        this._request()
      }

      this.loading = true

      try {
        const {data} = await axios.get(`/web/reports/site-state`, {
          params: {
            order_by : this.orderBy,
            order_dir: this.orderDir,
          },
        })

        this.states = data.data
      } catch (e) {
        if (!axios.isCancel()) {
          if (e.response && e.response.status === 422) {
            const errors = new Errors(e.response.data)
            this.$alert(errors.toArray().join(' '))
          } else {
            this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          }
          console.error(e)
        }
      }

      this.loading = false
    },

    sort(field) {
      if (field === this.orderBy) {
        this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
      } else {
        this.orderBy  = field
        this.orderDir = 'asc'
      }
      this.loadReport()
    },

    sortIcon(field) {
      if (field === this.orderBy) {
        if (this.orderDir === 'asc') {
          return 'arrow-up'
        } else {
          return 'arrow-down'
        }
      } else {
        return ''
      }
    },
  },
}
</script>

<style scoped>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
</style>
