<template>
    <div>
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
</template>

<script>
  import Icon from '../components/Icon'

  export default {
    name      : 'Dashboard',
    components: {Icon},
  }
</script>

<style scoped>

</style>
