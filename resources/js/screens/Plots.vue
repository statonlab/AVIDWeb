<template>
    <div>
        <h1 class="page-title mb-3">Plots</h1>

        <plots-data-view/>
    </div>
</template>

<script>

  import PlotsDataView from '../components/Data/PlotsDataView'

  export default {
    name: 'Plots',

    components: {PlotsDataView},
  }
</script>

<style scoped>

</style>
