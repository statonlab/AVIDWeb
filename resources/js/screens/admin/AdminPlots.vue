<template>
    <div>
        <plots-data-view :site-url-prefix="`/app/admin/plants`"/>
    </div>
</template>

<script>
  import PlotsDataView from '../../components/Data/PlotsDataView'

  export default {
    name: 'AdminPlots',

    components: {PlotsDataView},
  }
</script>

<style scoped>

</style>
