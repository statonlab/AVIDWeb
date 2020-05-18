<template>
    <div>
        <h1 class="page-title mb-3">Plots</h1>

        <plots-data-view
                :unauthorized-message="'You do not have permission to view plots for this group.'"
                :editable="permissions ? Boolean(permissions.can_edit) : false"
                :back="`/app/groups/${this.$route.params.group_id}`"
                :site-url-prefix="`/app/groups/${this.$route.params.group_id}/plots`"
                :disable-create="true"/>
    </div>
</template>

<script>

  import PlotsDataView from '../components/Data/PlotsDataView'

  export default {
    name: 'GroupPlots',

    components: {PlotsDataView},

    mounted() {
      this.loadPermissions()
    },

    data() {
      return {
        permissions: null,
      }
    },

    methods: {
      async loadPermissions() {
        const {group_id}   = this.$route.params
        try {
          const {data}      = await axios.get(`/web/groups/${group_id}/permissions`)
          this.permissions  = data
        } catch (e) {
          console.error(e)
        }
      },
    }
  }
</script>

<style scoped>

</style>
