<template>
    <div>
        <div class="form-group">
            <Select2 :id="`${id}_select`"
                     v-model="selects"
                     :options="options"
                     :placeholder="placeholder"
                     :disabled="disabled"
                     :settings="settings"
                     @change="onChange($event)" />
        </div>
    </div>
</template>

<script>
  import Select2 from 'v-select2-component'

  export default {
    name: 'TokensField',

    props: {
      url: {required: false, type: String},
      options: {required: false, type: Array},
      id: {required: false, type: String},
      value: {required: false, type: Array},
      tags: {required: false, type: Boolean, default: false},
      disabled: {required: false, type: Boolean, default: false},
      placeholder: {required: false, type: String, default: 'Search...'},
    },

    components: {Select2},

    data() {
      return {
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
              page: params.page || 1
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
        const settings = {
          multiple: 'true',
          tags: this.tags,
          theme: 'bootstrap4',
          ajax: this.url ? this.ajax : null,
        }

        return settings
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
