<template>
    <modal @close="$emit('close')">
        <form action="#" method="post" @submit.prevent="send" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title>
                        Edit Member
                    </modal-title>
                    <close @click.prevent.stop="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-check mb-1">
                        <input class="form-check-input"
                               type="checkbox"
                               value="1"
                               :checked="form.can_view"
                               @change="form.can_view = $event.target.checked"
                               id="can-view">
                        <label class="form-check-label font-weight-normal" for="can-view">
                            Allow user to view sites
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input"
                               type="checkbox"
                               value="1"
                               :checked="form.can_edit"
                               @change="form.can_edit = $event.target.checked"
                               id="can-edit">
                        <label class="form-check-label font-weight-normal" for="can-edit">
                            Allow user to edit sites
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
    },
  }
</script>

<style scoped>

</style>
