<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary fixed-top pl-0 shadow-sm">
        <div class="logo pl-3">
            <button class="btn btn-primary btn-sm rounded-circle btn-toggle float-left border-0"
                    @click.prevent="$emit('toggle')">
                <icon name="menu" class="text-lg"/>
            </button>
            <a class="navbar-brand ml-2" href="#">AVID</a>
        </div>

        <div class="d-flex flex-grow-1">
            <div class="dropdown d-none d-md-inline-block">
                <form class="form-inline my-0 mr-auto" data-toggle="dropdown">
                    <div class="input-group">
                        <input type="search"
                               v-model="search"
                               class="form-control navbar-form-control"
                               placeholder="Search users and entries">
                    </div>
                </form>
                <div class="dropdown-menu search-dropdown">
                    <small class="d-block text-center text-muted" v-if="results.length === 0 && search.length > 0">No results found</small>
                    <small class="d-block text-center text-muted" v-if="results.length === 0 && search.length === 0">Type to search</small>
                    <router-link :key="item.id" :to="`/app/plants/${item.id}`" class="dropdown-item" v-for="item in results">
                        <span>Plant #{{ item.tag }}</span>
                        <div class="text-muted">
                            Plot #{{ item.plot.number }}, {{ item.plot.site.name }}
                        </div>
                    </router-link>
                </div>
            </div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link mr-1 text-decoration-none p-0" data-toggle="dropdown">
                        <avatar :user="user" small translucent :tooltip="false" class="float-left avatar-navbar mr-1"/>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown">
                        <router-link to="/app/profile" class="dropdown-item">
                            <icon name="person"/>
                            <span>Profile</span>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <form class="" action="/logout" method="post">
                        <input type="hidden" name="_token" :value="csrf">
                        <button class="nav-link bg-transparent border-0" v-tooltip="'Sign Out'" type="submit">
                            <icon name="log-out-outline"/>
                        </button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  import Icon from './Icon'
  import Avatar from './Avatar'
  import User from '../helpers/User'

  export default {
    name: 'Navbar',

    components: {Avatar, Icon},

    data() {
      return {
        csrf   : document.head.querySelector('meta[name="csrf-token"]').content,
        user   : User.get(),
        results: '',
        search : '',
        request: null
      }
    },

    watch: {
      async search() {
        if(this.request) {
          this.request()
        }
        axios.get(`/web/search`, {
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
    },
  }
</script>

<style scoped>
    .navbar-dropdown {
        min-width: 210px;
    }
</style>
