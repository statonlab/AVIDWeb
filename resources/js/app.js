/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard'
import App from './components/App'

Vue.use(VueRouter)

const routes = [
    {path: '/data', component: Dashboard},
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

const app = new Vue({
    router,
    components: {App},
}).$mount('#app')
