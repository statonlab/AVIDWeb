<template>
    <modal @close="$emit('close')">
        <form action="#"
              @keydown="form.errors.clear($event.target.name)"
              @submit.prevent="save">
            <modal-card>
                <modal-header>
                    <modal-title v-if="species">
                        Update {{ species.genus }} {{ species.species }}
                    </modal-title>
                    <modal-title v-else>Create Species</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label for="genus">Genus</label>
                        <input type="text"
                               ref="genus"
                               autofocus
                               class="form-control"
                               :class="{'is-invalid': form.errors.has('genus')}"
                               placeholder="Genus"
                               v-model="form.genus"
                               name="genus"
                               id="genus">
                        <small class="form-text text-danger" v-if=" form.errors.has('genus')">
                            {{ form.errors.first('genus') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="species">Species</label>
                        <input type="text"
                               class="form-control"
                               :class="{'is-invalid': form.errors.has('species')}"
                               placeholder="Species"
                               v-model="form.species"
                               name="species"
                               id="species">
                        <small class="form-text text-danger" v-if=" form.errors.has('species')">
                            {{ form.errors.first('species') }}
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
          genus  : '',
          species: '',
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
          this.$refs.genus.focus()
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
