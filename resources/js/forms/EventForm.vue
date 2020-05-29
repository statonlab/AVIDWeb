<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="submit()" @keydown="form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title v-if="event">Update "{{ event.title }}"</modal-title>
                    <modal-title v-else>Create an Event</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label>
                            Title
                            <required/>
                        </label>
                        <input
                                type="text"
                                :class="['form-control',  {'is-invalid': form.errors.has('title')}]"
                                name="title"
                                id="title"
                                v-model="form.title"
                                autofocus>
                        <small class="form-text text-danger" v-if="form.errors.has('title')">
                            {{ form.errors.first('title') }}
                        </small>
                    </div>

                    <div class="row position-static">
                        <div class="form-group col-lg-6 position-static">
                            <label>
                                Event Start
                                <required/>
                            </label>
                            <date-picker
                                    v-model="start_date"
                                    :popover="{ visibility: 'click' }"
                                    color="green"
                                    :input-props="{
                                        class: 'form-control'+(form.errors.has('date') ? ' is-invalid':''),
                                        placeholder: 'Start Date',
                                    }"/>
                            <p class="mb-0 form-text text-danger" v-if="form.errors.has('date')">
                                {{ form.errors.first('date') }}
                            </p>
                        </div>

                        <div class="form-group col-lg-3 position-static">
                            <label>
                                Hour
                                <required/>
                            </label>
                            <select type="text"
                                    name="start-hour"
                                    id="start-hour"
                                    class="form-control"
                                    v-model="start_hour">
                                <option v-for="hour in options.hours" :value="hour">{{hour}}</option>
                            </select>
                        </div>

                        <div class="form-group col-lg-3 position-static">
                            <label>
                                Minute
                                <required/>
                            </label>
                            <select type="text"
                                    name="start-minute"
                                    id="start-minute"
                                    class="form-control"
                                    v-model="start_minute">
                                <option v-for="minute in options.minutes" :value="minute">{{minute}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row position-static">
                        <div class="form-group col-lg-6 position-static">
                            <label>
                                Event End
                            </label>
                            <date-picker
                                    v-model="end_date"
                                    :popover="{ visibility: 'click' }"
                                    color="green"
                                    :input-props="{
                                        class: 'form-control'+(form.errors.has('date') ? ' is-invalid':''),
                                        placeholder: 'End Date',
                                    }"/>
                            <p class="mb-0 form-text text-danger" v-if="form.errors.has('date')">
                                {{ form.errors.first('date') }}
                            </p>
                        </div>

                        <div class="form-group col-lg-3 position-static">
                            <label>
                                Hour
                            </label>
                            <select type="text"
                                    name="end-hour"
                                    id="end-hour"
                                    class="form-control"
                                    v-model="end_hour">
                                <option v-for="hour in options.hours" :value="hour">{{hour}}</option>
                            </select>
                        </div>

                        <div class="form-group col-lg-3 position-static">
                            <label>
                                Minute
                            </label>
                            <select type="text"
                                    name="end-minute"
                                    id="end-minute"
                                    class="form-control"
                                    v-model="end_minute">
                                <option v-for="minute in options.minutes" :value="minute">{{minute}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row position-static">
                        <div class="form-group col-lg-6 position-static">
                            <label>
                                Timezone
                                <required/>
                            </label>
                            <select type="text"
                                    name="timezone"
                                    id="timezone"
                                    class="form-control"
                                    v-model="form.timezone">
                                <option v-for="timezone in options.timezones" :value="timezone">{{timezone}}</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-6 position-static">
                            <label>
                                Event Type
                                <required/>
                            </label>
                            <select type="text"
                                    name="event-type"
                                    id="event-type"
                                    class="form-control"
                                    v-model="form.event_type">
                                <option value="In-Person">In-Person</option>
                                <option value="Webinar">Webinar</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="description">
                            Description
                            <required/>
                        </label>
                        <textarea type="text"
                                  class="form-control"
                                  id="description"
                                  name="description"
                                  v-model="form.description"
                                  placeholder="Description" />
                        <span class="form-text text-danger" v-if="form.errors.has('description')">
                            {{ form.errors.first('description') }}
                        </span>
                    </div>

                    <div class="form-group">
                        <label>
                            Address
                        </label>
                        <input
                                type="text"
                                :class="['form-control',  {'is-invalid': form.errors.has('title')}]"
                                name="address"
                                id="address"
                                v-model="form.address"
                                placeholder="Address"
                                autofocus>
                        <small class="form-text text-danger" v-if="form.errors.has('address')">
                            {{ form.errors.first('address') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label>
                            Image Upload
                        </label>
                        <div class="row" v-if="!showFileUpload">
                            <div class="col-4">
                                <img class="img-fluid rounded" :src="event.image.url" v-if="event.image"/>
                            </div>
                            <div class="col-8 mt-auto">
                                <a href="#"
                                   class="btn btn-link"
                                   v-on:click.stop="showFileUpload = true">
                                    <span>Change Image</span>
                                </a>
                            </div>
                        </div>
                        <div class="input-group mb-3" v-if="showFileUpload">
                            <div class="custom-file">
                                <input type="file"
                                       class="custom-file-input"
                                       id="imageUpload"
                                       accept="image/*"
                                       @change="fileChanged($event)">
                                <label class="custom-file-label" for="imageUpload">
                                    {{form.image ? form.image.name : 'Choose file'}}
                                </label>
                            </div>
                        </div>

                        <button type="button"
                                class="btn btn-link"
                                v-if="showFileUpload && this.event && this.event.image"
                                @click="cancel()">
                            <span>Cancel Image Change</span>
                        </button>
                    </div>

                    <div class="form-group">
                        <label>
                            Link
                        </label>
                        <input type="text"
                               :class="['form-control',  {'is-invalid': form.errors.has('link')}]"
                               name="link"
                               id="link"
                               placeholder="Link"
                               v-model="form.url">
                        <small class="form-text text-danger" v-if="form.errors.has('link')">
                            {{ form.errors.first('link') }}
                        </small>
                    </div>

                    <div class="form-group">
                        <label for="contact-info">
                            Contact Information
                        </label>
                        <textarea type="text"
                                  class="form-control"
                                  id="contact-info"
                                  name="contact-info"
                                  v-model="form.contact_info"
                                  placeholder="Contact information" />
                        <span class="form-text text-danger" v-if="form.errors.has('contact')">
                            {{ form.errors.first('contact') }}
                        </span>
                    </div>

                    <div class="form-group">
                        <label class="mb-0">
                            Notification Date
                        </label>
                        <p class="form-text text-muted">
                            If a notification date is set, all users will be notified about this event at the given date.
                        </p>
                        <date-picker
                                v-model="notification_date"
                                :popover="{ placement: 'bottom', visibility: 'click' }"
                                color="green"
                                :input-props="{
                                    class: 'form-control'+(form.errors.has('date') ? ' is-invalid':''),
                                    placeholder: 'Notification Date',
                                }"/>
                        <p class="mb-0 form-text text-danger" v-if="form.errors.has('date')">
                            {{ form.errors.first('date') }}
                        </p>
                    </div>
                </modal-body>
                <modal-footer>
                    <button type="submit" class="btn btn-primary" :disabled="loading">
                        <inline-spinner
                                v-if="loading"
                        />
                        <span>Save</span>
                    </button>
                    <button type="button" class="btn ml-auto" @click="$emit('close')">Cancel</button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import Modal from '../components/Modal/Modal'
  import ModalCard from '../components/Modal/ModalCard'
  import ModalHeader from '../components/Modal/ModalHeader'
  import Close from '../components/Modal/Close'
  import ModalTitle from '../components/Modal/ModalTitle'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import Form from './Form'
  import Required from '../components/Required'
  import Options from '../helpers/Options'
  import InlineSpinner from '../components/InlineSpinner'
  import DatePicker from 'v-calendar/lib/components/date-picker.umd'
  import moment from 'moment'

  export default {
    name: 'EventForm',

    components: {
      InlineSpinner,
      Required,
      ModalFooter,
      ModalBody,
      ModalTitle,
      Close,
      ModalHeader,
      ModalCard,
      Modal,
      DatePicker,
    },

    props: {
      event: {required: false, default: null, type: Object},
    },

    mounted() {
      if (this.event) {
        this.form.setDefault({
          ...this.event,
          image            : null,
          event_start      : this.event.event_start ? moment.utc(this.event.event_start).format('YYYY-MM-DD h:mm') : null,
          event_end        : this.event.event_start ? moment.utc(this.event.event_end).format('YYYY-MM-DD h:mm') : null,
          notification_date: this.event.notification_date ? moment.utc(this.event.notification_date).format('YYYY-MM-DD') : null
        })

        this.notification_date = this.event.notify_at ? moment(this.event.notify_at).toDate() : null
        this.start_date = moment(this.event.starts_at).toDate()
        this.start_hour = moment.utc(this.event.event_start).format('HH')
        this.start_minute = moment.utc(this.event.event_start).format('mm')

        if (this.event.event_end) {
          this.end_date = moment(this.event.ends_at).toDate()
          this.end_hour = moment.utc(this.event.event_end).format('HH')
          this.end_minute = moment.utc(this.event.event_end).format('mm')
        }

        if (this.event.image) {
          this.showFileUpload = false
        }
      }
    },

    data() {
      return {
        notification_date: null,
        start_date       : null,
        start_hour       : '00',
        start_minute     : '00',
        end_date         : null,
        end_hour         : '00',
        end_minute       : '00',
        form          : new Form({
          title            : '',
          description      : '',
          url              : '',
          image            : null,
          event_start      : null,
          event_end        : null,
          notification_date: null,
          contact_info     : null,
          address          : '',
          event_type       : 'In-Person',
          timezone         : 'EST',
        }),
        options       : Options,
        loading       : false,
        showFileUpload: true,
      }
    },

    watch: {
      notification_date(date) {
        this.form.notification_date = date ? moment.utc(date).format('YYYY-MM-DD') : null
      }
    },

    methods: {
      submit() {
        if (!this.event) {
          this.create()
        } else {
          this.update()
        }
      },

      async create() {
        this.loading = true
        if (this.form.image) {
          this.form.setAsFile('image')
        }
        this.form.event_start = moment.utc(this.start_date).format('YYYY-MM-DD') + ' ' + this.start_hour + ':' + this.start_minute
        this.form.event_end   = moment.utc(this.end_date).format('YYYY-MM-DD')   + ' ' + this.end_hour   + ':' + this.end_minute
        try {
          const {data} = await this.form.post('/web/events')
          this.$notify({
            text: 'Event created successfully',
            type: 'success',
          })
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              text: 'Could not process your request at this time. please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
        this.loading = false
      },

      async update() {
        this.loading = true
        if (this.form.image) {
          this.form.setAsFile('image')
        }
        this.form.event_start = moment.utc(this.start_date).format('YYYY-MM-DD') + " " + this.start_hour + ':' + this.start_minute
        this.form.event_end   = moment.utc(this.end_date).format('YYYY-MM-DD')   + ' ' + this.end_hour   + ':' + this.end_minute
        try {
          const {data} = await this.form.post(`/web/events/${this.event.id}/update`)
          this.$notify({
            text: 'Event updated successfully',
            type: 'success',
          })
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              text: 'Could not process your request at this time. please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
        this.loading = false
      },

      fileChanged(event) {
        this.form.image = event.target.files[0]
      },

      cancel() {
        this.showFileUpload = false
        this.form.setAsNotFile('image')
        this.form.image = null
      },
    },
  }
</script>

<style scoped>
    .form-img {
        width: 100%;
        height: 200px;
        border-radius: 6px;
        object-fit: cover;
        background-color: whitesmoke;
    }
</style>
