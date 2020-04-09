<template>
    <modal @close="$emit('close')">
        <form action="" @submit.prevent="save" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title>New Measurement</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body class="position-static">
                    <div class="row position-static">
                        <div class="form-group col-lg-6 position-static">
                            <label>
                                Date
                                <required/>
                            </label>
                            <date-picker
                                    v-model="date"
                                    color="green"
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
                </modal-body>
                <modal-footer class="d-flex">
                    <button type="submit"
                            :disabled="saving"
                            class="btn btn-primary">
                        <inline-spinner v-if="saving"/>
                        <span>Save</span>
                    </button>

                    <button type="button"
                            :disabled="saving"
                            class="ml-auto btn btn-light"
                            @click.prevent="$emit('close')">
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
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import ModalTitle from '../components/Modal/ModalTitle'
  import Close from '../components/Modal/Close'
  import Required from '../components/Required'
  import Form from './Form'
  import DatePicker from 'v-calendar/lib/components/date-picker.umd'
  import InlineSpinner from '../components/InlineSpinner'
  import moment from 'moment'

  export default {
    name: 'MeasurementForm',

    components: {
      InlineSpinner,
      Required,
      Close,
      ModalTitle,
      ModalFooter,
      ModalBody,
      ModalHeader,
      ModalCard,
      Modal,
      DatePicker,
    },

    props: {
      plant      : {required: true, type: Object},
      measurement: {required: false, type: Object},
    },

    beforeMount() {
      if (this.measurement) {
        this.form.setDefault({
          ...this.measurement,
          is_located: this.measurement.is_located ? '1' : '0',
          is_alive: this.measurement.is_alive === null ? '' : (this.measurement.is_alive ? '1' : '0'),
          date: this.measurement.date ? moment(this.measurement.date).format('YYYY-MM-DD') : null,
        })
        this.date = this.measurement.date ? moment(this.measurement.date).toDate() : null
      }
    },

    data() {
      return {
        saving: false,
        date  : null,
        form  : new Form({
          is_located: '0',
          is_alive  : '',
          date      : null,
          height    : '',
        }),
      }
    },

    watch: {
      date(date) {
        this.form.date = date ? moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD') : null
      },
    },

    methods: {
      save() {
        if (this.measurement) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        this.form.errors.clearAll()
        this.saving = true
        try {
          const {data} = await this.form.post(`/web/plants/${this.plant.id}/measurements`)
          this.$emit('create', data)
        } catch (e) {
          if (e.response && e.response.status !== 422) {
            this.$notify({
              text: 'Unable to save data. Please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
        this.saving = false
      },

      async update() {
        this.form.errors.clearAll()
        this.saving = true
        try {
          const {data} = await this.form.put(`/web/measurements/${this.measurement.id}`)
          this.$emit('update', data)
        } catch (e) {
          if (e.response && e.response.status !== 422) {
            this.$notify({
              text: 'Unable to save data. Please try refreshing the page.',
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
