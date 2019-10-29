<template>
    <modal @close="$emit('close')">
        <form action="" @submit.prevent>
            <modal-card>
                <modal-header>
                    <modal-title>
                        Add a New Site
                    </modal-title>
                    <close @click="$emit('close')"/>
                </modal-header>
                <modal-body>
                    <div class="form-group mb-0">
                        <label for="name">
                            Site Name
                            <required/>
                        </label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Site Name" autofocus>
                    </div>
                    <!--                    <div class="row">-->
                    <!--                        <div class="col-md-6">-->
                    <!--                            <div class="form-group">-->
                    <!--                                <label for="state">State-->
                    <!--                                    <required/>-->
                    <!--                                </label>-->
                    <!--                                <select class="custom-select" id="state" name="state">-->
                    <!--                                    <option selected>Choose...</option>-->
                    <!--                                    <option value="1">One</option>-->
                    <!--                                    <option value="2">Two</option>-->
                    <!--                                    <option value="3">Three</option>-->
                    <!--                                </select>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                        <div class="col-md-6">-->
                    <!--                            <div class="form-group">-->
                    <!--                                <label for="county">County-->
                    <!--                                    <required/>-->
                    <!--                                </label>-->
                    <!--                                <select class="custom-select" id="county" name="county">-->
                    <!--                                    <option selected>Choose...</option>-->
                    <!--                                    <option value="1">One</option>-->
                    <!--                                    <option value="2">Two</option>-->
                    <!--                                    <option value="3">Three</option>-->
                    <!--                                </select>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                    <div class="form-group">-->
                    <!--                        <label for="city">City/Town</label>-->
                    <!--                        <input type="text" class="form-control" name="city" id="city" placeholder="Type a city name">-->
                    <!--                    </div>-->
                    <!--                    <div class="form-group">-->
                    <!--                        <label for="owner">Owner's Name</label>-->
                    <!--                        <input type="text" class="form-control" name="owner" id="owner" placeholder="Type a name">-->
                    <!--                    </div>-->
                    <!--                    <div class="form-group">-->
                    <!--                        <label for="address">Owner's Address</label>-->
                    <!--                        <textarea type="text"-->
                    <!--                                  class="form-control"-->
                    <!--                                  name="address"-->
                    <!--                                  id="address"-->
                    <!--                                  placeholder="Type an address"></textarea>-->
                    <!--                    </div>-->
                    <!--                    <div class="form-group">-->
                    <!--                        <label for="basal-area">-->
                    <!--                            Approximate Basal Area-->
                    <!--                            <required/>-->
                    <!--                        </label>-->
                    <!--                        <div class="input-group is-appended">-->
                    <!--                            <input type="text"-->
                    <!--                                   class="form-control"-->
                    <!--                                   name="basal_area"-->
                    <!--                                   id="basal-area"-->
                    <!--                                   placeholder="Type a number">-->
                    <!--                            <div class="input-group-append">-->
                    <!--                                <span class="input-group-text">ft<sup>2</sup>/ac</span>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                    <!--                    <div class="form-group">-->
                    <!--                        <label for="diameter">-->
                    <!--                            Average Overstory Tree Diameter-->
                    <!--                            <required/>-->
                    <!--                        </label>-->
                    <!--                        <div class="input-group is-appended">-->
                    <!--                            <input type="text"-->
                    <!--                                   class="form-control"-->
                    <!--                                   name="diameter"-->
                    <!--                                   id="diameter"-->
                    <!--                                   placeholder="Type a number">-->
                    <!--                            <div class="input-group-append">-->
                    <!--                                <span class="input-group-text">in</span>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </modal-body>
                <modal-footer class="d-flex">
                    <button class="btn btn-primary" type="submit">
                        Save
                    </button>
                    <button class="btn btn-light ml-auto" type="button">
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

  export default {
    name: 'SiteForm',

    components: {
      Required,
      Close,
      ModalFooter,
      ModalBody,
      ModalTitle,
      ModalHeader,
      ModalCard,
      Modal,
    },

    data() {
      return {
        form: new Form({}),
      }
    },
  }
</script>

<style scoped>

</style>
