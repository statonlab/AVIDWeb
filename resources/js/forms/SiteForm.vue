<template>
    <modal medium @close="$emit('close')">
        <form action="" @submit.prevent="createSpecies ? saveSpecies() : save()">
            <modal-card>
                <modal-header>
                    <modal-title v-if="createSpecies">Create Species</modal-title>
                    <modal-title v-else-if="!site">Add a New Site</modal-title>
                    <modal-title v-else-if="site">Update {{ site.name }}</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div v-if="!createSpecies">
                        <div class="form-group">
                            <label for="name">
                                Site Name
                                <required/>
                            </label>
                            <input type="text"
                                   autocomplete="site-name"
                                   class="form-control"
                                   id="name"
                                   name="name"
                                   v-model="form.name"
                                   placeholder="Site Name"
                                   autofocus>
                            <span class="form-text text-danger" v-if="form.errors.has('name')">
                                {{ form.errors.first('name') }}
                            </span>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>
                                        State
                                        <required/>
                                    </label>
                                    <dropdown
                                            autocomplete
                                            :loading="loadingStates"
                                            v-model="form.state_id"
                                            @input="selectState($event)"
                                            :options="states"
                                            placeholder="Select a state"
                                            @search="stateSearch = $event"
                                    />
                                    <span class="form-text text-danger" v-if="form.errors.has('state')">
                                        {{ form.errors.first('state') }}
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>
                                        County
                                        <required/>
                                    </label>
                                    <dropdown
                                            autocomplete
                                            :loading="loadingCounties"
                                            @search="countySearch = $event"
                                            placeholder="Select a County"
                                            v-model="form.county_id"
                                            :options="counties"
                                            :disabled="form.state_id === null"
                                            ref="county"
                                    />
                                    <span class="form-text text-danger" v-if="form.errors.has('county')">
                                        {{ form.errors.first('county') }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="city">
                                Town
                                <required/>
                            </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="form.city"
                                   name="city"
                                   id="city"
                                   placeholder="Type a city name">
                            <span class="form-text text-danger" v-if="form.errors.has('city')">
                                {{ form.errors.first('city') }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="owner">Owner's Name</label>
                            <input type="text"
                                   class="form-control"
                                   v-model="form.owner_name"
                                   name="owner"
                                   id="owner"
                                   placeholder="Type a name">
                            <span class="form-text text-danger" v-if="form.errors.has('owner_name')">
                                {{ form.errors.first('owner_name') }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="contact">Contact Info</label>
                            <textarea type="text"
                                      class="form-control"
                                      name="contact"
                                      v-model="form.owner_contact"
                                      id="contact"
                                      placeholder="Type contact info"></textarea>
                            <span class="form-text text-danger" v-if="form.errors.has('owner_contact')">
                                {{ form.errors.first('owner_contact') }}
                            </span>
                        </div>
                        <div class="mb-0 form-group">
                            <label for="species">
                                Overstory Species
                                <required/>
                            </label>
                            <div class="d-flex align-items-center">
                                <tokens-field id="species"
                                              class="flex-grow-1"
                                              :options="speciesOptions"
                                              v-model="form.species" />
                                <button class="mb-2 ml-2 btn btn-link flex-shrink-0" @click.prevent="createSpecies = true">
                                    <icon name="add" />
                                    <span>New Species</span>
                                </button>
                            </div>
                            <span class="form-text text-danger" v-if="form.errors.has('species')">
                                {{ form.errors.first('species') }}
                            </span>
                        </div>
                        <div class="mb-0 form-group">
                            <label for="shrubs">
                                Seedling or Shrub Species
                                <required/>
                            </label>
                            <div class="mb-0 d-flex align-items-center">
                                <tokens-field id="shrubs"
                                              class="flex-grow-1"
                                              :options="speciesOptions"
                                              v-model="form.shrubs" />
                                <button class="mb-2 ml-2 btn btn-link flex-shrink-0" @click.prevent="createSpecies = true">
                                    <icon name="add" />
                                    <span>New Species</span>
                                </button>
                            </div>
                            <span class="form-text text-danger" v-if="form.errors.has('shrubs')">
                                {{ form.errors.first('shrubs') }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="basal-area">
                                Approximate Basal Area
                            </label>
                            <div class="input-group is-appended">
                                <input type="text"
                                       class="form-control"
                                       name="basal_area"
                                       v-model="form.basal_area"
                                       id="basal-area"
                                       placeholder="Type a number">
                                <div class="input-group-append">
                                    <span class="input-group-text">ft<sup>2</sup>/ac</span>
                                </div>
                            </div>
                            <span class="form-text text-danger" v-if="form.errors.has('basal_area')">
                                {{ form.errors.first('basal_area') }}
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="diameter">
                                Average Overstory Tree Diameter
                            </label>
                            <div class="input-group is-appended">
                                <input type="text"
                                       v-model="form.diameter"
                                       class="form-control"
                                       name="diameter"
                                       id="diameter"
                                       placeholder="Type a number">
                                <div class="input-group-append">
                                    <span class="input-group-text">in</span>
                                </div>
                            </div>
                            <span class="form-text text-danger" v-if="form.errors.has('diameter')">
                                {{ form.errors.first('diameter') }}
                            </span>
                        </div>
                    </div>
                    <div v-else>
                        <div class="form-group">
                            <label for="species-name">
                                Name
                                <required/>
                            </label>
                            <input type="text"
                                   ref="species-name"
                                   autofocus
                                   class="form-control"
                                   :class="{'is-invalid': form.errors.has('species_name')}"
                                   placeholder="Species Name"
                                   v-model="speciesForm.name"
                                   name="species-name"
                                   id="species-name">
                            <small class="form-text text-danger" v-if=" form.errors.has('species_name')">
                                {{ form.errors.first('name') }}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="plant">
                                Plant Type
                                <required/>
                            </label>
                            <select id="plant"
                                    name="plant_type_id"
                                    class="form-control"
                                    :class="{'is-invalid': form.errors.has('plant_type_id')}"
                                    v-model="speciesForm.plant_type_id"
                                    :disabled="loadingTypes">
                                <option :value=null>None</option>
                                <option v-for="type in types" :value="type.id">{{ type.name }}</option>
                            </select>
                            <small class="form-text text-danger" v-if="form.errors.has('plant_type_id')">
                                {{ form.errors.first('plant_type_id') }}
                            </small>
                        </div>
                        <div class="form-group">
                            <button class="mt-2 mb-0 btn btn-link" @click.prevent="createSpecies = false">Cancel Species Creation</button>
                        </div>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit" :disabled="saving">
                        <inline-spinner v-if="saving"/>
                        <span>Save</span>
                    </button>
                    <button class="btn btn-light ml-auto"
                            type="button"
                            @click.prevent="$emit('close')">
                        Close
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
  import Required from '../components/Required'
  import Autocomplete from '../components/Autocomplete'
  import Dropdown from '../components/Dropdown'
  import InlineSpinner from '../components/InlineSpinner'
  import TokensField from '../components/TokensField'
  import Icon from '../components/Icon'

  export default {
    name: 'SiteForm',

    components: {
      InlineSpinner,
      Dropdown,
      Autocomplete,
      Required,
      Close,
      ModalFooter,
      ModalBody,
      ModalTitle,
      ModalHeader,
      ModalCard,
      Modal,
      TokensField,
      Icon,
    },

    props: {
      site: {required: false, default: null},
    },

    data() {
      return {
        saving        : false,
        states         : [],
        stateSearch    : '',
        counties       : [],
        countySearch   : '',
        species        : [],
        speciesOptions : [],
        types          : [],
        form           : new Form({
          state_id     : null,
          county_id    : null,
          city         : '',
          name         : '',
          diameter     : '',
          basal_area   : '',
          owner_name   : '',
          owner_contact: '',
          species      : [],
          shrubs       : [],
        }),
        speciesForm    : new Form({
          name         : '',
          plant_type_id: null,
        }),
        stateRequest   : null,
        countyRequest  : null,
        loadingStates  : false,
        loadingCounties: false,
        createSpecies  : false,
      }
    },

    mounted() {
      if (this.site) {
        this.form.setDefault({
          ...this.site,
          species: this.site.species.map(({id}) => `${id}`),
          shrubs : this.site.shrubs.map(({id}) => `${id}`)
        })
      }
      this.loadStates()
      this.loadSpecies()
    },

    watch: {
      stateSearch() {
        this.loadStates()
      },

      countySearch() {
        this.loadCounties()
      },

      createSpecies() {
        if (this.types.length === 0) {
          this.loadTypes()
        }
      }
    },

    methods: {
      async loadStates() {
        this.loadingStates = true
        if (this.stateRequest !== null) {
          this.stateRequest()
        }

        try {
          const {data} = await axios.get('/web/states', {
            params     : {
              search: this.stateSearch,
            },
            cancelToken: new axios.CancelToken(c => this.stateRequest = c),
          })

          this.states        = data.data.map(s => {
            return {
              label : `${s.name} (${s.code})`,
              value : s.id,
              search: s.name,
            }
          })
          this.loadingStates = false
          if (this.form.state_id) {
            this.loadCounties()
          }
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loadingStates = false
            console.error(e)
          }
        }

        this.stateRequest = null
      },

      async loadCounties() {
        this.loadingCounties = true
        if (this.countyRequest !== null) {
          this.countyRequest()
        }

        try {
          const {data} = await axios.get('/web/counties', {
            params     : {
              state_id: this.form.state_id,
              search  : this.countySearch,
            },
            cancelToken: new axios.CancelToken(c => this.countyRequest = c),
          })

          this.counties        = data.data.map(c => {
            return {
              label: c.name,
              value: c.id,
            }
          })
          this.loadingCounties = false
        } catch (e) {
          if (!axios.isCancel(e)) {
            this.loadingCounties = false
            console.error(e)
          }
        }

        this.countyRequest = null
      },

      async loadSpecies() {
        if(this.request) {
          this.request()
        }
        axios.get('/web/species', {
          params: {
            cancelToken: new axios.CancelToken(fn => this.request = fn),
            limit: 500
          },
        }).then(response => {
          this.speciesOptions = response.data.data.map(({id, name}) => ({id, text: name}))
        }).catch(e => {
          console.error(e)
        })
      },

      async loadTypes() {
        this.loadingTypes = true
        try {
          const {data}            = await axios.get('/web/plant-types')
          this.types              = data
        } catch (e) {
          this.$alert('Unable to load form. Please try refreshing the page.')
        }
        this.loadingTypes = false
      },

      onChange(e) {
        this.$emit('input', e)
      },

      selectState(value) {
        this.loadCounties()
        this.$refs.county.clear()
      },

      save() {
        if (this.site) {
          this.update()
        } else {
          this.submit()
        }
      },

      async saveSpecies() {
        this.saving = true
        try {
          const {data} = await this.speciesForm.post(`/web/species`)
          this.createSpecies = false
          this.loadSpecies()
          this.$notify({
            text: 'Species created successfully',
            type: 'success',
          })
        } catch (e) {
          if (e.response && e.response.status !== 422) {
            this.$notify({
              text: 'Unable to save species. Please try refreshing the page.',
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
          const {data} = await this.form.put(`/web/sites/${this.site.id}`)
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              text: 'Unable to save site. Please try refreshing the page.',
              type: 'error',
            })
          } else {
            this.$notify({
              text: 'One or more fields need your attention. Please review the form.',
              type: 'error',
            })
          }
          console.error(e)
        }
        this.saving = false
      },

      async submit() {
        this.saving = true
        try {
          const {data} = await this.form.post(`/web/sites`)
          this.$emit('create', data)
        } catch (e) {
          if (e.response && e.response.status !== 422) {
            this.$notify({
              text: 'Unable to save site. Please try refreshing the page.',
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
