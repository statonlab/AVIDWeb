<template>
    <modal @close="$emit('close')">
        <form action="#"
              @keydown="form.errors.clear($event.target.name)"
              @submit.prevent="save">
            <modal-card>
                <modal-header>
                    <modal-title v-if="species">
                        Update {{ species.name }}
                    </modal-title>
                    <modal-title v-else>Create Species</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="alert alert-warning" v-if="species">
                        <p class="mb-0"><strong>Warning</strong></p>
                        <div>Changing the name of this species will affect any resources that are attached to it such as plants and sites.</div>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text"
                               ref="name"
                               autofocus
                               class="form-control"
                               :class="{'is-invalid': form.errors.has('name')}"
                               placeholder="Species Name"
                               v-model="form.name"
                               name="name"
                               id="name">
                        <small class="form-text text-danger" v-if=" form.errors.has('name')">
                            {{ form.errors.first('name') }}
                        </small>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button type="submit" class="btn btn-primary" :disabled="loading">
                        <inline-spinner v-if="loading"/>
                        <span>Save</span>
                    </button>

                    <button type="button"
                            class="btn btn-light ml-auto"
                            @click.prevent="$emit('close')"
                            :disabled="loading">
                        Cancel
                    </button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import ModalCard from '../components/Modal/ModalCard'
  import Modal from '../components/Modal/Modal'
  import ModalHeader from '../components/Modal/ModalHeader'
  import ModalTitle from '../components/Modal/ModalTitle'
  import Close from '../components/Modal/Close'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import Form from './Form'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'SpeciesForm',

    components: {InlineSpinner, ModalFooter, ModalBody, Close, ModalTitle, ModalHeader, Modal, ModalCard},

    props: {
      species: {required: false, default: null},
    },

    data() {
      return {
        loading: false,
        form   : new Form({
          name  : '',
        }),
      }
    },

    mounted() {
      if (this.species) {
        this.form.setDefault(this.species)
      }
    },

    methods: {
      save() {
        if (this.species) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        this.loading = true
        try {
          const {data} = await this.form.post(`/web/species`)
          this.$emit('create', data)
          this.form.reset()
          this.$refs.name.focus()
          this.$notify({
            text: 'Species created successfully',
            type: 'success',
          })
        } catch (e) {
          this.$notify({
            text: 'Unable to create species. Please try refreshing the page.',
            type: 'error',
          })
          console.error(e)
        }
        this.loading = false
      },

      async update() {
        this.loading = true
        try {
          const {data} = await this.form.put(`/web/species/${this.species.id}`)
          this.$emit('update', data)
          this.$notify({
            text: 'Species updated successfully',
            type: 'success',
          })
        } catch (e) {
          this.$notify({
            text: 'Unable to update species. Please try refreshing the page.',
            type: 'error',
          })
          console.error(e)
        }
        this.loading = false
      },
    },
  }
</script>

<style scoped>

</style>
