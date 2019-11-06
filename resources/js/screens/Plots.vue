<template>
    <div>
        <div class="card mb-3">
            <div class="card-body">
                <inline-spinner class="text-primary"/>
            </div>
        </div>
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'
  export default {
    name: 'Plots',

    components: {InlineSpinner},
  }
</script>

<style scoped>

</style>
