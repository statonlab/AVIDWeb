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
                    <tabs>
                        <tab name="Personal Info" selected icon="person">
                            <div class="card-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="form.name">
                                </div>

                                <div class="form-group mb-0">
                                    <label>Email Address</label>
                                    <input type="text" class="form-control" v-model="form.email">
                                </div>
                            </div>
                            <div class="card-footer bg-light">
                                <button class="btn btn-primary">Save</button>
                            </div>
                        </tab>
                        <tab name="Password" icon="lock-closed">
                            <div class="card-body">
                                <div class="form-group">
                                    <label>Current Password</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label>New Password</label>
                                    <input type="text" class="form-control">
                                </div>

                                <div class="form-group mb-0">
                                    <label>Repeat Password</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="card-footer bg-light">
                                <button class="btn btn-primary">Save</button>
                            </div>
                        </tab>
                    </tabs>
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
  import Form from '../forms/Form'

  export default {
    name: 'Profile',

    components: {Tab, Tabs, InlineSpinner, Avatar},

    data() {
      return {
        user    : null,
        loading : false,
        form    : new Form({
          name : '',
          email: '',
        }),
        passForm: new Form({
          password                 : '',
          new_password             : '',
          new_password_confirmation: '',
        }),
      }
    },

    mounted() {
      this.loadUser()
    },

    methods: {
      async loadUser() {
        this.loading = true
        try {
          const {data} = await axios.get(`/web/profile`)
          this.user    = data
          this.form.setDefault(data)
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
