<template>
    <div class="sidebar">
        <div class="sidebar-menu my-4">
            <div class="nav nav-pills flex-column">
                <router-link
                    active-class="active"
                    v-for="(item, key) in items"
                    :to="item.to"
                    class="nav-link"
                    :key="key"
                    :exact="!!item.exact">
                    <icon :name="item.icon"/>
                    <span class="my-auto">{{ item.label }}</span>
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
            icon : 'home',
            to   : '/data',
            exact: true,
            label: 'Dashboard',
          },
          {
            icon : 'ios-archive',
            to   : '/data/data',
            label: 'My Data',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
