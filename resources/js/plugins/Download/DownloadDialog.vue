<template>
  <transition name="fade">
    <div class="bg-white shadow rounded dialog border"
         tabindex="-1"
         role="dialog"
         style="display: block; z-index: 99999999"
         v-if="file">
      <div v-if="file.progress < 100" class="d-flex p-3">
        <div class="flex-grow-1">
          <div><strong>Creating File</strong></div>
          <div><small class="text-muted">This operation may take a few minutes</small></div>
        </div>
        <div class="flex-shrink-0">
          <button class="d-flex bg-lighter text-dark rounded-circle border-0 hover:bg-light align-items-center justify-content-center"
                  style="height: 28px; width: 28px;"
                  @click.prevent="close">
            <ion-icon name="close"/>
          </button>
        </div>
      </div>
      <div v-else class="d-flex p-3">
        <div class="flex-grow-1">
          <div><strong>Download File</strong></div>
          <div><small class="text-muted">Download should start automatically</small></div>
        </div>
        <div class="flex-shrink-0">
          <button class="d-flex bg-lighter text-dark rounded-circle border-0 hover:bg-light align-items-center justify-content-center"
                  style="height: 28px; width: 28px;"
                  @click.prevent="close">
            <ion-icon name="close"/>
          </button>
        </div>
      </div>
      <div class="p-3 border-top border-bottom">
        <div class="d-flex">
          <div class="flex-grow-1">{{ file.name }}</div>
          <div class="flex-shrink-0" v-if="file.progress < 100">
            <inline-spinner class="text-primary"/>
          </div>
          <div v-else-if="file.progress >= 100 && file.error" class="text-danger">
            Error
          </div>
        </div>
        <div v-if="file.error" class="text-danger text-small">
          An error occurred while creating the file. Please contact us to resolve this issue.
        </div>
      </div>
      <div class="d-flex justify-content-end py-2 px-3 bg-lighter">
        <a class="btn btn-link"
           @click="downloadClicked"
           :href="url"
           ref="downloadLink"
           :class="{'disabled': file.progress < 100 && !file.error}">
          Download
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
import { events } from '../Alert/events'
import InlineSpinner from '../../components/InlineSpinner.vue'

export default {
  name      : 'Alerts',
  components: {InlineSpinner},

  _interval: null,

  data() {
    return {
      file: null,
    }
  },

  mounted() {
    events.$on('downloadDialog.show', ({file}) => {
      this.file = file

      setTimeout(() => this.setUpPolling(), 100)
    })
  },

  computed: {
    url() {
      return this.file.url || `/web/pending-files/${this.file.id}/download`
    },
  },

  methods: {
    close() {
      this.file = null
    },

    downloadClicked(e) {
      if (this.file.progress < 100) {
        e.preventDefault()
      }
    },

    setUpPolling() {
      if (this.$options._interval) {
        clearInterval(this.$options._interval)
      }

      this.$options._interval = setInterval(() => this.loadFile(), 500)
    },

    async loadFile() {
      try {
        const {data} = await axios.get(`/web/pending-files/${this.file.id}`)
        this.file    = data
        if (this.file.progress >= 100) {
          clearInterval(this.$options._interval)

          this.$nextTick(() => {
            if (!this.file.error) {
              setTimeout(() => this.$refs.downloadLink.click(), 100)
            }
          })
        }
      } catch (e) {
        clearInterval(this.$options._interval)

        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.dialog {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 400px;
  max-width: 90%;
}

.hover\:bg-light:hover {
  background-color: #dddddd;
}
</style>
