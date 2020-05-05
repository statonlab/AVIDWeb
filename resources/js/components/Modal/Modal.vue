<template>
    <transition name="fade">
        <div class="modal show vh-100 d-block" tabindex="-1" role="dialog">
            <button class="modal-backdrop border-0 bg-transparent-dark cursor-default" type="button" @click.prevent="$emit('close')"></button>
            <div class="modal-dialog"
                 style="z-index: 1060"
                 :class="{'modal-lg': large, 'modal-md': medium}"
                 role="document"
                 ref="modal">
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
