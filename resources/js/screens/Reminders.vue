<template>
    <div>
        <div class="d-flex mb-3">
            <div class="flex-grow-1">
                <h1 class="page-title">My Reminders</h1>
                <p class="mb-0 text-muted">Schedule & manage reminders</p>
            </div>
        </div>

        <div class="card mb-3">
            <div class="d-flex card-header align-items-center">
                <div class="flex-grow-1">
                    <strong>Reminders</strong>
                </div>
                <div class="flex-shrink-0">
                    <button class="btn btn-primary" type="button" @click.prevent="showForm = true">
                        <icon name="add"/>
                        <span>New Reminder</span>
                    </button>
                </div>
            </div>

            <div class="card-body p-0 table-responsive">
                <div class="p-3 d-flex align-items-center justify-content-center flex-column text-center"
                     v-if="!loading && reminders.length === 0">
                    <div class="d-flex align-items-center justify-content-center icon-circle">
                        <icon name="notifications"/>
                    </div>
                    <div class="mt-3 mb-3  mx-auto max-w-700">
                        <p><strong>Welcome to Reminders</strong></p>
                        <p class="text-muted">
                            Here you will be able to setup reminders to help you plan
                            your next measurement trips. Reminders will be emailed to
                            you depending on the settings you select for each reminder.
                        </p>
                        <p class="text-muted">
                            Get started by creating a new reminder using the button below.
                        </p>

                        <button class="btn btn-outline-primary" type="button" @click.prevent="showForm = true">
                            <icon name="add"/>
                            <span>New Reminder</span>
                        </button>
                    </div>
                </div>
                <table class="table mb-0 table-middle table-nowrap table-hover" v-if="!loading && reminders.length > 0">
                    <thead>
                    <tr>
                        <th>Reminder</th>
                        <th>Last Measured At</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="reminder in reminders" class="hover-visible-container">
                        <td>
                            <router-link :to="`/app/sites/${reminder.site.id}`">
                                <strong>{{ reminder.site.name }}</strong>
                            </router-link>
                            <div>
                                <strong>{{ reminder.days }} days</strong>
                                <span class="text-muted">after last measurement</span>
                            </div>
                        </td>
                        <td>
                            <span v-if="reminder.site.last_measured_at">{{ moment(reminder.site.last_measured_at).format('MMM Do, YYYY') }}</span>
                        </td>
                        <td>
                            <div class="d-flex justify-content-end hover-visible">
                                <button class="btn btn-link"
                                        v-tooltip.left="'Edit Reminder'"
                                        type="button"
                                        @click.prevent="edit(reminder)">
                                    <icon name="create"/>
                                </button>
                                <button class="btn btn-link"
                                        v-tooltip.right="'Delete Reminder'"
                                        type="button"
                                        @click.prevent="destroy(reminder)">
                                    <icon name="trash"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <reminder-form
                v-if="showForm"
                :reminder="reminder"
                @close="closeForm"
                @create="created"
                @update="updated"
        />
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import ReminderForm from '../forms/ReminderForm'
  import RemindersCalendar from '../components/Calendar'
  import moment from 'moment'

  export default {
    name: 'Reminders',

    components: {RemindersCalendar, ReminderForm, Icon},

    data() {
      return {
        moment,
        reminders: [],
        showForm : false,
        reminder : null,
        loading  : true,
      }
    },

    mounted() {
      this.loadReminders()
    },

    methods: {
      async loadReminders() {
        this.loading = true
        try {
          const {data}   = await axios.get(`/web/reminders`)
          this.reminders = data
        } catch (e) {
          console.error(e)
          this.$alert('Unable to load reminders. Please try refreshing the page.')
        }
        this.loading = false
      },

      created(reminder) {
        this.reminders.push(reminder)
        this.closeForm()
      },

      updated(reminder) {
        this.reminders = this.reminders.map(r => r.id === reminder.id ? reminder : r)
        this.closeForm()
      },

      closeForm() {
        this.showForm = false
        this.reminder = null
      },

      edit(reminder) {
        this.reminder = reminder
        this.showForm = true
      },

      destroy(reminder) {
        this.$confirm({
          title    : 'Delete Reminder?',
          text     : `"${reminder.days} days after last measurement." will be permanently removed.`,
          onConfirm: async () => {
            try {
              await axios.delete(`/web/reminders/${reminder.id}`)
              this.reminders = this.reminders.filter(r => r.id !== reminder.id)
            } catch (e) {
              console.error(e)
              this.$alert('Unable to delete reminder. Please try refreshing the page.')
            }
          },
        })
      },
    },
  }
</script>

<style scoped>

</style>
