<template>
    <div>
        <calendar :events="events"
                  @dateClick="dateClick($event)"
                  @eventClick="eventClick($event)"
        />

        <calendar-modal
                v-if="event"
                @close="event = null"
                :event-id="event"/>
    </div>
</template>

<script>
  import Calendar from '../Calendar'
  import moment from 'moment'
  import CalendarModal from '../CalendarModal'

  export default {
    name: 'RemindersCalendar',

    components: {CalendarModal, Calendar},

    data() {
      return {
        event : null,
        events: [
          {
            events         : async (info, callback, fail) => {
              try {
                const events = await this.getEvents(info)
                callback(events)
              } catch (e) {
                console.error(e)
              }
            },
            textColor      : '#23885e',
            backgroundColor: 'rgba(46, 176, 122, 0.1)',
            borderColor    : 'rgba(46, 176, 122, 0.3)',
          },
        ],
      }
    },

    methods: {
      async getEvents(info) {
        const date_start = moment(info.start).format('YYYY-MM-DD')
        const date_end   = moment(info.end).format('YYYY-MM-DD')
        try {
          const {data} = await axios.get(`/web/reminder-events`, {
            params: {
              date_start,
              date_end,
            },
          })

          return data.map(event => {
            return {
              title: `Visit ${event.site.name}`,
              date : event.date,
              id   : event.id,
            }
          })
        } catch (e) {
          console.error(e)
        }
      },

      dateClick(info) {
        console.log(info)
      },

      eventClick(info) {
        this.event = info.event.id
      },
    },
  }
</script>

<style scoped>

</style>
