<template>
    <form class="tr" @submit.prevent="save">
        <div class="td p-0 border-top-0"></div>
        <div class="td p-0 border-top-0"></div>
        <div class="td p-0" :class="{'outline-primary': focusedCell === 'date'}">
            <date-picker
                    v-model="date"
                    color="green"
                    @popoverWillShow="focusedCell = 'date'"
                    @popoverWillHide="focusedCell = null"
                    :max-date="new Date()"
                    :input-props="{class: 'form-control px-3 border-0 w-100 cell-h', placeholder: 'mm/dd/yyyy' }"
                    :popover="{ visibility: 'click' }">
            </date-picker>
        </div>
        <div class="td p-0" :class="{'outline-primary': focusedCell === 'located'}">
            <select
                    title="Has the plant been located?"
                    @focusin="focusedCell = 'located'"
                    @focusout="focusedCell = null"
                    v-model="form.is_located"
                    class="form-control border-0 py-0 cell-h">
                <option value="">Located?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        <div class="td p-0" :class="{'outline-primary': focusedCell === 'alive'}">
            <select @focusin="focusedCell = 'alive'"
                    @focusout="focusedCell = null"
                    title="Is the plant alive?"
                    v-model="form.is_alive"
                    class="form-control border-0 py-0 cell-h focus-outlined">
                <option value="">Alive?</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        <div class="td p-0" :class="{'outline-primary': focusedCell === 'height'}">
            <div class="d-flex">
                <input class="form-control px-3 border-0 w-100 cell-h focus-outlined flex-grow-1"
                       @focusin="focusedCell = 'height'"
                       @focusout="focusedCell = null"
                       type="number"
                       step="any"
                       min="0"
                       title="Height"
                       v-model="form.height"
                       placeholder="Height">
                <button class="cell-h btn btn-primary rounded-0"
                        :class="{'text-transparent': loading}"
                        type="submit"
                        :disabled="loading">
                    <inline-spinner v-if="loading" class="position-absolute text-white ml-2"/>
                    <span>Save</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
  import DatePicker from 'v-calendar/lib/components/date-picker.umd'
  import Form from '../../forms/Form'
  import InlineSpinner from '../InlineSpinner'
  import moment from 'moment'

  export default {
    name: 'InlineMeasurementForm',

    components: {InlineSpinner, DatePicker},

    props: {
      plant      : {required: true},
      defaultDate: {required: false, default: null},
    },

    data() {
      return {
        date       : null,
        focusedCell: null,
        loading    : false,
        form       : new Form({
          date      : '',
          is_alive  : '',
          is_located: '',
          height    : '',
        }),
        ready      : true,
        unsavedChanges: false,
      }
    },

    watch: {
      date(date) {
        this.form.date = this.getDate(date)

        if (this.ready) {
          this.$emit('date', date)
        }
      },

      'form.is_alive': {
        handler() {
          this.emitChanges()
        }
      },

      'form.is_located': {
        handler() {
          this.emitChanges()
        }
      },

      'form.height': {
        handler() {
          this.emitChanges()
        }
      },

      defaultDate: {
        immediate: true,
        handler(date) {
          // Prevent infinite loop
          this.ready = false
          this.date  = date
          this.$nextTick(() => {
            this.ready = true
          })
        },
      },
    },

    methods: {
      async save() {
        this.loading = true
        try {
          const {data} = await this.form.post(`/web/plants/${this.plant.id}/measurements`)
          this.$emit('create', data)
          this.$notify({
            type: 'success',
            text: 'Measurement created successfully',
          })
          this.form.reset()
          this.form.date = this.getDate(this.date)
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
        this.loading = false
      },

      getDate(date) {
        return date ? moment(date).format('YYYY-MM-DD') : ''
      },

      isFormEmpty() {
        return (this.form.is_alive === '' && this.form.is_located === '' && this.form.height === '')
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
