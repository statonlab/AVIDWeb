<template>
    <div class="sidebar">
        <div class="my-3">
            <div class="nav nav-pills flex-column">
                <div class="nav-item" v-for="(item, key) in items" :key="key">
                    <router-link
                            @click.native="open(key, true)"
                            active-class="active"
                            :to="item.to"
                            class="nav-link pr-0"
                            v-if="typeof item.menu === 'undefined' && (typeof item.if === 'undefined' || item.if)"
                            :exact="!!item.exact">
                        <icon :name="item.icon"/>
                        <span class="my-auto">{{ item.label }}</span>
                    </router-link>
                    <div v-if="typeof item.menu !== 'undefined' && (typeof item.if === 'undefined' || item.if)"
                         class="sidebar-menu-container"
                         :class="{'is-open': isOpen(key)}">
                        <a href="#"
                           @click.prevent="open(key)"
                           class="nav-link sidebar-menu-header"
                           style="padding-right:0 !important;">
                            <icon :name="isOpen(key) ? item.icon.replace('-outlined', '') : item.icon"/>
                            <span class="my-auto">{{ item.label }}</span>
                            <icon name="caret-back" class="menu-caret ml-auto"/>
                        </a>
                        <transition name="slide">
                            <div class="sidebar-menu nav nav-pills flex-column" v-if="isOpen(key)">
                                <router-link
                                        v-for="(link, i) in item.menu"
                                        :key="i"
                                        @click.native="$emit('close')"
                                        active-class="active"
                                        :to="link.to"
                                        class="nav-link"
                                        v-if="typeof link.if === 'undefined' || link.if"
                                        :exact="!!link.exact">
                                    <span class="my-auto">{{ link.label }}</span>
                                </router-link>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from './Icon'
  import User from '../helpers/User'

  export default {
    name: 'Sidebar',

    components: {Icon},

    data() {
      return {
        opened: null,
        items : [
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
            icon: 'add-circle-outline',
            to: '/app/data-entry',
            label: 'Data Entry'
          },
          {
            icon: 'lock-closed-outline',
            to: '/app/data-quarantine',
            label: 'Data Quarantine'
          },
          {
            icon: 'bar-chart-outline',
            to: '/app/statistics',
            label: 'Statistics'
          },
          {
            icon : 'notifications-outline',
            label: 'My Reminders',
            menu : [
              {
                label: 'Manage Reminders',
                to   : '/app/reminders',
              },
              {
                label: 'Calendar',
                to   : '/app/calendar',
              },
            ],
          },
          {
            icon : 'people-outline',
            to   : '/app/groups',
            label: 'User Groups',
          },
          {
            icon : 'lock-closed-outline',
            label: 'Admin Menu',
            if   : User.can(['manage species', 'view users', 'manage permissions', 'view sites']),
            menu : [
              {
                to   : '/app/admin/sites',
                label: 'All Data',
                if   : User.can('view sites'),
              },
              {
                to   : '/app/admin/data-quarantine',
                label: 'Quarantined Data',
                if   : User.can('view sites'),
              },
              {
                to   : '/app/species',
                label: 'Manage Species',
                if   : User.can('manage species'),
              },
              {
                to   : '/app/events',
                label: 'Manage Events',
                if   : User.can('manage events'),
              },
              {
                to   : '/app/users',
                label: 'Manage Users',
                if   : User.can('view users'),
              },
              {
                to   : '/app/roles',
                label: 'Roles & Permissions',
                if   : User.can('manage permissions'),
              },
            ],
          },
          {
            icon : 'cog-outline',
            to   : '/app/profile',
            label: 'Settings',
          },
        ],
      }
    },

    beforeMount() {
      const path = this.$route.path
      this.items.map((item, key) => {
        if (typeof item.menu !== 'undefined') {
          const isOpen = item.menu.filter(item => {
            return path.includes(item.to)
          }).length > 0
          if (isOpen) {
            this.opened = key
          }
        }
      })
    },

    methods: {
      isOpen(key) {
        return this.opened === key
      },

      open(key, close) {
        this.opened = this.opened === key ? null : key

        if (close) {
          this.$emit('close')
        }
      },
    },
  }
</script>

<style scoped>

</style>
