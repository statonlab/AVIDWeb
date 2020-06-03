<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card mb-3 p-2">
                    <reminders-calendar/>
                </div>
            </div>
            <div class="col-lg-6">
                <statistics-card class="mb-3"/>
            </div>
            <div class="col-lg-6">
                <dashboard-sites-card class="mb-3"/>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import StatisticsCard from '../components/StatisticsCard'
  import DashboardSitesCard from '../components/DashboardSitesCard'
  import RemindersCalendar from '../components/RemindersCalendar'

  export default {
    name: 'Dashboard',

    components: {RemindersCalendar, Icon, DashboardSitesCard, StatisticsCard},
  }
</script>

<style scoped>

</style>
