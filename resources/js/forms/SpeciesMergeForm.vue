<template>
  <modal @close="$emit('close')">
    <form action="#" @submit.prevent="merge">
      <modal-card>
        <modal-header>
          <modal-title>Merge Species</modal-title>
          <close @click="$emit('close')"/>
        </modal-header>
        <modal-body>
          <div class="d-flex align-items-center justify-content-center" v-if="loading">
            <inline-spinner class="text-primary"/>
          </div>
          <div v-else>
            <p class="font-weight-bold">
              Merging the following species
            </p>
            <ul>
              <li v-for="item in species">
                <strong>{{ item.name }}</strong>
                <div v-if="item.type">
                  <span class="text-muted">{{ item.type.name }}</span>
                </div>
              </li>
            </ul>

            <div class="form-group">
              <label for="type">Select Plant Type
                <required/>
              </label>
              <select name="type" id="type" v-model="form.type" class="custom-select">
                <option value="">Select Plant Type</option>
                <option :value="type.id" v-for="type in plantTypes">
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>
        </modal-body>
        <modal-footer class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary" :disabled="saving">
            <inline-spinner v-if="saving"/>
            <span>Merge Species</span>
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
import Modal from '../components/Modal/Modal'
import ModalCard from '../components/Modal/ModalCard'
import ModalHeader from '../components/Modal/ModalHeader'
import ModalTitle from '../components/Modal/ModalTitle'
import ModalBody from '../components/Modal/ModalBody'
import ModalFooter from '../components/Modal/ModalFooter'
import InlineSpinner from '../components/InlineSpinner'
import Close from '../components/Modal/Close'
import Form from './Form'
import Errors from './Errors'
import Required from '../components/Required'

export default {
  name: 'SpeciesMergeForm',

  props: {selected: {type: Array}},

  components: {Required, Close, InlineSpinner, ModalFooter, ModalBody, ModalTitle, ModalHeader, ModalCard, Modal},

  data() {
    return {
      loading   : true,
      species   : [],
      plantTypes: [],
      saving    : false,
      form      : new Form({
        type   : '',
        species: [],
      }),
    }
  },

  mounted() {
    this.loadOptions()
  },

  watch: {
    selected: {
      immediate: true,
      handler() {
        this.form.species = this.selected
      },
      deep     : true,
    },
  },

  methods: {
    async loadOptions() {
      try {
        const {data}    = await axios.get(`/web/species/merge-options`, {
          params: {
            species: this.selected,
          },
        })
        this.plantTypes = data.types
        this.species    = data.species
      } catch (e) {
        if (e.response && e.response.status === 422) {
          const errors = new Errors(e.response.data)
          this.$alert(errors.toArray().join(' '))
        } else if (e.response && e.response.status === 403) {
          this.$alert('You are not authorized to complete this action.')
        } else {
          this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
        }
        this.$emit('close')
        console.error(e)
      }
      this.loading = false
    },

    async merge() {
      if (this.saving) {
        return
      }
      this.saving = true

      try {
        await this.form.post(`/web/species/merge-species`)
        this.$notify({
          type: 'success',
          text: 'Species merged successfully.',
        })
        this.$emit('merged')
      } catch (e) {
        if (e.response && e.response.status === 422) {
          const errors = new Errors(e.response.data)
          this.$alert(errors.toArray().join(' '))
        } else if (e.response && e.response.status === 403) {
          this.$alert('You are not authorized to complete this action.')
        } else {
          this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
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