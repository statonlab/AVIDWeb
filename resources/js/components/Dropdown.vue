<template>
    <div class="dropdown autocomplete">
        <button data-toggle="dropdown"
                data-boundary="window"
                :disabled="disabled"
                data-flip="false"
                ref="btn"
                @click="focus()"
                @keyup.down="focus()"
                class="font-weight-normal"
                :class="['btn', 'd-flex', btnClass, {'btn-placeholder-effect': value === null, 'btn-select-active': value !== null, 'border-danger': error}]">
            <span class="text-case-normal">
                {{ selected }}
            </span>
            <inline-spinner v-if="loading" class="ml-auto text-primary"/>
            <icon name="caret-down" class="ml-auto btn-dropdown-icon" v-else/>
        </button>
        <div class="dropdown-menu w-100" ref="menu" :style="`max-width: ${maxWidth}px;`">
            <div class="pb-2 px-3" v-if="autocomplete">
                <input type="search"
                       class="form-control form-control-sm"
                       placeholder="Search..."
                       ref="search"
                       title="Search"
                       @keyup="$emit('search', $event.target.value)"
                       @keydown.down="down()"
                       @keydown.enter="options.length > 0 && select(options[0], 0)">
            </div>
            <slot name="header"/>
            <a href="#"
               @keydown.up="up(index)"
               v-for="(option, index) in options"
               :class="['dropdown-item', {'active': option.value === value}]"
               @click.prevent="select(option, index)">
                {{ option.label }}
            </a>
            <slot/>
            <p v-if="options.length < total"
               class="text-muted text-center p-2 mb-0">
                {{ `Showing ${options.length} of ${total}. Please search to see more` }}
            </p>
            <p v-if="options.length === 0 && emptyMessage.length"
               class="text-center text-muted p-2 mb-0">{{ emptyMessage }}</p>
            <p v-if="endMessage.length" class="text-center text-muted p-2 mb-0">
                <small>{{ endMessage }}</small>
            </p>
            <slot name="footer"/>
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
      error       : {required: false, type: Boolean, default: false},
      maxWidth    : {required: false, type: Number, default: 230},
      btnClass    : {required: false, type: String, default: 'btn-select'},
      total       : {required: false, type: Number, default: 0}
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

      value() {
        this.setIndex()
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

      down() {
        console.log(this.total)
        const first = $(this.$refs.menu).find('.dropdown-item').first()

        if (first.length) {
          first.focus()
        }
      },

      up(index) {
        if (this.autocomplete && index === 0) {
          this.focus()
        }
      },
    },
  }
</script>

<style scoped>

</style>
