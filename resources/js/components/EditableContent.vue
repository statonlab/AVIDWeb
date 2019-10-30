<template>
    <div :class="['form-control', 'editable', {'editable-focused': focused}]"
         ref="content"
         contenteditable="true"
         @keydown.enter="preventNewline($event)"
         @focus="focused = true"
         @blur="blur()"
         @input="change($event)">
        <span ref="input"></span>
        <required v-if="!focused && required"/>
    </div>
</template>

<script>
  import Required from './Required'

  export default {
    name: 'EditableContent',

    components: {Required},

    props: {
      value       : {type: String},
      required    : {type: Boolean},
      allowNewline: {type: Boolean, default: true},
      bordered    : {type: Boolean, default: true},
    },

    mounted() {
      this.$refs.input.innerText = this.value
    },

    watch: {
      value() {
        if (!this.focused) {
          this.$refs.input.innerText = this.value
        }
      },
    },

    data() {
      return {
        focused: false,
      }
    },

    methods: {
      change(e) {
        this.$emit('input', e.target.innerText)
      },

      blur() {
        this.focused = false
        this.$emit('blur')
      },

      preventNewline(e) {
        if (this.allowNewline) {
          return true
        }

        if (e && e.preventDefault) {
          e.preventDefault()
          this.$refs.content.blur()
          return false
        }
      },

      focus() {
        this.$refs.content.focus()
        this.$refs.content.select()
      },
    },
  }
</script>

<style scoped lang="scss">
    @import "../../sass/variables";

    .editable {
        &:focus {
            outline: none;
        }

        &.editable-focused {
            border-bottom-color: $primary !important;
        }
    }
</style>
