<template>
    <div>
        <plants-data-view
                :back-url-prefix="`/app/admin/sites`"
                :site-url-prefix="`/app/admin/plants`"/>
    </div>
</template>

<script>
  import PlantsDataView from '../../components/Data/PlantsDataView'

  export default {
    name: 'AdminPlants',

    components: {PlantsDataView},
  }
</script>

<style scoped>

</style>
