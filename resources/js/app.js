/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './screens/Dashboard'
import Sites from './screens/Sites'
import App from './components/App'
import Plots from './screens/Plots'
import GroupPlots from './screens/GroupPlots'
import VueNotification from 'vue-notification'
import Profile from './screens/Profile'
import Alert from './plugins/Alert/Alert'
import Species from './screens/Species'
import Users from './screens/Users'
import User from './screens/User'
import Plants from './screens/Plants'
import GroupPlants from './screens/GroupPlants'
import Measurements from './components/Measurements'
import GroupMeasurements from './components/GroupMeasurements'
import Roles from './screens/Roles'
import Groups from './screens/Groups'
import Group from './screens/Group'
import AdminSites from './screens/admin/AdminSites'
import Reminders from './screens/Reminders'
import Events from './screens/Events'
import BetaData from './screens/BetaData'
import BetaSite from './screens/BetaSite'
import DataEntry from './screens/DataEntry'
import CalendarView from './screens/CalendarView'

Vue.use(Alert)
Vue.use(VueNotification)
Vue.use(VueRouter)

Vue.filter('plural', (value, singular, plural) => {
  if (value === 0 || value > 1) {
    return `${value} ${plural}`
  }

  return `${value} ${singular}`
})

const routes = [
  {path: '/app', component: Dashboard},
  {path: '/app/sites', component: Sites},
  {path: '/app/sites/:id', component: Plots},
  {path: '/app/groups/:group_id/sites/:id', component: GroupPlots},
  {path: '/app/plots/:id', component: Plants},
  {path: '/app/groups/:group_id/plots/:id', component: GroupPlants},
  {path: '/app/plants/:id', component: Measurements},
  {path: '/app/groups/:group_id/plants/:id', component: GroupMeasurements},
  {path: '/app/species', component: Species},
  {path: '/app/profile', component: Profile},
  {path: '/app/users', component: Users},
  {path: '/app/users/:id', component: User},
  {path: '/app/roles', component: Roles},
  {path: '/app/groups', component: Groups},
  {path: '/app/groups/:id', component: Group},
  {path: '/app/admin/sites', component: AdminSites},
  {path: '/app/reminders', component: Reminders},
  {path: '/app/calendar', component: CalendarView},
  {path: '/app/beta/sites', component: BetaData},
  {path: '/app/beta/sites/:id', component: BetaSite},
  {path: '/app/events', component: Events},
  {path: '/app/data-entry', component: DataEntry},
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
