<template>
    <div>
        <div class="form-group">
            <Select2 :options="results.map(({id, name}) => ({id, text: name}))"
                     v-model="selects"
                     placeholder="Type and select a species"
                     :settings="{ multiple: 'true' }"
                     @change="onChange($event)" />
        </div>
    </div>
</template>

<script>
  import Select2 from 'v-select2-component'

  export default {
    name: 'TokensField',

    props: {value: {required: false, type: Array}},

    components: {Select2},

    data() {
      return {
        results : [],
        selects : [],
      }
    },

    mounted() {
      this.loadResults()
    },

    watch: {
      value() {
        this.selects = this.value
      }
    },

    methods: {
      async loadResults() {
        if(this.request) {
          this.request()
        }
        axios.get(`/web/species`, {
          params: {
            cancelToken: new axios.CancelToken(fn => this.request = fn)
          },
        }).then(response => {
          this.results = response.data.data
        }).catch(e => {
          console.error(e)
        })
      },

      onChange(e) {
        this.$emit('input', e)
      },
    },
  }
</script>

<style scoped>
    .height-auto {
        height: auto !important;
    }
</style>
