<template>
    <modal @close="$emit('close')">
        <form action="" @submit.prevent>
            <modal-card>
                <modal-header>
                    <modal-title>New Measurement</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label>
                                Date
                                <required/>
                            </label>
                            <input type="text" class="form-control" v-model="form.date">
                        </div>
                        <div class="form-group col-lg-6">
                            <label for="located">
                                Was Plant Located?
                                <required/>
                            </label>
                            <select name="is_located" id="located" class="form-control" v-model="form.is_located">
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-6" v-if="form.is_located === '1'">
                            <label for="alive">
                                Was Plant Alive?
                                <required/>
                            </label>
                            <select name="is_alive" id="alive" class="form-control">
                                <option value="">Select One</option>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-6" v-if="form.is_located === '1'">
                            <label>
                                Height
                                <required/>
                            </label>
                            <div class="input-group input-appended">
                                <input type="number" class="form-control" step="any" min="0">
                                <div class="input-group-append">
                                    <span class="input-group-text">in.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </modal-body>
                <modal-footer class="d-flex">
                    <button type="submit"
                            class="btn btn-primary">
                        Save
                    </button>

                    <button type="button"
                            class="ml-auto btn btn-light"
                            @click.prevent="$emit('close')">
                        Cancel
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
  import ModalBody from '../components/Modal/ModalBody'
  import ModalFooter from '../components/Modal/ModalFooter'
  import ModalTitle from '../components/Modal/ModalTitle'
  import Close from '../components/Modal/Close'
  import Required from '../components/Required'
  import Form from './Form'

  export default {
    name: 'MeasurementForm',

    components: {Required, Close, ModalTitle, ModalFooter, ModalBody, ModalHeader, ModalCard, Modal},

    data() {
      return {
        form: new Form({
          is_located: '0',
          is_alive  : '1',
          date      : null,
          height    : '',
        }),
      }
    },
  }
</script>

<style scoped>

</style>
