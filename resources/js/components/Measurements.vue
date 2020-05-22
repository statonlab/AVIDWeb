<template>
    <div>
        <h1 class="page-title mb-3">Measurements</h1>

        <measurements-data-view/>
    </div>
</template>

<script>

  import MeasurementsDataView from '../components/Data/MeasurementsDataView'

  export default {
    name: 'Measurements',

    components: {MeasurementsDataView},
  }
</script>

<style scoped>

</style>
