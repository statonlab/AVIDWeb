<template>
    <div>
        <div class="card">
            <div class="card-body">
                <reminders-calendar/>
            </div>
        </div>
    </div>
</template>

<script>

  import RemindersCalendar from '../components/RemindersCalendar'
  export default {
    name: 'CalendarReminders',
    components: {RemindersCalendar},
  }
</script>

<style scoped>

</style>
