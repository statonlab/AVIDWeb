<template>
    <div class="dropdown autocomplete">
        <button data-toggle="dropdown"
                :disabled="disabled"
                data-flip="false"
                ref="btn"
                @click="focus()"
                @keyup.enter="focus()"
                @keyup.down="focus()"
                :class="['btn', 'btn-select', 'd-flex', {'btn-placeholder-effect': value === null}]">
            <span class="text-case-normal">
                {{ selected }}
            </span>
            <inline-spinner v-if="loading" class="ml-auto text-primary"/>
            <icon name="ios-arrow-down" class="ml-auto" v-else/>
        </button>
        <div class="dropdown-menu w-100">
            <div class="pb-2 px-3" v-if="autocomplete">
                <input type="search"
                       class="form-control form-control-sm"
                       placeholder="Search..."
                       ref="search"
                       @keyup="$emit('search', $event.target.value)"
                       @keydown.enter="options.length > 0 && select(options[0], 0)">
            </div>
            <a href="#"
               v-for="(option, index) in options"
               :class="['dropdown-item', {'active': option.value === value}]"
               @click.prevent="select(option, index)">
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
  import Icon from './Icon'
  import InlineSpinner from './InlineSpinner'

  export default {
    name: 'Dropdown',

    components: {InlineSpinner, Icon},

    props: {
      options     : {required: true, type: Array},
      value       : {required: false, default: null},
      placeholder : {required: false, type: String, default: 'Select'},
      emptyMessage: {required: false, type: String, default: 'No results found. Try adjusting your search terms.'},
      endMessage  : {required: false, type: String, default: ''},
      disabled    : {required: false, type: Boolean, default: false},
      autocomplete: {required: false, type: Boolean, default: false},
      loading     : {required: false, type: Boolean, default: false},
    },

    data() {
      return {
        index: null,
      }
    },

    computed: {
      selected() {
        if (this.index === null || this.options.length === 0) {
          return this.placeholder
        }

        return this.options[this.index] ? this.options[this.index].label : this.placeholder
      },
    },

    mounted() {
      this.setIndex()
    },

    watch: {
      options: {
        handler() {
          this.setIndex()
        },
        deep: true,
      },
    },

    methods: {
      setIndex() {
        if (this.value !== null) {
          const options = this.options
          for (let i = 0; i < options.length; i++) {
            if (this.value === options[i].value) {
              this.index = i
              return
            }
          }
        }
      },

      select(option, index) {
        this.$emit('input', option.value)
        this.index = index
      },

      focus() {
        if (this.autocomplete) {
          setTimeout(() => {
            this.$refs.search.focus()
            this.$refs.search.select()
          }, 100)
        }
      },

      clear() {
        this.$emit('input', null)
        this.index = null
      },
    },
  }
</script>

<style scoped>

</style>
