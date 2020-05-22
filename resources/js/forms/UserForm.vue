<template>
    <modal @close="$emit('close')">
        <form action="#" method="post" @submit.prevent="send" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title>
                        {{ `Editing permissions for ${user.name}` }}
                    </modal-title>
                    <close @click.prevent.stop="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="custom-control custom-radio">
                        <input type="radio"
                               id="radio-no-permissions"
                               name="no-permissions"
                               class="custom-control-input"
                               v-model="permission"
                               v-on:change="updatePermissions"
                               :value="'no_permissions'">
                        <label class="custom-control-label"
                               for="radio-no-permissions">
                            {{ 'User can neither view nor edit' }}
                        </label>
                    </div>

                    <div class="custom-control custom-radio">
                        <input type="radio"
                               id="radio-view-only"
                               name="view-only"
                               class="custom-control-input"
                               v-model="permission"
                               v-on:change="updatePermissions"
                               :value="'view_only'">
                        <label class="custom-control-label"
                               for="radio-view-only">
                            {{ 'User can view only' }}
                        </label>
                    </div>

                    <div class="custom-control custom-radio">
                        <input type="radio"
                               id="radio-view-edit"
                               name="view-edit"
                               class="custom-control-input"
                               v-model="permission"
                               v-on:change="updatePermissions"
                               :value="'view_edit'">
                        <label class="custom-control-label"
                               for="radio-view-edit">
                            {{ 'User can view and edit' }}
                        </label>
                    </div>
                </modal-body>
                <modal-footer class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary" :disabled="loading">
                        <inline-spinner v-if="loading"/>
                        <span>Update Member</span>
                    </button>
                    <button type="button" class="btn btn-light" @click.prevent="$emit('close')" :disabled="loading">
                        Cancel
                    </button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import Modal from '../components/Modal/Modal'
  import ModalCard from '../components/Modal/ModalCard'
  import ModalHeader from '../components/Modal/ModalHeader'
  import ModalTitle from '../components/Modal/ModalTitle'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import Form from './Form'
  import Close from '../components/Modal/Close'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'UserForm',

    components: {InlineSpinner, Close, ModalFooter, ModalBody, ModalTitle, ModalHeader, ModalCard, Modal},

    props: {
      user : {required: true, type: Object},
      group: {required: true, type: Object},
    },

    data() {
      return {
        loading: false,
        permission: '',
        form   : new Form({
          user_id  : '',
          can_view : '',
          can_edit : '',
        }),
      }
    },

    mounted() {
      this.form.setDefault({
        user_id  : this.user.id,
        can_view : this.user.pivot.can_view,
        can_edit : this.user.pivot.can_edit,
      })
      this.setPermission()
    },

    methods: {
      async send() {
        this.loading = true

        try {
          const {data} = await this.form.put(`/web/groups/${this.group.id}/permissions`)
          this.$notify({
            text: 'Member updated successfully.',
            type: 'success'
          })
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$alert('Unable to update member. Please try refreshing the page.')
            console.error(e)
          }
        }

        this.loading = false
      },

      setPermission() {
        if (this.form.can_view && this.form.can_edit) {
          this.permission = 'view_edit'
        } else if (this.form.can_view) {
          this.permission = 'view_only'
        } else {
          this.permission = 'no_permissions'
        }
      },

      updatePermissions() {
        switch (this.permission) {
          case 'no_permissions':
            this.form.can_view = 0
            this.form.can_edit = 0
            break
          case 'view_only':
            this.form.can_view = 1
            this.form.can_edit = 0
            break
          case 'view_edit':
            this.form.can_view = 1
            this.form.can_edit = 1
            break
        }
      }
    },
  }
</script>

<style scoped>

</style>
