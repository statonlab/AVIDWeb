<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <dashboard-sites-card />
            </div>
            <div class="col-lg-6">
                <div class="card mb-3">
                    <div class="card-body d-flex align-items-center justify-content-center flex-column">
                        <p class="font-weight-bold">Welcome to AVID!</p>
                        <p>This page is under construction but you can visit "My Data" to manage your data.</p>
                        <router-link class="btn btn-outline-primary" to="/app/sites">
                            <icon name="file-tray-full"/>
                            <span>My Data</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import DashboardSitesCard from '../components/DashboardSitesCard'

  export default {
    name      : 'Dashboard',

    components: {Icon, DashboardSitesCard},
  }
</script>

<style scoped>

</style>
