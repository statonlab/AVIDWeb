<template>
    <inline-spinner/>
</template>

<script>
  import Modal from './Modal/Modal'
  import ModalCard from './Modal/ModalCard'
  import InlineSpinner from './InlineSpinner'
  export default {
    name: 'PageLoader',
    components: {InlineSpinner, ModalCard, Modal},
  }
</script>

<style scoped>

</style>
