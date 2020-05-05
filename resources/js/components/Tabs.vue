<template>
    <div>
        <div class="nav nav-custom-tabs align-items-center">
            <a :class="['nav-link',{'active': tab.isActive}]"
               v-for="tab in tabs"
               :href="tab.href"
               @click="selectTab($event, tab)">
                <icon v-if="tab.icon" :name="tab.icon"/>
                <span>{{ tab.name }}</span>
            </a>

            <slot name="right"></slot>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    import Icon from './Icon'

    export default {
        name: 'Tabs',

        components: {Icon},

        props: {
            history: {
                required: false,
                type    : Boolean,
                default : true,
            },
        },

        data() {
            return {
                tabs: [],
            }
        },

        mounted() {
            this.tabs = this.$children.filter(child => {
                return child.$options._componentTag === 'tab'
            }).map(child => {
                return child
            })

            if (this.history) {
                this.tabs.forEach(tab => {
                    if (this.$route.hash === tab.href) {
                        this.selectTab(tab)
                    }
                })
            }
        },

        methods: {
            selectTab(e, selectedTab) {
                if (e && !this.history) {
                    e.preventDefault()
                }

                this.tabs.forEach(tab => {
                    if (!tab || !selectedTab) {
                        return
                    }
                    tab.isActive = tab.name === selectedTab.name
                })
            },
        },
    }
</script>
