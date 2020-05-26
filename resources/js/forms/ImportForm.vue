<template>
    <modal medium @close="$emit('close')">
        <form action="" @submit.prevent="submit()">
            <modal-card>
                <modal-header>
                    <modal-title>Import</modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <p class="text-muted">If you have filled out an exported data sheet, you can upload it here to automatically generate new measurements.</p>
                    <div class="form-group">
                        <label>
                            File Upload
                        </label>
                        <div class="input-group mb-3">
                            <div class="custom-file">
                                <input type="file"
                                       class="custom-file-input"
                                       id="fileUpload"
                                       accept=".xlsx"
                                       @change="fileChanged($event)">
                                <label class="custom-file-label" for="fileUpload">
                                    {{form.file ? form.file.name : 'Choose file'}}
                                </label>
                            </div>
                        </div>
                        <span class="form-text text-danger" v-for="error in form.errors.errors">
                            {{ error[0] }}
                        </span>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit">
                        <span>Import</span>
                    </button>
                    <button class="btn btn-light ml-auto"
                            type="button"
                            @click.prevent="$emit('close')">
                        Close
                    </button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
  import Modal from '../components/Modal/Modal'
  import ModalCard from '../components/Modal/ModalCard'
  import ModalHeader from '../components/Modal/ModalHeader'
  import ModalTitle from '../components/Modal/ModalTitle'
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import Close from '../components/Modal/Close'
  import Form from './Form'
  import Required from '../components/Required'
  import InlineSpinner from '../components/InlineSpinner'

  export default {
    name: 'SiteForm',

    components: {
      InlineSpinner,
      Required,
      Close,
      ModalFooter,
      ModalBody,
      ModalTitle,
      ModalHeader,
      ModalCard,
      Modal,
    },

    props: {
      site: {required: false, default: null},
    },

    data() {
      return {
        form           : new Form({
          file         : null,
        }),
      }
    },

    methods: {
      async submit() {
        if (this.form.file) {
          this.form.setAsFile('file')
        }
        try {
          const {data} = await this.form.post(`/web/sites/${this.site.id}/import`)
          this.$notify({
            type: 'success',
            text: 'Measurements imported successfully.',
          })
          this.$emit('create', data)
        } catch (e) {
          if (e.response && e.response.status !== 422) {
            this.$notify({
              text: 'Unable to save site. Please try refreshing the page.',
              type: 'error',
            })
          }
          console.error(e)
        }
      },

      fileChanged(event) {
        this.form.file = event.target.files[0]
      },
    },
  }
</script>

<style scoped>

</style>
