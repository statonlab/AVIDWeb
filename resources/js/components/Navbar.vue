<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary fixed-top pl-0 shadow">
        <div class="logo pl-2">
            <!--            <button class="btn btn-circle mr-2 btn-toggle btn-primary border-0">-->
            <!--                <icon name="menu"/>-->
            <!--            </button>-->
            <button class="btn btn-primary btn-sm rounded-circle btn-toggle float-left border-0"
                    @click.prevent="$emit('toggle')">
                <icon name="menu" class="no-width"/>
            </button>
            <a class="navbar-brand ml-3" href="#">AVID</a>
        </div>

        <div class="d-flex flex-grow-1">
            <div class="dropdown d-none d-md-inline-block">
                <form class="form-inline my-0 mr-auto" data-toggle="dropdown">
                    <div class="input-group">
                        <input type="search"
                               class="form-control navbar-form-control"
                               placeholder="Search">
                    </div>
                </form>
                <div class="dropdown-menu search-dropdown">
                    <small class="d-block text-center text-muted">No results found</small>
                </div>
            </div>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link mr-1 text-decoration-none" data-toggle="dropdown">
                        <avatar :user="user" small translucent :tooltip="false" class="float-left avatar-navbar mr-1"/>
                        <span>
                            {{ user.name }}
                        </span>
                        <icon name="ios-arrow-down"/>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown">
                        <router-link to="/data" class="dropdown-item">
                            Profile
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <form class="" action="/logout" method="post">
                        <input type="hidden" name="_token" :value="csrf">
                        <button class="nav-item btn btn-primary border-0" v-tooltip="'Sign Out'" type="submit">
                            <icon name="log-out"/>
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
    name      : 'Navbar',
    components: {Avatar, Icon},
    data() {
      return {
        csrf: document.head.querySelector('meta[name="csrf-token"]').content,
        user: User.get(),
      }
    },
  }
</script>

<style scoped>
    .navbar-dropdown {
        min-width: 210px;
    }
</style>
