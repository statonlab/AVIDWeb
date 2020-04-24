<template>
    <div>
        <div>
            <h1 class="page-title mb-0">User Groups</h1>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Groups',

    data() {
      return {
        groups: [],
      }
    },

    mounted() {
      this.loadGroups()
    },

    methods: {
      async loadGroups() {
        try {
          const {data} = await axios.get('/web/groups')
        } catch (e) {
          console.error(e)
        }
      },
    },
  }
</script>

<style scoped>

</style>
