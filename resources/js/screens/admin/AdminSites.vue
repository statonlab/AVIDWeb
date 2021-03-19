<template>
    <div>
        <div class="d-flex mb-3 align-items-center">
            <div class="flex-grow-1">
                <h1 class="page-title">Admin Data</h1>
            </div>
            <div class="flex-shrink-0">
                <div class="text-muted">
                    Page {{ page }} of {{ lastPage }}. {{ total }} sites found.
                </div>
            </div>
        </div>

        <sites-data-view
                url="/web/admin/sites"
                show-owner
                :site-url-prefix="`/app/admin/sites`"
                :show-export-button="true"
                @load="setMeta($event)"
        />
    </div>
</template>

<script>
  import SitesDataView from '../../components/Data/SitesDataView'

  export default {
    name: 'AdminData',

    components: {SitesDataView},


    data() {
      return {
        page    : 1,
        lastPage: 1,
        total   : 0,
      }
    },

    methods: {
      setMeta(data) {
        this.page = data.current_page
        this.lastPage = data.last_page
        this.total = data.total
      },
    }
  }
</script>

<style scoped>

</style>
