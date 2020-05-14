<template>
    <div>
        <div class="bg-white border-bottom px-4 py-3 mx-n3 mt-n4 mb-3">
            <div class="d-flex align-items-center">
                <div>
                    <input
                            v-model="search"
                            type="search"
                            name="search"
                            placeholder="Search events"
                            class="form-control search-input"
                    />
                </div>
                <div class="ml-auto">
                    <button class="btn btn-primary" @click.prevent="showEventForm = true">
                        <icon name="add"/>
                        <span>New Event</span>
                    </button>
                </div>
            </div>
        </div>

        <p class="p-4 text-muted mb-0"
           v-if="events.length === 0">No results found.</p>

        <div class="row">
            <div class="col-lg-4 mb-3" v-for="event in events">
                <event-card
                        @update="update(event)"
                        @delete="loadEvents()"
                        :event="event"
                />
            </div>
        </div>

        <event-form v-if="showEventForm"
                   @close="close"
                   @create="eventCreated()"
                   @update="eventUpdated($event)"
                   :event="event"/>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import EventCard from '../components/EventCard'
  import EventForm from '../forms/EventForm'

  export default {
    name: 'Resources',

    components: {
      Icon,
      InlineSpinner,
      EventCard,
      EventForm,
    },

    data() {
      return {
        search        : '',
        events        : [],
        deleting      : [],
        ready         : false,
        loading       : false,
        event         : null,
        showEventForm : false,
      }
    },

    mounted() {
      this.loading = true
      this.setSearchFromParams()
      this.ready = true
      this.loadEvents()
    },

    watch: {
      search() {
        this.$router.replace({
          path : '/app/events',
          query: {
            ...this.$router.query,
            search: this.search,
          },
        }).catch(e => {
        })
        this.loadEvents()
      },

      '$route.query.search': {
        handler() {
          if (this.search !== this.$route.query.search) {
            this.search = this.$route.query.search
          }
        },
      },
    },

    methods: {
      async loadEvents() {
        if (!this.ready) {
          return
        }
        try {
          const {data}   = await axios.get('/web/events', {
            params: {
              search: this.search,
            },
          })
          this.events = data.data
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      },

      update(event) {
        this.event = event
        this.showEventForm = true
      },

      setSearchFromParams() {
        if (this.$route.query.search) {
          this.search = this.$route.query.search
        }
      },

      eventCreated() {
        this.loadEvents()
        this.close()
      },

      eventUpdated(event) {
        this.close()
        this.events = this.events.map(e => e.id === event.id ? event : e)
      },

      close() {
        this.event = null
        this.showEventForm = false
      },
    },
  }
</script>

<style scoped>
    .card-img-top {
        object-fit: cover;
        width: 100%;
        height: 200px;
    }
</style>
