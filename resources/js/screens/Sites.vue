<template>
    <div>
        <div class="card mb-3">
            <div class="card-header d-flex p-2">
                <div class="flex-grow-1">
                    <input type="search" class="form-control" placeholder="Search...">
                </div>
                <div class="ml-auto">
                    <button class="btn btn-primary">New Site</button>
                </div>
            </div>
            <div class="card-body p-0">
                <table class="table mb-0 table-middle">
                    <thead>
                    <tr>
                        <th style="width: 100%">Name</th>
                        <th>Plots</th>
                        <th>Entries</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="site in sites">
                        <td>
                            <a href="#">
                                <strong>{{ site.name }}</strong>
                            </a>
                            <div class="text-muted">
                                {{ site.address }}
                            </div>
                        </td>
                        <td class="text-right">{{ site.plots_count }}</td>
                        <td class="text-right">{{ site.entries_count }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../components/Icon'

  export default {
    name: 'Sites',

    components: {Icon},

    data() {
      return {
        sites: [
          {
            name         : 'Gasline Harvest inside slash',
            plots_count  : 80,
            entries_count: 190,
            address      : 'New Field, NY',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
