<template>
    <div>
        <full-calendar defaultView="dayGridMonth"
                       :plugins="calendarPlugins"
                       :event-sources="events"
                       @dateClick="$emit('dateClick', $event)"
                       @eventClick="$emit('eventClick', $event)"
                       :header="{
                          center: 'title',
                          left: 'listWeek,dayGridMonth',
                          right: 'prev,next today',
                       }"/>
    </div>
</template>

<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import listPlugin from '@fullcalendar/list'
  import interactionPlugin from '@fullcalendar/interaction'

  export default {
    name: 'Calendar',

    components: {
      FullCalendar,
    },

    props: {
      events: {required: true},
    },

    data() {
      return {
        calendarPlugins: [
          dayGridPlugin,
          listPlugin,
          interactionPlugin,
        ],
      }
    },
  }
</script>

<style scoped lang='scss'>
    @import '~@fullcalendar/core/main.css';
    @import '~@fullcalendar/daygrid/main.css';
    @import '~@fullcalendar/list/main.css';
</style>
