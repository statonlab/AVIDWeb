<template>
    <div class="d-flex position-relative form-control flex-wrap height-auto">
        <button @click.prevent.stop="remove(index)"
                class="btn btn-outline-primary btn-sm mr-1 my-1"
                v-for="({name}, index) in value">
            <span class="icon">
                <icon name="remove-circle-outline"/>
            </span>
            <span>{{ name }}</span>
        </button>
        <div class="input-group">
            <div class="dropdown d-none d-md-inline-block">
                <form class="form-inline my-0 mr-auto" data-toggle="dropdown">
                    <div class="form-group">
                        <input type="text"
                               v-model="search"
                               class="d-flex flex-grow-1 form-control w-auto"
                               @keyup="keyup($event)"
                               @keydown.up="up()"
                               @keydown.down="down()"
                               @keydown.enter.prevent.stop="addToken(current)"
                               placeholder="Type and select species">
                    </div>
                </form>
                <div class="dropdown-menu search-dropdown">
                    <small class="d-block text-center text-muted" v-if="results.length === 0 && search.length > 0">No results found</small>
                    <small class="d-block text-center text-muted" v-if="results.length === 0 && search.length === 0">Type to search</small>
                    <div v-for="(item, index) in results">
                        <div class="dropdown-item" :class="isActive(index) ? 'active' : ''"
                             @click="addToken(index)">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'TokensField',

    props: {value: {required: false, type: Array}},

    components: {Icon},

    data() {
      return {
        name: '',
        search: '',
        results: [],
        current: 0,
      }
    },

    mounted() {
      this.loadResults()
    },

    watch: {
      search() {
        this.loadResults()
      },
    },

    methods: {
      async loadResults() {
        if(this.request) {
          this.request()
        }
        axios.get(`/web/species`, {
          params: {
            search: this.search,
            cancelToken: new axios.CancelToken(fn => this.request = fn)
          },
        }).then(response => {
          this.results = response.data.data
        }).catch(e => {
          console.error(e)
        })
      },

      keyup(e) {
        var key = e.which || e.keyCode
        if (key === 188 || key === 1) {
          this.addToken()
        }
      },

      up() {
        if (this.current > 0) {
          this.current--
        }
      },

      down() {
        if (this.current < this.results.length - 1) {
          this.current++
        }
      },

      addToken(index) {
        if (this.selected(this.results[index])) {
          return
        }

        this.$emit('input', this.value.concat([{
          id: this.results[index].id,
          name: this.results[index].name
        }]))
        this.search = ''
      },

      remove(i) {
        const value = this.value.concat([])
        value.splice(i, 1)
        this.$emit('input', value)
      },

      isActive(index) {
        return index === this.current
      },

      selected(item) {
        for (let i = 0; i < this.value.length; ++i) {
          if (this.value[i].id === item.id) {
            return true
          }
        }

        return false
      }
    },
  }
</script>

<style scoped>
    .height-auto {
        height: auto !important;
    }
</style>
