<template>
    <div>
        <plots-data-view
                :back="`/app/admin/sites`"
                :site-url-prefix="`/app/admin/plots`"/>
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
