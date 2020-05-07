<template>
    <div>
        <full-calendar defaultView="dayGridMonth"
                       :plugins="calendarPlugins"
                       :header="{
                         center: 'title',
                         left: 'listWeek,dayGridMonth',
                         right: 'prev,next today',
                        }"
                       :events="events"/>
    </div>
</template>

<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import listPlugin from '@fullcalendar/list'
  import moment from 'moment'

  export default {
    name: 'RemindersCalendar',

    components: {
      FullCalendar,
    },

    data() {
      return {
        calendarPlugins: [dayGridPlugin, listPlugin],
        events         : [
          {
            title          : 'Visit Site Name, Plot #2',
            date           : moment().subtract(1, 'day').format('YYYY-MM-DD'),
            textColor      : '#23885e',
            backgroundColor: 'rgba(46, 176, 122, 0.1)',
            borderColor    : 'rgba(46, 176, 122, 0.3)',
          },
          {
            title          : 'Visit Site Name, Plot #3',
            date           : moment().add(1, 'week').format('YYYY-MM-DD'),
            textColor      : '#23885e',
            backgroundColor: 'rgba(46, 176, 122, 0.1)',
            borderColor    : 'rgba(46, 176, 122, 0.3)',
          },
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
