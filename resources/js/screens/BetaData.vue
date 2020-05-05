<template>
<div>
    <sites-data-view
        site-url-prefix="/app/beta/sites"
    />
</div>
</template>

<script>
  import SitesDataView from '../components/Data/SitesDataView'
  export default {
    name: 'BetaData',

    components: {SitesDataView},
  }
</script>

<style scoped>

</style>
