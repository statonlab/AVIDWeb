<template>
    <div>
        <div class="card-header d-flex align-items-center">
            <div class="flex-grow-1">
                <input type="search" class="form-control" placeholder="Search plants...">
            </div>
            <div class="flex-shrink-0 text-muted">
                <button class="btn btn-primary">
                    <icon name="add"/>
                    <span>Plant</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'BetaPlantsView',
    components: {Icon},
    props: {
      plot: {required: true}
    }
  }
</script>

<style scoped>

</style>
