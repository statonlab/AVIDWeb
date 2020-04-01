<template>
    <ion-icon class="icon" :name="name"></ion-icon>
</template>

<script>
  export default {
    name: 'Icon',

    props: {
      name: {required: true},
    },
  }
</script>
