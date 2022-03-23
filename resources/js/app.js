/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import ErrorPage from './components/ErrorPage'
import PageLoader from './components/PageLoader'
import VueNotification from 'vue-notification'
import Alert from './plugins/Alert/Alert'

Vue.use(Alert)
Vue.use(VueNotification)
Vue.use(VueRouter)

/**
 * Loads a component asynchronously.
 *
 * @param component
 * @return {{component: *, delay: number, loading: {components, name}, error: {name, mounted}, timeout: number}}
 * @constructor
 */
const AsyncComponent = (component) => ({
  // The component to load (should be a Promise)
  component,
  // A component to use while the async component is loading
  loading: PageLoader,
  // A component to use if the load fails
  error  : ErrorPage,
  // Delay before showing the loading component. Default: 200ms.
  delay  : 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
})

Vue.filter('plural', (value, singular, plural) => {
  if (value === 0 || value > 1) {
    return `${value} ${plural}`
  }

  return `${value} ${singular}`
})

const routes = [
  {
    path     : '/app',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/dashboard" */'./screens/Dashboard')),
  },
  {
    path     : '/app/sites',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/sites" */'./screens/Sites')),
  },
  {
    path     : '/app/sites/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/plots" */'./screens/Plots')),
  },
  {
    path     : '/app/groups/:group_id/sites/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/group_plots" */'./screens/GroupPlots')),
  },
  {
    path     : '/app/plants/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/measurements" */'./components/Measurements')),
  },
  {
    path     : '/app/groups/:group_id/plants/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/group_measurements" */'./components/GroupMeasurements')),
  },
  {
    path     : '/app/species',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/species" */'./screens/Species')),
  },
  {
    path     : '/app/profile',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/profile" */'./screens/Profile')),
  },
  {
    path     : '/app/users',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/users" */'./screens/Users')),
  },
  {
    path     : '/app/users/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/user" */'./screens/User')),
  },
  {
    path     : '/app/roles',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/roles" */'./screens/Roles')),
  },
  {
    path     : '/app/groups',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/groups" */'./screens/Groups')),
  },
  {
    path     : '/app/groups/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/group" */'./screens/Group')),
  },
  {
    path     : '/app/admin/sites',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/admin_sites" */'./screens/admin/AdminSites')),
  },
  {
    path     : '/app/admin/data-quarantine',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/admin_sites" */'./screens/admin/AdminQuarantine')),
  },
  {
    path     : '/app/admin/sites/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/admin_plots" */'./screens/admin/AdminPlots')),
  },
  {
    path     : '/app/admin/plants/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/admin_measurements" */'./screens/admin/AdminMeasurements')),
  },
  {
    path     : '/app/reminders',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/reminders" */'./screens/Reminders')),
  },
  {
    path     : '/app/calendar',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/calendar" */'./screens/CalendarView')),
  },
  {
    path     : '/app/events',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/events" */'./screens/Events')),
  },
  {
    path     : '/app/data-entry',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/data_entry" */'./screens/DataEntry')),
  },
  {
    path     : '/app/statistics',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/statistics" */'./screens/Statistics')),
  },
  {
    path     : '/app/reports',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/reports" */'./screens/Reports')),
  },
  {
    path     : '/app/maps',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/maps" */'./screens/Maps')),
  },
  {
    path     : '/app/incomplete-data',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/statistics" */'./screens/DataQuarantine')),
  },
  {
    path     : '/app/incomplete-data/:id',
    component: () => AsyncComponent(import (/* webpackChunkName: "js/statistics" */'./screens/SiteQuarantine')),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

/**
 * Hide tooltips before navigating to a new route.
 */
router.beforeEach((to, from, next) => {
  $('[data-original-title]').tooltip('hide')

  next()
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Add tooltips support using v-tooltip directive
Vue.directive('tooltip', function (el, binding) {
  const modifiers = Object.keys(binding.modifiers)
  let placement   = null

  if (modifiers.length > 0) {
    placement = modifiers[0]
  }

  if (modifiers) {
    const options = {
      title  : binding.value,
      ...(placement ? {placement} : {}),
      trigger: 'hover',
    }

    $(el).tooltip(options)
  }
})

Vue.config.ignoredElements = ['ion-icon']
new Vue({
  router,
  components: {App},
}).$mount('#app')
