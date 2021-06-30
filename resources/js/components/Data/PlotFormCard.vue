<template>
  <form class="card mb-3" @submit.prevent="importPlot">
    <div class="card-header d-flex border-bottom">
      <span class="page-title flex-grow-1">{{ `Plot #${plot.number}` }}</span>
      <div class="flex-shrink-0">
        <button class="btn btn-primary" type="submit">
          <icon name="cloud-upload-outline"/>
          <span>Save</span>
        </button>
        <button class="btn btn-danger" @click.prevent="deletePlot()">
          <icon name="trash-outline"/>
          <span>Delete</span>
        </button>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <div class="d-flex align-items-center mb-1">
            <div>
              <p class="mb-0"><strong>GPS Location</strong></p>
              <div class="mb-0">
                <small class="text-muted">You may use the map to visually select the location.</small>
              </div>
            </div>
          </div>
          <div class="mb-2 form-group">
            <label>
              Latitude
              <required/>
            </label>
            <input type="text"
                   name="latitude"
                   placeholder="E,g. -36.898723"
                   :class="['form-control', {'is-invalid': form.errors.has('latitude')}]"
                   v-model="form.latitude">
            <small class="form-text text-danger" v-if="form.errors.has('latitude')">
              {{ form.errors.first('latitude') }}
            </small>
          </div>
          <div class="mb-2 form-group">
            <label>
              Longitude
              <required/>
            </label>
            <input type="text"
                   name="longitude"
                   placeholder="E,g. -36.898723"
                   :class="['form-control', {'is-invalid': form.errors.has('longitude')}]"
                   v-model="form.longitude">
            <small class="form-text text-danger" v-if="form.errors.has('longitude')">
              {{ form.errors.first('longitude') }}
            </small>
          </div>
          <div class="mb-0 form-group">
            <label>
              Ground and Shrub Cover
              <required/>
            </label>
            <div class="input-group">
              <select type="text"
                      name="ground_cover"
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
            <small class="text-muted">When entering coordinates manually, please verify the location on the map</small>
          </div>
        </div>
        <div class="col-6">
          <clickable-map class="map-height map-mini mb-3"
                         @input="setGpsFromMap($event)"
                         :value="{latitude: form.latitude, longitude: form.longitude}"/>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>
              Subcanopy
              <required/>
            </label>
            <div class="input-group">
              <select type="text"
                      name="subcanopy"
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
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>
              Canopy
              <required/>
            </label>
            <div class="input-group">
              <select type="text"
                      name="canopy"
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
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>
              Is plot enclosed or protected from deer?
              <required/>
            </label>
            <div class="input-group">
              <select type="text"
                      name="is_protected"
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
        </div>
        <div class="col-6">
          <div class="form-group">
            <label>
              If yes, for how many growing seasons?
              <required/>
            </label>
            <div class="input-group">
              <select type="text"
                      name="protection_seasons"
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
        </div>
      </div>

      <div class="form-group">
        <label>Recorders</label>
        <textarea type="text"
                  class="form-control"
                  name="recorders"
                  v-model="form.recorders"
                  placeholder="Type recorders"></textarea>
        <span class="form-text text-danger" v-if="form.errors.has('owner_contact')">
          {{ form.errors.first('owner_contact') }}
        </span>
      </div>

      <div class="form-group">
        <label>
          Basal Area
        </label>
        <div class="input-group">
          <input type="text"
                 name="basal_area"
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
    </div>
  </form>
</template>

<script>
import Required from '../Required'
import Options from '../../helpers/Options'
import Form from '../../forms/Form'
import ClickableMap from '../ClickableMap'
import Icon from '../Icon'

export default {
  name: 'PlotFormCard',

  components: { Required, Options, ClickableMap, Icon },

  props: {
    plot        : {required: true}
  },

  data() {
    return {
      form: new Form({
        number            : this.plot.number,
        latitude          : null,
        longitude         : null,
        basal_area        : '',
        ground_cover      : '',
        subcanopy         : '',
        canopy            : '',
        is_protected      : '',
        protection_seasons: '',
        recorders         : '',
      }),
      options: Options,
    }
  },

  mounted() {
    this.form.setDefault(this.plot)
  },

  methods: {
    async importPlot() {
      try {
        await this.form.post(`/web/data-quarantine/import/plot/${this.plot.id}`)
        this.$emit('imported')
        this.$notify({
          text: 'Plot imported successfully.',
          type: 'success',
        })
        this.form.reset()
      } catch (e) {
        if (e.response && e.response.status === 422) {
          this.$alert({
            title: 'Please Review The Following',
            text : this.form.errors.toArray().join(' '),
          })
        } else {
          this.$alert('Unable to import plot. Please try refreshing the page or report the error to us!')
        }
        console.error(e)
      }
    },

    deletePlot() {
      this.$confirm({
        title    : `Are you sure you want to delete Plot #${this.plot.number}?`,
        text     : 'This action is permanent!',
        onConfirm: async () => {
          try {
            await axios.delete(`/web/plots/${this.plot.id}`)
            this.$emit('deleted')
            this.$notify({
              text: 'Plot deleted successfully.',
              type: 'success',
            })
          } catch (e) {
            console.error(e)
            this.$notify({
              text: 'Unable to delete plot. Please try refreshing the page.',
              type: 'error',
            })
          }
        },
      })
    },

    setGpsFromMap(pos) {
      this.form.latitude  = pos.latitude
      this.form.longitude = pos.longitude
    },
  }
}
</script>