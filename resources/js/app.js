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
import VueNotification from 'vue-notification'
import Profile from './screens/Profile'
import Alert from './plugins/Alert/Alert'
import Species from './screens/Species'
import Users from './screens/Users'
import Plants from './screens/Plants'

Vue.use(Alert)
Vue.use(VueNotification)
Vue.use(VueRouter)

const routes = [
    {path: '/app', component: Dashboard},
    {path: '/app/sites', component: Sites},
    {path: '/app/sites/:id', component: Plots},
    {path: '/app/plots/:id', component: Plants},
    {path: '/app/species', component: Species},
    {path: '/app/profile', component: Profile},
    {path: '/app/users', component: Users}
]

const router = new VueRouter({
    routes,
    mode: 'history',
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
        $(el).tooltip({
            title  : binding.value,
            ...(placement ? {placement} : null),
            trigger: 'hover',
        })
    }
})

Vue.config.ignoredElements = ['ion-icon']
new Vue({
    router,
    components: {App},
}).$mount('#app')
