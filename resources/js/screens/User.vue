<template>
    <div class="container">
        <inline-spinner v-if="loading"/>
        <div class="row" v-if="!loading && user">
            <div class="col-xl-3 col-lg-4">
                <div class="card">
                    <div class="card-body d-flex align-items-center">
                        <avatar :user="user" :tooltip="false"/>
                        <div class="ml-3">
                            <strong>{{ user.name }}</strong>
                            <p class="mb-0 text-muted">{{ user.member_since }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8">
                <div class="card">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Avatar from '../components/Avatar'
  import InlineSpinner from '../components/InlineSpinner'
  import Tabs from '../components/Tabs'
  import Tab from '../components/Tab'

  export default {
    name: 'Profile',

    components: {InlineSpinner, Avatar},

    data() {
      return {
        user    : null,
        loading : false,
      }
    },

    mounted() {
      this.loadUser()
    },

    methods: {
      async loadUser() {
        this.loading = true
        try {
          const {data} = await axios.get(`/web/users/${this.id}`)
          this.user    = data
        } catch (e) {
          console.error(e)
          this.$notify({
            text: 'Unable to process this request. Please try refreshing the page.',
            type: 'error',
          })
        }
        this.loading = false
      },
    },
  }
</script>

<style scoped>

</style>
