<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="save">
            <modal-card>
                <modal-header>
                    <modal-title>Add A Plant</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label for="plant">Plant Type
                            <required/>
                        </label>
                        <select id="plant"
                                name="plant_type_id"
                                class="form-control"
                                :class="{'is-invalid': form.errors.has('plant_type_id')}"
                                v-model="form.plant_type_id"
                                :disabled="loadingPlants">
                            <option v-for="plant in plants" :value="plant.id">{{ plant.name }}</option>
                        </select>
                        <small class="form-text text-danger" v-if="form.errors.has('plant_type_id')">
                            {{ form.errors.first('plant_type_id') }}
                        </small>
                    </div>

                    <div class="row">
                        <div class="form-group col-6">
                            <label for="tag-num">
                                Tag Number
                                <required/>
                            </label>
                            <input type="text"
                                   id="tag-num"
                                   name="plant_type_id"
                                   class="form-control"
                                   :class="{'is-invalid': form.errors.has('tag')}"
                                   v-model="form.tag"
                                   placeholder="Tag #">
                            <small class="form-text text-danger" v-if="form.errors.has('tag')">
                                {{ form.errors.first('tag') }}
                            </small>
                        </div>
                        <div class="form-group col-6">
                            <label for="species">
                                Species
                                <required/>
                            </label>
                            <dropdown
                                    id="species"
                                    :autocomplete="true"
                                    v-model="form.species_id"
                                    :lodaing="loadingSpecies"
                                    :options="species"
                                    :error="form.errors.has('species_id')"
                                    @search="speciesSearch = $event"
                            />
                            <small class="form-text text-danger" v-if="form.errors.has('species_id')">
                                {{ form.errors.first('species_id') }}
                            </small>
                        </div>
                        <div class="form-group col-6">
                            <label for="quadrant">
                                Quadrant
                                <required/>
                            </label>
                            <select name="quadrant"
                                    id="quadrant"
                                    v-model="form.quadrant"
                                    :class="{'is-invalid': form.errors.has('quadrant')}"
                                    class="form-control">
                                <option value="">Select a Quadrant</option>
                                <option value="Northeast">Northeast</option>
                                <option value="Northwest">Northwest</option>
                                <option value="Southeast">Southeast</option>
                                <option value="Southwest">Southwest</option>
                            </select>
                            <small class="form-text text-danger" v-if="form.errors.has('quadrant')">
                                {{ form.errors.first('quadrant') }}
                            </small>
                        </div>
                    </div>
                </modal-body>
                <modal-footer>
                    <button type="submit" class="btn btn-primary" :disabled="saving">
                        <inline-spinner v-if="saving"/>
                        Save
                    </button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import Form from './Form'
  import Required from '../components/Required'
  import Modal from '../components/Modal/Modal'
  import ModalCard from '../components/Modal/ModalCard'
  import ModalHeader from '../components/Modal/ModalHeader'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import ModalTitle from '../components/Modal/ModalTitle'
  import Close from '../components/Modal/Close'
  import Dropdown from '../components/Dropdown'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'PlantForm',

    components: {
      InlineSpinner,
      Dropdown,
      Close,
      ModalTitle,
      ModalFooter,
      ModalBody,
      ModalHeader,
      ModalCard,
      Modal,
      Required,
    },

    props: {
      plot : {required: true, type: Object},
      plant: {required: false, type: Object},
    },

    watch: {
      'form.species_id': {
        handler() {
          this.form.errors.clear('species_id')
        },
      },
    },

    data() {
      return {
        plants: [],
        saving: false,

        form: new Form({
          plant_type_id: '',
          tag          : '',
          species_id   : '',
          quadrant     : '',
        }),

        loadingPlants : false,
        loadingSpecies: false,
        species       : [],
        speciesSearch : '',
      }
    },

    mounted() {
      if (this.plant) {
        this.form.setDefault(this.plant)
      }

      this.loadTypes()
      this.loadSpecies()
    },

    methods: {
      async loadTypes() {
        this.loadingPlants = true
        try {
          const {data}            = await axios.get('/web/plant-types')
          this.plants             = data
          this.form.plant_type_id = data[0].id
        } catch (e) {
          this.$alert('Unable to load form. Please try refreshing the page.')
        }
        this.loadingPlants = false
      },

      async loadSpecies() {
        try {
          const {data} = await axios.get(`/web/species`, {
            params: {
              search: this.speciesSearch,
            },
          })
          this.species = data.data.map(species => ({
            label: species.name,
            value: species.id,
          }))
        } catch (e) {
          console.error(e)
        }
      },

      save() {
        if (this.plant) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        this.saving = true
        try {
          const {data} = await this.form.post(`/web/plots/${this.plot.id}/plants/`)
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              text: 'Unable to create plant. Please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
        this.saving = false
      },

      async update() {
        this.saving = true
        try {
          const {data} = await this.form.put(`/web/plants/${this.plant.id}`)
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              text: 'Unable to create plant. Please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
        this.saving = false
      },
    },
  }
</script>

<style scoped>

</style>
