<template>
  <div>
    <div class="mb-3">
      <span class="page-title">Incomplete Data</span>
      <div class="text-muted">
        Entries from spreadsheet importing that require additional information will show up here. Once the required information is entered, clicking the ‘Save’ button will make these entries publicly available. Your data is saved but is incomplete and needs your review. It will not be lost if you navigate away from this page.
      </div>
    </div>

    <div class="card" v-if="!loadingSites">
      <table class="table mb-0 table-middle table-hover table-nowrap" v-if="sites.length > 0">
        <thead>
        <tr>
          <th>Site Name</th>
          <th>Plots</th>
          <th>Plants</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="site in sites">
          <td>
            <router-link :to="`/app/data-quarantine/${site.id}`">
              <strong>{{site.name}}</strong>
            </router-link>
          </td>
          <td>{{ site.plots_count | plural('Plot', 'Plots')}}</td>
          <td>{{ site.plants_count | plural('Plant', 'Plants') }}</td>
        </tr>
        </tbody>
      </table>

      <div v-else class="card-body">
        <span class="text-muted">No quarantined data exists.</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DataQuarantine',

    mounted() {
      this.loadSites()
    },

    data() {
      return {
        sites       : [],
        loadingSites: false,
      }
    },

    methods: {
      async loadSites() {
        this.loadingSites = true

        try {
          const {data} = await axios.get(`/web/data-quarantine/sites`)
          this.sites   = data
          if (this.site === '' && data.length > 0) {
            this.site = this.sites[0].id
          }
        } catch (e) {
          this.$alert('Unable to load sites. Please try refreshing the page or contact us.')
          console.error(e)
        }

        this.loadingSites = false
      },
    }
  }
</script>

<style scoped>

</style>