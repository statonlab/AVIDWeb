<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="save">
            <modal-card>
                <modal-header>
                    <modal-title v-if="!plant">Add A Plant</modal-title>
                    <modal-title v-if="plant">Update Plant #{{ plant.tag }}</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body class="d-flex justify-content-center align-items-center"
                            v-if="loadingPlants || loadingSpecies">
                    <inline-spinner class="text-primary"/>
                </modal-body>
                <modal-body class="position-static" v-if="!loadingSpecies && !loadingPlants">
                    <div class="form-group">
                        <label for="plant">
                            Plant Type
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

                    <div class="row position-static">
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
                        <div class="form-group col-6 position-static">
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
                        <div class="form-group col-6" v-if="!form.new_species">
                            <label for="species">
                                Species
                                <required/>
                            </label>
                            <dropdown
                                    class="mb-1"
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
                        <div class="form-group col-6 flex-column" v-if="form.new_species">
                            <label for="new-species">
                                Species
                                <required/>
                            </label>
                            <input type="text"
                                   id="new-species"
                                   name="new-species"
                                   class="form-control"
                                   :class="{'is-invalid': form.errors.has('new_species_name')}"
                                   v-model="form.new_species_name"
                                   placeholder="Species Name">
                            <small class="form-text text-danger" v-if="form.errors.has('new_species_name')">
                                {{ form.errors.first('new_species_name') }}
                            </small>
                        </div>
                            <button class="btn btn-link mt-auto mb-3 ml-3"
                                    v-if="form.new_species"
                                    @click.prevent="form.new_species = false">
                                <span>
                                    Cancel Species Creation
                                </span>
                            </button>
                    </div>
                    <p class="text-muted" v-if="!form.new_species">
                        If you cannot find the species from the dropdown,
                        <a href="#" @click.prevent="form.new_species = true"> you can click here to create a new one.</a>
                    </p>

                    <button class="btn btn-link"
                            v-if="!this.plant && !form.new_measurement"
                            @click.prevent="form.new_measurement = true">
                        <icon name="add"/>
                        <span>Add a Measurement</span>
                    </button>

                    <div class="row position-static" v-if="!this.plant && form.new_measurement">
                        <div class="form-group col-lg-6 position-static">
                            <label>
                                Date
                                <required/>
                            </label>
                            <date-picker
                                    v-model="date"
                                    color="green"
                                    :max-date="new Date()"
                                    :input-props="{
                                        class: 'form-control'+(form.errors.has('date') ? ' is-invalid':''),
                                        placeholder: 'Collection Date',
                                    }"/>
                            <p class="mb-0 form-text text-danger" v-if="form.errors.has('date')">
                                {{ form.errors.first('date') }}
                            </p>
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="located">
                                Was Plant Located?
                                <required/>
                            </label>
                            <select name="is_located"
                                    id="located"
                                    class="form-control"
                                    :class="{'is-invalid': form.errors.has('is_located')}"
                                    v-model="form.is_located">
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                            <p class="mb-0 form-text text-danger" v-if="form.errors.has('is_located')">
                                {{ form.errors.first('is_located') }}
                            </p>
                        </div>
                        <div class="form-group col-lg-6" v-if="form.is_located === '1'">
                            <label for="alive">
                                Was Plant Alive?
                                <required/>
                            </label>
                            <select name="is_alive"
                                    id="alive"
                                    v-model="form.is_alive"
                                    :class="{'is-invalid': form.errors.has('is_located')}"
                                    class="form-control">
                                <option value="">Select One</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                            <p class="mb-0 form-text text-danger" v-if="form.errors.has('is_alive')">
                                {{ form.errors.first('is_alive') }}
                            </p>
                        </div>
                        <div class="form-group col-lg-6" v-if="form.is_located === '1'">
                            <label for="height">
                                Height (inches)
                                <required/>
                            </label>
                            <div class="input-group input-appended">
                                <input id="height"
                                       type="text"
                                       v-model="form.height"
                                       class="form-control"
                                       :class="{'is-invalid': form.errors.has('height')}">
                                <div class="input-group-append">
                                    <span class="input-group-text">in.</span>
                                </div>
                            </div>
                            <p class="mb-0 form-text text-danger" v-if="form.errors.has('height')">
                                {{ form.errors.first('height') }}
                            </p>
                        </div>
                    </div>

                    <button class="btn btn-link"
                            v-if="form.new_measurement"
                            @click.prevent="form.new_measurement = false">
                        <span>Cancel Measurement Creation</span>
                    </button>
                </modal-body>
                <modal-footer class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary" :disabled="saving">
                        <inline-spinner v-if="saving"/>
                        Save
                    </button>

                    <button type="button" class="btn btn-light" @click.prevent="$emit('close')">
                        Cancel
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
  import Icon from '../components/Icon'
  import DatePicker from 'v-calendar/lib/components/date-picker.umd'
  import moment from 'moment'

  export default {
    name: 'PlantForm',

    components: {
      DatePicker,
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
      Icon,
    },

    props: {
      plot : {required: false, type: Object},
      plant: {required: false, type: Object},
    },

    watch: {
      speciesSearch() {
        this.loadSpecies()
      },

      date(date) {
        this.form.date = date ? moment(date).format('YYYY-MM-DD') : null
      },

      'form.species_id': {
        handler() {
          this.form.errors.clear('species_id')
        },
      },

      'form.plant_type_id': {
        handler() {
          this.loadSpecies()
        }
      }
    },

    data() {
      const date = window.avid.last_entry
      return {
        plants: [],
        saving: false,
        date  : date ? moment(date).toDate() : null,

        form: new Form({
          new_measurement   : false,
          date              : window.avid.last_entry,
          is_located        : '0',
          is_alive          : '',
          height            : '',
          new_species       : false,
          new_species_name  : '',
          plant_type_id     : '',
          tag               : '',
          species_id        : '',
          quadrant          : '',
        }),

        loadingPlants : false,
        loadingSpecies: false,
        species       : [],
        speciesSearch : '',
      }
    },

    async mounted() {
      await this.loadTypes()
      if (this.plant) {
        this.form.setDefault(this.plant)
      }
    },

    methods: {
      async loadTypes() {
        this.loadingPlants = true
        try {
          const {data}            = await axios.get('/web/plant-types')
          this.plants             = data
          this.form.plant_type_id = data[0].id
          await this.loadSpecies()
        } catch (e) {
          this.$alert('Unable to load form. Please try refreshing the page.')
        }
        this.loadingPlants = false
      },

      async loadSpecies() {
        try {
          const {data} = await axios.get(`/web/species`, {
            params: {
              search        : this.speciesSearch,
              plant_type_id : this.form.plant_type_id,
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
          const {data} = await this.form.post(`/web/plots/${this.plot.id}/plants`)
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
