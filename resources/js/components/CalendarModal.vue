<template>
    <modal @close="$emit('close')" medium>
        <modal-card>
            <modal-header>
                <modal-title>
                    Visit <span v-if="event">{{event.site.name}}</span>
                </modal-title>
                <close @click="$emit('close')"/>
            </modal-header>
            <modal-body class="rounded-bottom">
                <inline-spinner v-if="loading" class="text-primary"/>
                <div v-if="event" class="row">
                    <div class="col-sm-8">
                        <p class="text-muted">
                            This reminder repeats every {{ event.reminder.days | plural('day', 'days') }}
                        </p>

                        <p><strong>Site Details</strong></p>
                        <table class="table table-nowrap table-bordered table-sm">
                            <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{{ event.site.name }}</td>
                            </tr>
                            <tr>
                                <th>Location</th>
                                <td>{{ event.site.state.name }}, {{ event.site.county.name }}</td>
                            </tr>
                            <tr>
                                <th class="no-wrap">Last Measurement</th>
                                <td>{{ formatDate(event.site.last_measured_at) }}</td>
                            </tr>
                            </tbody>
                        </table>
                        <p><strong>Plots Overview</strong></p>
                        <table class="table table-nowrap table-bordered table-sm">
                            <thead>
                            <tr>
                                <th>Plot</th>
                                <th>Last Measurement</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="plot in event.site.plots">
                                <td>Plot #{{ plot.number }}</td>
                                <td>{{ formatDate(plot.last_measured_at) }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-4">
                        <p class="pl-2"><strong>Actions</strong></p>

                        <a :href="`/web/sites/${event.site.id}/export`" target="_blank" class="btn btn-link w-100 d-block px-2"
                                v-tooltip.top="'Download an excel sheet'">
                            <icon name="reader-outline"/>
                            <span>Download Sheet</span>
                        </a>

                        <router-link :to="`/app/sites/${event.site.id}`"
                                     class="btn btn-link w-100 d-block px-2">
                            <icon name="eye-outline"/>
                            <span>Visit Site Page</span>
                        </router-link>
<!--                        <button class="btn btn-link w-100 d-block px-2 mt-1">-->
<!--                            <icon name="close"/>-->
<!--                            <span>Cancel Reminder</span>-->
<!--                        </button>-->
                    </div>
                </div>
            </modal-body>
        </modal-card>
    </modal>
</template>

<script>
  import Modal from './Modal/Modal'
  import ModalCard from './Modal/ModalCard'
  import ModalHeader from './Modal/ModalHeader'
  import ModalBody from './Modal/ModalBody'
  import ModalFooter from './Modal/ModalFooter'
  import ModalTitle from './Modal/ModalTitle'
  import InlineSpinner from './InlineSpinner'
  import Close from './Modal/Close'
  import moment from 'moment'
  import Icon from './Icon'

  export default {
    name: 'CalendarModal',

    props: {
      eventId: {required: true, type: Number | String},
    },

    components: {Icon, Close, InlineSpinner, ModalTitle, ModalFooter, ModalBody, ModalHeader, ModalCard, Modal},

    data() {
      return {
        loading: true,
        event  : null,
      }
    },

    mounted() {
      this.loadEvent()
    },

    methods: {
      async loadEvent() {
        this.loading = true
        try {
          const {data} = await axios.get(`/web/reminder-events/${this.eventId}`)
          this.event   = data
        } catch (e) {
          this.$alert('Unable to load event. Please try refreshing the page.')
        }
        this.loading = false
      },

      formatDate(date) {
        if (!date) {
          return ''
        }
        return moment(date).format('MMM Do, YYYY')
      },
    },
  }
</script>

<style scoped>

</style>
