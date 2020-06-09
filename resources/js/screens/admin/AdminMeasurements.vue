<template>
    <div>
        <measurements-data-view
                :back-url-prefix="`/app/admin/plots`" />
    </div>
</template>

<script>

  import MeasurementsDataView from '../../components/Data/MeasurementsDataView'

  export default {
    name: 'AdminMeasurements',

    components: {MeasurementsDataView},
  }
</script>

<style scoped>

</style>
