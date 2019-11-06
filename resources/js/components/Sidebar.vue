<template>
    <div class="sidebar">
        <div class="sidebar-menu my-4">
            <div class="nav nav-pills flex-column">
                <router-link
                    active-class="active"
                    v-for="(item, key) in items"
                    :to="item.to"
                    class="nav-link pr-0"
                    :key="key"
                    :exact="!!item.exact">
                    <icon :name="item.icon"/>
                    <span class="my-auto">{{ item.label }}</span>
                    <icon class="right-arrow ml-auto mr-0" name="ios-arrow-forward"/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from './Icon'

  export default {
    name      : 'Sidebar',
    components: {Icon},

    data() {
      return {
        items: [
          {
            icon : 'ios-analytics',
            to   : '/app',
            exact: true,
            label: 'Dashboard',
          },
          {
            icon : 'ios-archive',
            to   : '/app/sites',
            label: 'My Data',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
