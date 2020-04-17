<template>
    <div>
        <div class="mb-3">
            <h1 class="page-title">Roles & Permissions</h1>
            <p class="mb-0 text-muted">Manage permissions for each role.</p>
        </div>

        <div class="card">
            <div class="card-body table-responsive overflow-hidden p-0">
                <table class="table table-hover table-middle mb-0">
                    <thead>
                    <tr>
                        <th class="w-100 border-top-0">Permission</th>
                        <th class="border-top-0" style="width: 0">Admin</th>
                        <th class="border-top-0" style="width: 0">Scientist</th>
                        <th class="border-top-0" style="width: 0">Member</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="i in 5">
                        <td>
                            <p class="mb-0"><strong>Create Users</strong></p>
                            <p class="mb-0 text-muted">
                                Allow users to create users accounts.
                            </p>
                        </td>
                        <td class="text-center">
                            <div class="custom-control custom-switch">
                                <input type="checkbox">
                            </div>
                        </td>
                        <td class="text-center">
                            <input type="checkbox">
                        </td>
                        <td class="text-center">
                            <input type="checkbox"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Roles',
  }
</script>

<style scoped>

</style>
