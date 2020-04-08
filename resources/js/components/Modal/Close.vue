<template>
    <button type="button"
            class="btn btn-close btn-sm ml-auto text-muted position-absolute close"
            @click="$emit('click', $event)">
        <icon name="close"/>
    </button>
</template>

<script>
  import Icon from '../Icon'
  export default {
    name: 'Close',
    components: {Icon},
  }
</script>

<style scoped>
.close {
    right: 20px;
    top: 50%;
    margin-top: -25px;
}
</style>
