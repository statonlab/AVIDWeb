<template>
    <div class="modal-content bg-light border-0 p-0">
        <div class="modal-body text-center py-4">
            <div v-if="title">
                <h5 class="m-0 text-danger">{{ title }}</h5>
            </div>
            <div class="py-4 text-dark">
                {{text}}
            </div>
        </div>
        <div class="modal-footer border-0 p-0 d-block">
            <a href="#"
               class="d-block text-center rounded-bottom p-3 text-uppercase text-white bg-danger m-0"
               @click.prevent="$emit('ok')">
                {{ ok }}
            </a>
        </div>
    </div>
</template>

<script>
  import Icon from '../../components/Icon'

  export default {
    name      : 'SimpleAlert',
    components: {Icon},
    props     : {
      text : {required: true, type: String},
      ok   : {required: false, type: String, default: 'Dismiss'},
      title: {required: false, type: String, default: 'Alert'},
    },
  }
</script>

<style scoped>
    .large-icon {
        /*font-size: 4rem;*/
    }
</style>
