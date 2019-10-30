<template>
    <modal @close="$emit('close')" medium>
        <form action="" @submit.prevent="submit()">
            <modal-card>
                <modal-header>
                    <modal-title>
                        Add a New Site
                    </modal-title>
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
                    </div>
                    <div class="form-group">
                        <label for="owner">Owner's Name</label>
                        <input type="text"
                               class="form-control"
                               v-model="form.owner_name"
                               name="owner"
                               id="owner"
                               placeholder="Type a name">
                    </div>
                    <div class="form-group">
                        <label for="address">Owner's Address</label>
                        <textarea type="text"
                                  class="form-control"
                                  name="address"
                                  v-model="form.owner_address"
                                  id="address"
                                  placeholder="Type an address"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="basal-area">
                            Approximate Basal Area
                            <required/>
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
                    </div>
                    <div class="form-group">
                        <label for="diameter">
                            Average Overstory Tree Diameter
                            <required/>
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
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit">
                        Save
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

  export default {
    name: 'SiteForm',

    components: {
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
    },

    data() {
      return {
        states         : [],
        stateSearch    : '',
        counties       : [],
        countySearch   : '',
        form           : new Form({
          state_id     : null,
          county_id    : null,
          city         : '',
          name         : '',
          diameter     : '',
          basal_area   : '',
          owner_name   : '',
          owner_address: '',
        }),
        stateRequest   : null,
        countyRequest  : null,
        loadingStates  : false,
        loadingCounties: false,
      }
    },

    mounted() {
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

      async submit() {
        try {
          const {data} = await this.form.post(`/web/sites`)
          this.$emit('create', data)
        } catch (e) {
          console.error(e)
        }
      },
    },
  }
</script>

<style scoped>

</style>
