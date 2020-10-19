<template>
  <div>
    <div class="form-group">
      <Select2 :id="`${id}_select`"
               v-model="selects"
               :placeholder="placeholder"
               :options="selections ? defaults : options"
               :disabled="disabled"
               :settings="settings"
               @change="onChange($event)">
      </Select2>
    </div>
  </div>
</template>

<script>
import Select2 from 'v-select2-component'

export default {
  name: 'TokensField',

  props: {
    selections: {required: false, type: Array},
    url: {required: false, type: String},
    id: {required: false, type: String},
    options: {required: false, type: Array},
    value: {required: false, type: Array},
    tags: {required: false, type: Boolean, default: false},
    disabled: {required: false, type: Boolean, default: false},
    placeholder: {required: false, type: String, default: 'Search...'},
  },

  components: {Select2},

  mounted() {
    if (this.selections) {
      this.defaults = this.selections.map(({id, name}) => ({id, text: name}))
      this.selects = this.selections.map(({id}) => (id))
    }
  },

  data() {
    return {
      defaults : [],
      selects : [],
    }
  },

  computed: {
    ajax() {
      if (! this.url) {
        return null
      }
      return {
        url: this.url,
        data(params) {
          return {
            search: params.term,
            page: params.page || 1,
            selections: this.selections ? this.selections.map(({id}) => id) : null,
          }
        },
        processResults(data, params) {
          params.page = params.page || 1;

          return {
            results: data.data.map(({id, name}) => ({id, text: name})),
            pagination: {
              more: data.current_page < data.last_page
            }
          };
        }
      }
    },

    settings() {
      return {
        multiple: 'true',
        tags: this.tags,
        theme: 'bootstrap4',
        ajax: this.url ? this.ajax : null,
      }
    },
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
