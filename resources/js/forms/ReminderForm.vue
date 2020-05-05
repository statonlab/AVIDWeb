<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="save" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title v-if="!reminder">Create a Reminder</modal-title>
                    <modal-title v-if="reminder">Update Reminder</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label for="days">Specify how many days must pass after a measurement has been recorded.</label>
                        <div class="d-flex align-items-center">
                            <input class="form-control"
                                   :class="{'is-invalid': form.errors.has('days')}"
                                   name="days"
                                   id="days"
                                   v-model="form.days"
                                   style="width: 80px"
                                   placeholder="Days"
                                   title="Number of days"
                                   autofocus/>
                            <span class="ml-1">days after last measurement.</span>
                        </div>

                        <small class="form-text text-danger" v-if="form.errors.has('days')">
                            {{ form.errors.first('days') }}
                        </small>
                    </div>
                    <div>
                        <small><strong>Note</strong> that you will receive no more than 3 emails a week for each reminder.</small>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit" :disabled="loading">
                        <inline-spinner v-if="loading"/>
                        <span>Save</span>
                    </button>
                    <button class="btn btn-light ml-auto" @click.prevent="$emit('close')" :disabled="loading">
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
  import Close from '../components/Modal/Close'
  import Form from './Form'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'ReminderForm',

    components: {InlineSpinner, Close, ModalFooter, ModalBody, ModalTitle, ModalHeader, ModalCard, Modal},

    props: {
      reminder: {required: false},
    },

    data() {
      return {
        loading: false,
        form   : new Form({
          days: '',
        }),
      }
    },

    mounted() {
      if (this.reminder) {
        this.form.setDefault(this.reminder)
      }
    },

    methods: {
      save() {
        if (this.reminder) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        this.loading = true
        try {
          const {data} = await this.form.post(`/web/reminders`)
          this.$notify({
            type: 'success',
            text: 'Reminder created successfully.',
          })
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$alert('Unable to create reminder. Please try refreshing the page.')
            console.error(e)
          }
        }
        this.loading = false
      },

      async update() {
        this.loading = true
        try {
          const {data} = await this.form.put(`/web/reminders/${this.reminder.id}`)
          this.$notify({
            type: 'success',
            text: 'Reminder update successfully.',
          })
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$alert('Unable to update reminder. Please try refreshing the page.')
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
