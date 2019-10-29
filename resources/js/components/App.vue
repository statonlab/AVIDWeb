<template>
    <div>
        <div :class="['main-container', '', {'sidebar-closed': !showSidebar}]">
            <!-- Navbar -->
            <navbar @toggle="toggleSidebar()"/>
            <!-- sidebar -->
            <sidebar/>
            <div class="main-content">
                <!-- main content -->
                <div class="py-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  export default {
    name: 'App',

    components: {Sidebar, Navbar},

    data() {
      return {
        showSidebar: true,
      }
    },

    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      },
    },
  }
</script>

<style scoped>

</style>
