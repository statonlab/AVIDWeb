<template>
    <div>
        <h1 class="page-title mb-3">Sites</h1>

        <sites-data-view :show-owner="true" :show-site-type="true" :show-invitations="true" />
    </div>
</template>

<script>

  import SitesDataView from '../components/Data/SitesDataView'

  export default {
    name: 'Sites',

    components: {SitesDataView},
  }
</script>

<style scoped>

</style>
