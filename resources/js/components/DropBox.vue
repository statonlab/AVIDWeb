<template>
    <div :class="{'dropbox' : styled, 'rounded': styled, 'dropbox-over':styled && counter > 0, 'dropbox-clear': clear && styled}"
         @dragenter.prevent.stop="counter++"
         @dragleave.prevent.stop="counter--"
         @drop.prevent.stop="dropped($event)"
         @dragover.prevent
         @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'DropBox',

    props: {
      clear : {required: false, default: false, type: Boolean},
      styled: {required: false, default: true, type: Boolean},
    },

    data() {
      return {
        counter: 0,
      }
    },

    methods: {
      dropped(e) {
        this.$emit('add', e.dataTransfer.files)
        this.counter = 0
      },
    },
  }
</script>

<style scoped>

</style>
