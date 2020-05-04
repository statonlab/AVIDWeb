<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="save" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title v-if="!group">
                        Create a Group
                    </modal-title>
                    <modal-title v-if="group">
                        Update {{ group.name }}
                    </modal-title>
                    <close @click.prevent.stop="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group mb-0">
                        <label>Group Name</label>
                        <input type="text"
                               name="name"
                               class="form-control"
                               placeholder="Group Name"
                               v-model="form.name"
                               required
                               :class="{'is-invalid': form.errors.has('name')}">
                        <div class="form-text text-danger" v-if="form.errors.has('name')">
                            {{ form.errors.first('name') }}
                        </div>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit">
                        Save
                    </button>
                    <button class="btn btn-light ml-auto" type="button" @click.prevent="$emit('close')">
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
  import Close from '../components/Modal/Close'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import Form from './Form'

  export default {
    name      : 'GroupForm',
    components: {
      ModalFooter,
      ModalBody,
      Close,
      ModalTitle,
      ModalHeader,
      ModalCard,
      Modal,
    },

    props: {
      group: {required: false},
    },

    data() {
      return {
        form   : new Form({
          name: '',
        }),
        loading: false,
      }
    },

    mounted() {
      if (this.group) {
        this.form.name = this.group.name
      }
    },

    methods: {
      save() {
        if (this.group) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        try {
          const {data} = await this.form.post('/web/groups')
          this.$notify({
            type: 'success',
            text: 'Group created successfully.'
          })
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$alert('Unable to create group. Please try refreshing the page.')
          }
          console.error(e)
        }
      },

      async update() {
        try {
          const {data} = await this.form.put(`/web/groups/${this.group.id}`)
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$alert('Unable to create group. Please try refreshing the page.')
          }
          console.error(e)
        }
      },
    },
  }
</script>

<style scoped>

</style>
