<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <dashboard-sites-card />
            </div>
            <div class="col-lg-6">
                <statistics-card class="mb-4" />
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import StatisticsCard from '../components/StatisticsCard'
  import DashboardSitesCard from '../components/DashboardSitesCard'

  export default {
    name      : 'Dashboard',

    components: {Icon, DashboardSitesCard, StatisticsCard},
  }
</script>

<style scoped>

</style>
