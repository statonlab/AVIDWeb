<template>
    <modal @close="$emit('close')" medium>
        <form @submit.prevent="submit()" @keydown="$event.target && form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title v-if="!plot">New Plot</modal-title>
                    <modal-title v-else>Edit "Plot {{ plot.number }}"</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label for="number">
                            Plot Number
                            <required/>
                        </label>
                        <input type="text"
                               name="number"
                               id="number"
                               placeholder="E,g. 36"
                               :class="['form-control', {'is-invalid': form.errors.has('number')}]"
                               v-model="form.number">
                        <small class="form-text text-danger" v-if="form.errors.has('number')">
                            {{ form.errors.first('number') }}
                        </small>
                    </div>

                    <div class="d-flex align-items-center mb-1">
                        <div>
                            <p class="mb-0"><strong>GPS Location</strong></p>
                            <small class="mb-0 text-muted">You may use the map to visually select the location</small>
                        </div>
                        <div class="ml-auto">
                            <button class="btn btn-outline-primary btn-sm">
                                <icon name="map"/>
                                <span>Use Map</span>
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="latitude">
                                    Latitude
                                    <required/>
                                </label>
                                <input type="text"
                                       name="latitude"
                                       id="latitude"
                                       placeholder="E,g. -36.898723"
                                       :class="['form-control', {'is-invalid': form.errors.has('latitude')}]"
                                       v-model="form.latitude">
                                <small class="form-text text-danger" v-if="form.errors.has('latitude')">
                                    {{ form.errors.first('latitude') }}
                                </small>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="longitude">
                                    Longitude
                                    <required/>
                                </label>
                                <input type="text"
                                       name="longitude"
                                       id="longitude"
                                       placeholder="E,g. -36.898723"
                                       :class="['form-control', {'is-invalid': form.errors.has('longitude')}]"
                                       v-model="form.longitude">
                                <small class="form-text text-danger" v-if="form.errors.has('longitude')">
                                    {{ form.errors.first('longitude') }}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="basal_area">
                            Basal Area
                            <required/>
                        </label>
                        <div class="input-group">
                            <input type="text"
                                   name="basal_area"
                                   id="basal_area"
                                   placeholder="E,g. 36"
                                   :class="['form-control', {'is-invalid': form.errors.has('basal_area')}]"
                                   v-model="form.basal_area">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    ft<sup>2</sup>/ac
                                </span>
                            </div>
                        </div>
                        <small class="form-text text-danger" v-if="form.errors.has('basal_area')">
                            {{ form.errors.first('basal_area') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="ground_cover">
                            Ground and Shrub Cover
                        </label>
                        <div class="input-group">
                            <select type="text"
                                    name="ground_cover"
                                    id="ground_cover"
                                    :class="['form-control', {'is-invalid': form.errors.has('ground_cover')}]"
                                    v-model="form.ground_cover">
                                <option value="">Select an Option</option>
                                <option v-for="option in options.percentages" :value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <small class="form-text text-danger" v-if="form.errors.has('ground_cover')">
                            {{ form.errors.first('ground_cover') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="subcanopy">
                            Subcanopy
                        </label>
                        <div class="input-group">
                            <select type="text"
                                    name="subcanopy"
                                    id="subcanopy"
                                    :class="['form-control', {'is-invalid': form.errors.has('subcanopy')}]"
                                    v-model="form.subcanopy">
                                <option value="">Select an Option</option>
                                <option v-for="option in options.percentages" :value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <small class="form-text text-danger" v-if="form.errors.has('subcanopy')">
                            {{ form.errors.first('subcanopy') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="canopy">
                            Canopy
                        </label>
                        <div class="input-group">
                            <select type="text"
                                    name="canopy"
                                    id="canopy"
                                    :class="['form-control', {'is-invalid': form.errors.has('canopy')}]"
                                    v-model="form.canopy">
                                <option value="">Select an Option</option>
                                <option v-for="option in options.percentages" :value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <small class="form-text text-danger" v-if="form.errors.has('canopy')">
                            {{ form.errors.first('canopy') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="is_protected">
                            Is plot enclosed or protected from deer?
                        </label>
                        <div class="input-group">
                            <select type="text"
                                    name="is_protected"
                                    id="is_protected"
                                    :class="['form-control', {'is-invalid': form.errors.has('is_protected')}]"
                                    v-model="form.is_protected">
                                <option value="">Select an Option</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <small class="form-text text-danger" v-if="form.errors.has('is_protected')">
                            {{ form.errors.first('is_protected') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="protection_seasons">
                            If yes, for how many growing seasons?
                        </label>
                        <div class="input-group">
                            <select type="text"
                                    name="protection_seasons"
                                    id="protection_seasons"
                                    :class="['form-control', {'is-invalid': form.errors.has('protection_seasons')}]"
                                    v-model="form.protection_seasons">
                                <option value="">Select an Option</option>
                                <option v-for="option in options.seasons" :value="option">
                                    {{ option }}
                                </option>
                            </select>
                        </div>
                        <small class="form-text text-danger" v-if="form.errors.has('protection_seasons')">
                            {{ form.errors.first('protection_seasons') }}
                        </small>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-light ml-auto" type="button" @click.prevent="$emit('close')">Close</button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import Modal from '../components/Modal/Modal'
  import ModalCard from '../components/Modal/ModalCard'
  import ModalHeader from '../components/Modal/ModalHeader'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import ModalTitle from '../components/Modal/ModalTitle'
  import Close from '../components/Modal/Close'
  import Form from './Form'
  import Required from '../components/Required'
  import Icon from '../components/Icon'
  import Options from '../helpers/Options'

  export default {
    name: 'PlotForm',

    components: {
      Icon,
      Required,
      Close,
      ModalTitle,
      ModalFooter,
      ModalBody,
      ModalHeader,
      ModalCard,
      Modal,
    },

    props: {
      site: {required: true},
      plot: {required: false, type: Object, default: null},
    },

    data() {
      return {
        loading: false,
        form   : new Form({
          site_id           : this.site.id,
          number            : '',
          latitude          : '',
          longitude         : '',
          basal_area        : '',
          ground_cover      : '',
          subcanopy         : '',
          canopy            : '',
          is_protected      : '',
          protection_seasons: '',
        }),
        options: Options,
      }
    },

    mounted() {
      if (this.plot) {
        this.form.setDefault(this.plot)
      }
    },

    methods: {
      submit() {
        if (this.plot) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        this.loading = true
        try {
          const {data} = await this.form.post('/web/plots')
          this.$notify({
            type: 'success',
            text: 'Plot created successfully',
          })
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              type: 'error',
              text: 'Unable to process the request. Please try refreshing the page.',
            })
            console.error(e)
          }
        }
        this.loading = false
      },

      async update() {
        this.loading = true
        try {
          const {data} = await this.form.put('/web/plots')
          this.$notify({
            type: 'success',
            text: 'Plot updated successfully',
          })
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              type: 'error',
              text: 'Unable to process the request. Please try refreshing the page.',
            })
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
