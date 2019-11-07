<template>
    <modal @close="$emit('close')">
        <form @submit.prevent="submit()" @keydown="$event.target && form.errors.clear($event.target.name)">
            <modal-card>
                <modal-header>
                    <modal-title>New Plot</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group">
                        <label for="number">
                            Plot Number
                            <required/>
                        </label>
                        <input type="text"
                               name="number"
                               id="number"
                               :class="['form-control', {'is-invalid': form.errors.has('number')}]"
                               v-model="form.number">
                        <small class="form-text text-danger" v-if="form.errors.has('number')">
                            {{ form.errors.first('number') }}
                        </small>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-light ml-auto" type="button" @click.prevent="$emit('close')">Close</button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import Modal from '../components/Modal/Modal'
  import ModalCard from '../components/Modal/ModalCard'
  import ModalHeader from '../components/Modal/ModalHeader'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import ModalTitle from '../components/Modal/ModalTitle'
  import Close from '../components/Modal/Close'
  import Form from './Form'
  import Required from '../components/Required'

  export default {
    name: 'PlotForm',

    components: {
      Required,
      Close,
      ModalTitle,
      ModalFooter,
      ModalBody,
      ModalHeader,
      ModalCard,
      Modal,
    },

    props: {
      site: {required: true},
      plot: {required: false, type: Object, default: null},
    },

    data() {
      return {
        loading: false,
        form   : new Form({
          site_id: this.site.id,
          number : '',
        }),
      }
    },

    mounted() {
      if (this.plot) {
        this.form.setDefault(this.plot)
      }
    },

    methods: {
      submit() {
        if (this.plot) {
          this.update()
        } else {
          this.create()
        }
      },

      async create() {
        this.loading = true
        try {
          const {data} = await this.form.post('/web/plots')
          this.$emit('create', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              type: 'error',
              text: 'Unable to process the request. Please try refreshing the page.',
            })
            console.error(e)
          }
        }
        this.loading = false
      },

      async update() {
        this.loading = true
        try {
          const {data} = await this.form.put('/web/plots')
          this.$emit('update', data)
        } catch (e) {
          if (!e.response || e.response.status !== 422) {
            this.$notify({
              type: 'error',
              text: 'Unable to process the request. Please try refreshing the page.',
            })
            console.error(e)
          }
        }
        this.loading = false
      },
    },
  }
</script>

<style scoped>

</style>
