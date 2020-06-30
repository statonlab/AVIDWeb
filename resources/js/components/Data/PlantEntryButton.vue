<template>
    <div>
        <div class="dropdown">
            <a href="#"
               tabindex="-1"
               data-toggle="dropdown"
               class="d-flex align-items-center justify-content-between w-100 flex-nowrap no-wrap">
                <span>Plant #{{plant.tag}}</span>
                <icon name="caret-down"/>
            </a>
            <div class="dropdown-menu">
                <router-link :to="`/app/plants/${plant.id}`" class="dropdown-item pl-2 d-flex align-items-center">
                    <icon name="eye"/>
                    <span>View Plant</span>
                </router-link>
                <a href="#" class="dropdown-item pl-2 d-flex align-items-center" @click.prevent="$emit('editPlant')">
                    <icon name="create"/>
                    <span>Edit Plant</span>
                </a>
                <a href="#" class="dropdown-item pl-2 d-flex align-items-center" @click.prevent="$emit('deletePlant')">
                    <icon name="trash"/>
                    <span>Delete Plant</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../Icon'

  export default {
    name      : 'PlantEntryButton',
    components: {Icon},
    props     : {plant: {required: true}},
  }
</script>

<style scoped>

</style>
