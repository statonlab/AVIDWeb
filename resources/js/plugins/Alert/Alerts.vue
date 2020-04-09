<template>
    <transition name="fade">
        <div class="modal show" tabindex="-1" role="dialog" style="display: block" v-show="show">
            <div class="modal-backdrop bg-transparent-dark">
                <div :class="['modal-dialog', {'alert-max-width': type === 'alert'}]" role="document" ref="modal">
                    <simple-alert
                        v-if="type === 'alert'"
                        :title="title"
                        :text="text"
                        @ok="dismiss()"/>
                    <confirmation-alert
                        v-if="type === 'confirmation'"
                        :title="title"
                        :text="text"
                        @dismiss="dismiss()"
                        @confirm="confirm()"/>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import SimpleAlert from './SimpleAlert'
  import { events } from './events'
  import ConfirmationAlert from './ConfirmationAlert'

  export default {
    name: 'Alerts',

    components: {ConfirmationAlert, SimpleAlert},

    data() {
      return {
        show     : false,
        type     : 'alert',
        title    : null,
        text     : '',
        onDismiss: () => {
        },
        onConfirm: () => {
        },
      }
    },

    mounted() {
      events.$on('show', options => {
        this.type      = options.type || 'alert'
        this.text      = options.text || 'Alert'
        this.title     = options.title || null
        this.onConfirm = options.onConfirm || (() => {
        })
        this.onDismiss = options.onDismiss || (() => {
        })
        this.show      = true
      })
    },

    methods: {
      close() {
        this.show = false
      },

      confirm() {
        this.onConfirm()
        this.show = false
      },

      dismiss() {
        this.onDismiss()
        this.show = false
      },
    },
  }
</script>

<style scoped>
    .alert-max-width {
        max-width: 350px;
    }

    .bg-transparent-dark {
        background-color: rgba(0, 0, 0, .7);
    }
</style>
