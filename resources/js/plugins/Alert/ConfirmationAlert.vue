<template>
    <div class="modal-content">
        <div class="modal-body p-5">
            <div v-if="title">
                <h5 class="m-0">{{ title }}</h5>
            </div>
            <div class="mt-4 text-dark">
                {{text}}
            </div>
        </div>
        <div class="modal-footer border-0 bg-lighter px-3">
            <a href="#"
               class="btn btn-text text-uppercase text-on-gray"
               @click.prevent="$emit('dismiss')">
                {{ cancel }}
            </a>
            <a href="#"
               class="btn btn-danger text-uppercase shadow-none"
               @click.prevent="$emit('confirm')">
                {{ ok }}
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ConfirmationAlert',

    props: {
      ok    : {required: false, type: String, default: 'Confirm'},
      cancel: {required: false, type: String, default: 'Cancel'},
      text  : {required: true, type: String},
      title : {required: false, type: String},
    },
  }
</script>

<style scoped>

</style>
