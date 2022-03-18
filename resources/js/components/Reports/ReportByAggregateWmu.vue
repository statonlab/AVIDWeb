<template>
  <div class="col-md-8">
    <div class="card border shadow-sm">
      <div class="card-header shadow-none bg-light rounded">
        <h4 class="mt-1 ml-2 page-title">Number of Sites per WMU</h4>
      </div>
      <inline-spinner class="ml-5 mt-5 mb-5" v-if="loading"/>
      <div class="card-body" v-if="!loading">
        <span v-if="sites.length === 0"> No sites found</span>
        <table class="table table-middle table-bordered mb-0" v-if="sites.length > 0">
          <thead>
          <tr>
            <th>
              <a href="#" class="d-flex align-items-center" @click.prevent="sort('aggregate_wmu')">
                <span>{{ 'Aggregate WMU' }}</span>
                <icon :name="sortIcon('aggregate_wmu')"
                      class="ml-2"
                      :class="{'invisible': orderBy !== 'aggregate_wmu'}"
                      style="width: 20px;"/>
              </a>
            </th>
            <th>
              <a href="#" class="d-flex align-items-center" @click.prevent="sort('total')">
                <span>{{ 'Total' }}</span>
                <icon :name="sortIcon('total')"
                      class="ml-2"
                      :class="{'invisible': orderBy !== 'total'}"
                      style="width: 20px;"/>
              </a>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="site in sites">
            <td>
              {{ site.aggregate_wmu ? site.aggregate_wmu : 'None' }}
            </td>
            <td>
              {{ site.total }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TokensField from "../TokensField";
import InlineSpinner from "../InlineSpinner";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import User from "../../helpers/User";
import ApexChart from "vue-apexcharts";

export default {
  name: 'ReportByAggregateWmu',

  components: {ApexChart, InlineSpinner, TokensField, Dropdown, Icon},

  mounted() {
    this.loadReport()
  },

  data() {
    return {
      User,
      loading: true,
      orderBy: 'aggregate_wmu',
      orderDir: 'asc',
      sites: null,
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
        const {data} = await axios.get(`/web/reports/site-wmu`, {
          params: {
            order_by: this.orderBy,
            order_dir: this.orderDir,
          }
        })

        this.sites = data.data
      } catch (e) {
        if (!axios.isCancel()) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }
      }
      this.loading = false
    },

    sort(field) {
      if (field === this.orderBy) {
        this.orderDir = this.orderDir === 'asc' ? 'desc' : 'asc'
      } else {
        this.orderBy = field
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
