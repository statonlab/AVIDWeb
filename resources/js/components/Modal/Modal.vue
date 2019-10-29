<template>
    <transition name="fade">
        <div class="modal show vh-100 d-block bg-transparent-dark" tabindex="-1" role="dialog">
            <div :class="['modal-dialog', {'modal-lg': large, 'modal-md': medium}]" role="document" ref="modal">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Modal',

    props: {
      large : {type: Boolean, required: false, default: false},
      medium: {type: Boolean, required: false, default: false},
    },

    data() {
      return {
        mounted: false,
      }
    },

    mounted() {
      document.addEventListener('click', this.outClick)
      setTimeout(() => this.mounted = true, 50)
    },

    destroyed() {
      this.mounted = false
      document.removeEventListener('click', this.outClick)
    },

    methods: {
      outClick(e) {
        if (!this.mounted) {
          return
        }

        if (this.$refs.modal === e.target || this.$refs.modal.contains(e.target)) {
          e.stopPropagation()
          return
        }

        this.$emit('close')
      },
    },
  }
</script>

<style scoped>
    .max-vh {
        max-height: 93vh;
    }

    .bg-transparent-dark {
        background-color: rgba(0, 0, 0, .7);
    }
</style>
