<template>
  <div class="col-md-8">
    <div class="card border shadow-sm">
      <div class="card-header shadow-none bg-light rounded d-flex justify-content-between">
        <h4 class="page-title">Number of Sites per Town</h4>
        <input type="search" class="form-control" placeholder="Search..." v-model="search">
      </div>
      <inline-spinner class="ml-5 mt-5 mb-5" v-if="loading"/>
      <div class="card-body" v-if="!loading">
        <div v-if="sites.length === 0" class="ml-2 mt-2 mb-2">No sites found.</div>
        <table class="table table-middle table-bordered mb-0" v-if="sites.length > 0">
          <thead>
          <tr>
            <th>
              <a href="#" class="d-flex align-items-center" @click.prevent="sort('city')">
                <span>{{ 'Town' }}</span>
                <icon :name="sortIcon('city')"
                      class="ml-2"
                      :class="{'invisible': orderBy !== 'city'}"
                      style="width: 20px;"/>
              </a>
            </th>
            <th>
              <a href="#" class="d-flex align-items-center" @click.prevent="sort('count')">
                <span>{{ 'Total' }}</span>
                <icon :name="sortIcon('count')"
                      class="ml-2"
                      :class="{'invisible': orderBy !== 'count'}"
                      style="width: 20px;"/>
              </a>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="site in sites">
            <td>
              {{ site.city }}
            </td>
            <td>
              {{ site.count }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <pager class="mt-2" :last-page="lastPage" :page="page" @change="goTo($event)"/>
  </div>
</template>

<script>
import TokensField from "../TokensField";
import InlineSpinner from "../InlineSpinner";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import User from "../../helpers/User";
import ApexChart from "vue-apexcharts";
import Errors from "../../forms/Errors";
import Pager from "../Pager";

export default {
  name: 'ReportByTown',

  components: {ApexChart, InlineSpinner, TokensField, Dropdown, Icon, Pager},

  data() {
    return {
      User,
      loading: true,
      page: 1,
      lastPage: 1,
      limit: 10,
      search: '',
      orderBy: 'city',
      orderDir: 'asc',
      sites: null,
      _request: null,
    }
  },

  mounted() {
    this.loadReport()
  },

  watch: {
    search() {
      this.page = 1
      this.loadReport()
    },
  },

  methods: {
    async loadReport() {
      if (this._request) {
        this._request()
      }

      this.loading = true

      try {
        const {data} = await axios.get(`/web/reports/site-town`, {
          params: {
            page: this.page,
            order_by: this.orderBy,
            order_dir: this.orderDir,
            search: this.search,
            limit: this.limit,
          },
          cancelToken: new axios.CancelToken(c => this._request = c),
        })
        this.total = data.total
        this.sites = data.data
        this.lastPage = data.last_page
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

    goTo(page) {
      this.page = page
      this.loadReport()
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
  }
  ,
}
</script>

<style scoped>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0rem;
}
</style>
