<template>
    <div>
        <div :class="['main-container', '', {'sidebar-closed': !showSidebar}]">
            <!-- Navbar -->
            <navbar @toggle="toggleSidebar" ref="navbar"/>
            <!-- sidebar -->
            <sidebar ref="sidebar" @close="smClose"/>
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

        <notifications class="notifications"/>
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

    mounted() {
      const outClick = (e) => {
        if (this.showSidebar || !e) {
          return
        }

        if (this.$refs.sidebar.$el.contains(e.target)) {
          return
        }

        if (this.$refs.navbar.$el.contains(e.target)) {
          return
        }

        e.preventDefault()

        this.toggleSidebar()
      }

      document.addEventListener('click', outClick)
      this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('click', outClick)
      })
    },

    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      },

      smClose() {
        if (window.outerWidth < 780) {
          this.toggleSidebar()
        }
      },
    },
  }
</script>

<style scoped>

</style>
