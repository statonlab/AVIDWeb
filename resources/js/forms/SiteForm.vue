<template>
    <modal medium>
        <form action="" @submit.prevent="save()">
            <modal-card>
                <modal-header>
                    <modal-title v-if="!site">Add a New Site</modal-title>
                    <modal-title v-if="site">Update {{ site.name }}</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
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
                        <label for="city">City/Town</label>
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
                    <div class="form-group">
                        <label for="species">
                            Overstory Species
                        </label>
                        <tokens-field id="species" v-model="form.species" />
                    </div>
                    <div class="form-group">
                        <label for="shrubs">
                            Seedling or Shrub Species
                        </label>
                        <tokens-field id="shrubs" v-model="form.shrubs" />
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
        stateRequest   : null,
        countyRequest  : null,
        loadingStates  : false,
        loadingCounties: false,
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
    },

    watch: {
      stateSearch() {
        this.loadStates()
      },

      countySearch() {
        this.loadCounties()
      },
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
        console.log(this.species)
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
