import { events } from './events'
import Alerts from './Alerts'

export default {
    install(Vue, options) {
        Vue.component('Alerts', Alerts)

        Vue.prototype.$alert = o => {
            events.$emit('show', {
                type: 'alert',
                ...(typeof o === 'object' ? o : {text: o, title: 'Alert'}),
            })
        }

        Vue.prototype.$confirm = o => {
            events.$emit('show', {
                type: 'confirmation',
                ...(typeof o === 'object' ? o : {}),
            })
        }
    },
}
