<template>
    <modal @close="$emit('close')">
        <form action="#" method="post" @submit.prevent="send" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title>
                        Invitation
                    </modal-title>
                    <close @click.prevent.stop="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text"
                               id="name"
                               name="name"
                               class="form-control"
                               placeholder="E,g. Jane Doe"
                               required
                               v-model="form.name"
                               :class="{'is-invalid': form.errors.has('name')}">
                        <small class="form-text text-danger" v-if="form.errors.has('name')">
                            {{ form.errors.first('name') }}
                        </small>
                    </div>
                    <div class="form-group mb-0">
                        <label for="email">Email</label>
                        <input type="email"
                               name="email"
                               id="email"
                               class="form-control"
                               placeholder="E,g. jane@example.com"
                               v-model="form.email"
                               required
                               :class="{'is-invalid': form.errors.has('email')}">
                        <small class="form-text text-danger" v-if="form.errors.has('email')">
                            {{ form.errors.first('email') }}
                        </small>
                    </div>
                </modal-body>
                <modal-footer class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary" :disabled="loading">
                        <inline-spinner v-if="loading"/>
                        <span>Send Invitation</span>
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
    name: 'InvitationForm',

    components: {InlineSpinner, Close, ModalFooter, ModalBody, ModalTitle, ModalHeader, ModalCard, Modal},

    props: {
      group: {required: true, type: Object},
    },

    data() {
      return {
        loading: false,
        form   : new Form({
          name : '',
          email: '',
        }),
      }
    },

    methods: {
      async send() {
        this.loading = true

        try {
          const {data} = await this.form.post(`/web/groups/${this.group.id}/invitations`)
          this.$notify({
            text: 'Invitation sent successfully',
            type: 'success'
          })
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$alert('Unable to send invitation. Please try refreshing the page.')
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
