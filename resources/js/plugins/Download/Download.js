import { events } from '../Alert/events'
import DownloadDialog from './DownloadDialog'

export default {
  install(Vue, options) {
    Vue.component('DownloadDialog', DownloadDialog)

    async function download(url, filters = null, method = 'post') {
      try {
        const {data} = await axios[method](url, {filters})
        events.$emit('downloadDialog.show', {
          file: data,
        })

        return {
          show() {
            events.$emit('downloadDialog.show', {
              file: data,
            })
          },

          hide() {
            events.$emit('downloadDialog.hide', {
              file: data,
            })
          },
        }
      } catch (e) {
        throw e
      }
    }

    Vue.prototype.$download = download
  },
}
