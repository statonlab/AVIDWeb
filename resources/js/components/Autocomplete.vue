<template>
    <div class="dropdown autocomplete">
        <input type="text"
               name="search"
               :class="['form-control', {'disabled': disabled}]"
               :placehoder="placeholder"
               v-model="search"
               aria-haspopup="true"
               aria-expanded="false"
               :disabled="disabled"
               data-flip="false"
               aria-autocomplete="none"
               :autocomplete="autocomplete"
               data-toggle="dropdown">
        <div :class="['dropdown-menu', 'w-100', {'dropdown-menu-right': right}]">
            <a href="#"
               v-for="option in options"
               :class="['dropdown-item', {'active': option.value === value}]"
               @click.prevent="select(option)">
                {{ option.label }}
            </a>
            <p v-if="options.length === 0 && emptyMessage.length"
               class="text-center text-muted p-2 mb-0">{{ emptyMessage }}</p>
            <p v-if="endMessage.length" class="text-center text-muted p-2 mb-0">
                <small>{{ endMessage }}</small>
            </p>
        </div>
    </div>
</template>

<script>
  import EditableContent from './EditableContent'

  export default {
    name: 'Autocomplete',

    components: {EditableContent},

    props: {
      right       : {required: false, default: false, type: Boolean},
      value       : {required: false},
      options     : {required: true, type: Array},
      searchValue : {required: true, type: String},
      emptyMessage: {required: false, type: String, default: 'No results found. Try adjusting your search terms.'},
      endMessage  : {required: false, type: String, default: ''},
      placeholder : {required: false, type: String, default: 'Search'},
      disabled    : {required: false, type: Boolean, default: false},
    },

    data() {
      return {
        autocomplete: Math.random() % 1000000,
        search: ''
      }
    },

    mounted() {
      this.search = this.searchValue
    },

    watch: {
      search(search) {
        this.$emit('search', search)
      }
    },

    methods: {
      select(option) {
        this.$emit('input', option)
        this.search = option.search || option.label
      },

      clear() {
        this.search = ''
        this.$emit('input', null)
      }
    },
  }
</script>

<style scoped>

</style>
