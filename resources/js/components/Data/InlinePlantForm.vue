<template>
  <form class="tr" @submit.prevent="importPlant">
    <div class="th" :class="{'border-top-0': !showPlotNumber}">
      <span v-if="showPlotNumber">{{ `Plot #${plot.number}` }}</span>
    </div>
    <div class="td p-0" :class="{'outline-primary': focusedCell === 'tag'}">
      <input class="form-control px-3 border-0 w-100 cell-h focus-outlined flex-grow-1"
             @focusin="focusedCell = 'tag'"
             @focusout="focusedCell = null"
             type="number"
             step="any"
             min="1"
             title="Tag"
             v-model="form.tag"
             placeholder="Tag">
    </div>
    <div class="td p-0" :class="{'outline-primary': focusedCell === 'type'}">
      <select
          title="Plant Type"
          @focusin="focusedCell = 'type'"
          @focusout="focusedCell = null"
          v-model="form.plant_type_id"
          class="form-control border-0 py-0 cell-h">
        <option v-for="plant in plants" :value="plant.id">
          {{plant.name}}
        </option>
      </select>
    </div>
    <div class="td p-0" :class="{'outline-primary': focusedCell === 'species'}">
      <dropdown
          class="mb-1"
          id="species"
          :autocomplete="true"
          :no-border="true"
          v-model="form.species_id"
          :options="species"
          :error="form.errors.has('species_id')"
          :total="total"
          @search="$emit('search', $event)"
      />
    </div>
    <div class="td p-0" :class="{'outline-primary': focusedCell === 'quadrant'}">
      <div class="d-flex">
        <select @focusin="focusedCell = 'quadrant'"
                @focusout="focusedCell = null"
                title="Quadrant"
                v-model="form.quadrant"
                class="form-control border-0 py-0 cell-h focus-outlined">
          <option value="Northeast">Northeast</option>
          <option value="Northwest">Northwest</option>
          <option value="Southeast">Southeast</option>
          <option value="Southwest">Southwest</option>
        </select>
        <button class="cell-h btn btn-primary rounded-0"
                :class="{'text-transparent': importing}"
                type="submit"
                :disabled="importing">
          <inline-spinner v-if="importing" class="position-absolute text-white ml-2"/>
          <span>Save</span>
        </button>
        <button class="cell-h btn rounded-0 btn-danger"
                :class="{'text-transparent': deleting}"
                :disabled="deleting"
                @click.prevent="deletePlant()">
          <inline-spinner v-if="deleting" class="position-absolute text-white ml-2"/>
          <span>Delete</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Form from '../../forms/Form'
import InlineSpinner from '../InlineSpinner'
import Dropdown from '../Dropdown'
import PlotEntryButton from './PlotEntryButton'

export default {
  name: 'InlinePlantForm',

  components: {InlineSpinner, Dropdown, PlotEntryButton},

  props: {
    plot            : {required: true, type: Object},
    plant           : {required: true, type: Object},
    species         : {required: true, type: Array},
    plants          : {required: true, type: Array},
    showPlotNumber  : {required: false, type: Boolean, default: false},
    total           : {required: false, type: Number, default: 0},
  },

  mounted() {
    if (this.plant) {
      this.form.setDefault(this.plant)
    }
  },

  watch: {
    'form.plant_type_id': {
      handler() {
        this.$emit('plantTypeChanged', this.form.plant_type_id)
      }
    },
  },

  data() {
    return {
      focusedCell: null,
      importing  : null,
      deleting   : null,
      form       : new Form({
        plant_type_id   : this.plants.length > 0 ? this.plants[0].id : '',
        tag             : '',
        quadrant        : 'Northeast',
        species_id      : '',
      }),
      ready      : true,
      unsavedChanges: false,
    }
  },

  methods: {
    async importPlant() {
      this.importing = true
      try {
        const {data} = await this.form.post(`/web/data-quarantine/import/plant/${this.plant.id}`)
        this.$notify({
          type: 'success',
          text: 'Plant imported successfully',
        })
        this.$emit('create', data)
      } catch (e) {
        if (e.response && e.response.status === 422) {
          this.$alert({
            title: 'Please Review The Following',
            text : this.form.errors.toArray().join(' '),
          })
        } else {
          this.$alert('Unable to create measurement. Please try refreshing the page or report the error to us!')
        }
        console.error(e)
      }
      this.importing = false
    },

    deletePlant() {
      if (this.deleting !== null) {
        return
      }

      this.$confirm({
        title    : `Are you sure you want to delete this plant?`,
        text     : 'This action is permanent!',
        onConfirm: async () => {
          this.deleting = this.plant.id
          try {
            await axios.delete(`/web/plants/${this.plant.id}`)
            this.$notify({
              text: 'Plant deleted successfully.',
              type: 'success',
            })
            this.$emit('delete')
          } catch (e) {
            this.$notify({
              text: 'Unable to delete plant. Please try refreshing the page.',
              type: 'error',
            })
          }
          this.deleting = null
        },
      })
    },

    isFormEmpty() {
      return (this.form.quadrant === '' && this.form.tag === '' && this.form.species === '')
    },

    emitChanges() {
      const isEmpty = this.isFormEmpty()

      if (this.unsavedChanges && isEmpty) {
        this.$emit('unset')
      } else if (!this.unsavedChanges && !isEmpty) {
        this.$emit('set')
      }

      this.unsavedChanges = !isEmpty
    }
  },
}
</script>

<style scoped>

</style>
