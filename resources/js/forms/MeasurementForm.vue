<template>
    <modal>
        <form action="">
            <modal-card>
                <modal-header>
                    <modal-title>New Measurement</modal-title>
                </modal-header>
                <modal-body>
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label>Date</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group col-lg-6">
                            <label>Was Plant Located?</label>
                            <select name="" id="located" class="custom-form-control"></select>
                        </div>
                        <div class="form-group col-lg-6">
                            <label>Was Plant Alive?</label>
                            <select name="" id="alive" class="custom-form-control"></select>
                        </div>
                        <div class="form-group col-lg-6">
                            <label>Was plant located?</label>
                            <input type="number" class="form-control" step="any">
                        </div>
                    </div>
                </modal-body>
                <modal-footer></modal-footer>
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
  export default {
    name: 'MeasurementForm',

    components: {ModalTitle, ModalFooter, ModalBody, ModalHeader, ModalCard, Modal},
  }
</script>

<style scoped>

</style>
