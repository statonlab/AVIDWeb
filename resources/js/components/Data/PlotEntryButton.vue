<template>
    <div>
        <div class="dropdown">
            <a href="#" data-toggle="dropdown" class="d-flex align-items-center justify-content-between w-100 flex-nowrap no-wrap">
                <span>Plot #{{plot.number}}</span>
                <icon name="caret-down"/>
            </a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item pl-2 d-flex align-items-center" @click.prevent="$emit('addPlant')">
                    <icon name="add"/>
                    <span>New Plant</span>
                </a>
                <a href="#" class="dropdown-item pl-2 d-flex align-items-center">
                    <icon name="eye"/>
                    <span>View Plot</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../Icon'
  export default {
    name: 'PlotEntryButton',
    components: {Icon},
    props: {plot: {required: true}},
  }
</script>

<style scoped>

</style>
