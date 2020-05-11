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
                    <div class="form-group">
                        <label for="plant">
                            Plant Type
                        </label>
                        <select id="plant"
                                name="plant_type_id"
                                class="form-control"
                                :class="{'is-invalid': form.errors.has('plant_type_id')}"
                                v-model="form.plant_type_id"
                                :disabled="loadingTypes">
                            <option :value=null>None</option>
                            <option v-for="type in types" :value="type.id">{{ type.name }}</option>
                        </select>
                        <small class="form-text text-danger" v-if="form.errors.has('plant_type_id')">
                            {{ form.errors.first('plant_type_id') }}
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
        loading         : false,
        types           : null,
        loadingTypes    : false,

        form   : new Form({
          name  : '',
          plant_type_id: null,
        }),
      }
    },

    async mounted() {
      await this.loadTypes()

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

      async loadTypes() {
        this.loadingTypes = true
        try {
          const {data}            = await axios.get('/web/plant-types')
          this.types              = data
          // this.form.plant_type_id = data[0].id
        } catch (e) {
          this.$alert('Unable to load form. Please try refreshing the page.')
        }
        this.loadingTypes = false
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
