<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Tab',

        props: {
            name    : {required: true, type: String},
            selected: {default: false, type: Boolean},
            icon    : {required: false, type: String, default: null},
        },

        watch: {
            isActive(isActive) {
                if (isActive) {
                    this.$emit('mount')
                }
            },
        },

        data() {
            return {
                isActive: false,
            }
        },

        mounted() {
            this.isActive = this.selected
        },

        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-').replace(/#/g, '')
            },
        },
    }
</script>
