<template>
    <div>
        <h1 class="page-title mb-3">Plants</h1>

        <plants-data-view/>
    </div>
</template>

<script>

  import PlantsDataView from '../components/Data/PlantsDataView'

  export default {
    name: 'Plants',

    components: {PlantsDataView},
  }
</script>

<style scoped>

</style>
