<template>
    <div>
        <div class="mb-3">
            <h1 class="page-title">Roles & Permissions</h1>
            <p class="mb-0 text-muted">Manage permissions for each role.</p>
        </div>

        <div class="d-flex align-items-center justify-content-center" v-if="loading">
            <inline-spinner class="text-primary"/>
        </div>

        <div class="card" v-if="!loading && roles.length > 0">
            <div class="card-body table-responsive overflow-hidden p-0">
                <table class="table table-hover table-middle mb-0">
                    <thead>
                    <tr>
                        <th class="w-100 border-top-0">Permission</th>
                        <th class="border-top-0" style="width: 0" v-for="role in roles">
                            {{ role.name }}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="permission in permissions">
                        <td>
                            <p class="mb-0"><strong>{{ permission.title }}</strong></p>
                            <p class="mb-0 text-muted">
                                {{ permission.description }}
                            </p>
                        </td>
                        <td class="text-center" v-for="role in roles">
                            <input type="checkbox"
                                   :checked="matrix[role.id][permission.id]"
                                   :disabled="role.name === 'Admin' || toggling"
                                   @change.prevent="toggle(permission, role)"
                                   :title="role.name === 'Admin' ? 'Admin role can\'t be changed' : null">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'Roles',

    components: {InlineSpinner},

    data() {
      return {
        loading    : true,
        toggling   : false,
        roles      : [],
        permissions: [],
        matrix     : {},
      }
    },

    mounted() {
      this.loadData()
    },

    methods: {
      async loadData() {
        this.loading = true
        try {
          const {data}     = await axios.get('/web/permissions')
          this.roles       = data.roles
          this.permissions = data.permissions
          this.matrix      = data.matrix
        } catch (e) {
          this.$alert('Unable to load page. Please try refreshing the page.')
        }
        this.loading = false
      },

      async toggle(permission, role) {
        if (role.name === 'Admin') {
          return
        }

        this.toggling = true
        try {
          const {data} = await axios.patch(`/web/permissions/${permission.id}/roles/${role.id}`)

          // Update the matrix to reflect the new change
          this.matrix[role.id][permission.id] = data.attached

          this.$notify({
            type: 'success',
            text: 'Role updated successfully',
          })
        } catch (e) {
          this.$notify({
            text: 'Unable to update role. Please try refreshing the page.',
            type: 'error',
          })
          console.error(e)
        }
        this.toggling = false
      },
    },
  }
</script>

<style scoped>

</style>
