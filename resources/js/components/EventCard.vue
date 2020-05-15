<template>
    <div class="card position-relative">
        <img class="card-img-top"
             :src="event.image ? event.image.url : '/img/placeholder.png'"/>
        <div class="card-body">
            <p class="font-weight-bold mb-1">{{event.title}}</p>
            <p class="text-muted">{{moment.utc(event.event_start).format('MMM Do, YYYY [at] H:mm')}}</p>
            <span class="text-muted d-block text-overflow-ellipsis no-wrap" :title="event.description">
                {{event.description}}
            </span>
        </div>
        <div class="card-footer pt-0 d-flex px-2 pb-2 align-items-center">
            <button class="btn btn-link"
                 @click.prevent="update()">
                <span>Edit Event</span>
            </button>
            <div class="ml-auto">
                <button type="button"
                        class="btn btn-link-dark btn-sm"
                        v-tooltip="'Delete'"
                        :disabled="deleting"
                        @click.prevent="destroy()">
                    <inline-spinner v-if="deleting"/>
                    <icon name="trash" v-if="!deleting"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from '../components/Icon'
  import InlineSpinner from '../components/InlineSpinner'
  import moment from 'moment'

  export default {
    name: 'EventCard',

    components: {
      Icon,
      InlineSpinner,
    },

    props: {
      event: {required: true, type: Object},
    },

    data() {
      return {
        moment,
        deleting: false,
      }
    },

    methods: {
      update() {
        this.$emit('update')
      },

      destroy() {
        this.$confirm({
          title    : `Delete ${this.event.title}?`,
          text     : `Deleting the event is a permanent action.`,
          onConfirm: async () => {
            this.deleting = true
            try {
              await axios.delete(`/web/events/${this.event.id}`)
              this.$emit('delete')
            } catch (e) {
              this.$alert(`Unable to delete ${this.event.title}. Please try refreshing the page.`)
              console.error(e)
            }
            this.deleting = false
          },
        })
      },
    }
  }
</script>

<style scoped>
    .text-overflow-ellipsis {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-img-top {
        object-fit: cover;
        width: 100%;
        height: 200px;
    }
</style>
