<template>
  <div>
    <div class="d-flex mb-3 align-items-center">
      <div class="flex-grow-1">
        <h1 class="page-title">Data Quarantine</h1>
      </div>
      <div class="flex-shrink-0">
        <div class="text-muted">
          Page {{ page }} of {{ lastPage }}. {{ total }} sites found.
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header d-flex">
        <div class="flex-shrink-0">
          <select name="data-type"
                  id="data-type"
                  v-model="dataType"
                  class="form-control">
            <option value="plots">Plots</option>
            <option value="plants">Plants</option>
          </select>
        </div>
      </div>
      <div class="card-body">
        <table class="table mb-0 table-middle table-hover table-nowrap">
          <thead v-if="dataType === 'plots'">
            <tr>
              <th>Plot</th>
              <th>Site</th>
              <th>Owner</th>
            </tr>
          </thead>
          <thead v-else>
            <tr>
              <th>Plant</th>
              <th>Site</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody v-if="dataType === 'plots'">
            <tr v-for="datum in data">
              <td>{{ datum.number }}</td>
              <td>
                <router-link :to="`/sites/${datum.site.id}`">
                  {{ datum.site.name }}
                </router-link>
              </td>
              <td>{{ datum.user.name }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="datum in data">
              <td>{{ datum.tag }}</td>
              <td>{{ datum.site.name }}</td>
              <td>{{ datum.user.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SitesDataView from '../../components/Data/SitesDataView'

export default {
  name: 'AdminQuarantine',

  components: {SitesDataView},

  data() {
    return {
      data   : [],
      page    : 1,
      lastPage: 1,
      total   : 0,
      dataType: 'plots',
      loading : false,
      orderBy : 'owner',
      orderDir: 'desc',
    }
  },

  mounted() {
    this.loadData()
  },

  watch: {
    dataType() {
      this.loadData()
    }
  },

  methods: {
    setMeta(data) {
      this.page = data.current_page
      this.lastPage = data.last_page
      this.total = data.total
    },

    async loadData() {
      this.loading = true
      try {
        const {data} = await axios.get('/web/admin/data-quarantine', {
          params: {
            type: this.dataType,
            order_by: this.orderBy,
            order_dir: this.orderDir,
          }
        })
        this.data = data.data
      } catch(e) {
        console.error(e)
      }
      this.loading = false
    },
  }
}
</script>

<style scoped>

</style>
