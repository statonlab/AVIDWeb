<template>
    <div>
        <plants-data-view
            :unauthorized-message="'You do not have permission to view plants for this group.'"
            :back-url-prefix="`/app/groups/${this.$route.params.group_id}/sites`"
            :site-url-prefix="`/app/groups/${this.$route.params.group_id}/plants`"
            :disable-create="true"
            :editable="permissions ? Boolean(permissions.can_edit) : false"/>
    </div>
</template>

<script>

  import PlantsDataView from '../components/Data/PlantsDataView'

  export default {
    name: 'GroupPlants',

    components: {PlantsDataView},

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
