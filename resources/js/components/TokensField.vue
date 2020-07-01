<template>
    <div>
        <div class="form-group">
            <Select2 :id="`${id}_select`"
                     :options="options"
                     v-model="selects"
                     :placeholder="placeholder"
                     :disabled="disabled"
                     :settings="{ multiple: 'true', tags: 'true', theme: 'bootstrap4' }"
                     @change="onChange($event)" />
        </div>
    </div>
</template>

<script>
  import Select2 from 'v-select2-component'

  export default {
    name: 'TokensField',

    props: {
      options: {required: true, type: Array},
      id: {required: false, type: String},
      value: {required: false, type: Array},
      disabled: {required: false, type: Boolean, default: false},
      placeholder: {required: false, type: String, default: 'Search...'}
    },

    components: {Select2},

    data() {
      return {
        selects : [],
      }
    },

    watch: {
      value() {
        this.selects = this.value
      }
    },

    methods: {
      onChange(e) {
        this.$emit('input', e)
      },
    },
  }
</script>

<style scoped>
    .height-auto {
        height: auto !important;
    }
</style>
