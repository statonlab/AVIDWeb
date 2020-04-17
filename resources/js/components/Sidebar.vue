<template>
    <div class="sidebar">
        <div class="sidebar-menu my-4">
            <div class="nav nav-pills flex-column">
                <router-link
                        @click.native="$emit('close')"
                        active-class="active"
                        v-for="(item, key) in items"
                        :to="item.to"
                        class="nav-link pr-0"
                        :key="key"
                        v-if="typeof item.if === 'undefined' || item.if"
                        :exact="!!item.exact">
                    <icon :name="item.icon"/>
                    <span class="my-auto">{{ item.label }}</span>
                    <icon class="right-arrow ml-auto mr-0" name="arrow-forward"/>
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
            icon : 'analytics-outline',
            to   : '/app',
            exact: true,
            label: 'Dashboard',
          },
          {
            icon : 'file-tray-full-outline',
            to   : '/app/sites',
            label: 'My Data',
          },
          {
            icon : 'rose-outline',
            to   : '/app/species',
            label: 'Species',
          },
          {
            icon : 'people-outline',
            to   : '/app/users',
            label: 'Users',
          },
          {
            icon: 'lock-closed-outline',
            to: '/app/roles',
            label: 'Roles & Permissions',
          },
          {
            icon : 'cog-outline',
            to   : '/app/profile',
            label: 'Settings',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
