<template>
  <modal @close="$emit('close')">
    <form action="#"
          @keydown="form.errors.clear($event.target.name)"
          @submit.prevent="invite">
      <modal-card>
        <modal-header>
          <modal-title>Share {{ site.name }}</modal-title>
          <close @click.prevent="$emit('close')"/>
        </modal-header>
        <modal-body class="position-static">
          <div class="form-group">
            <label>User to Share {{ site.name }} With</label>
            <dropdown class="mb-4"
                      autocomplete
                      v-model="form.user_id"
                      :options="userOptions"
                      placeholder="Find a user"
                      @search="userSearch = $event"
                      :total="total"
                      :length-to-search="2"
                      :search-message="'Please enter a name or an email to begin searching.'"
                      ref="user"/>
            <small class="form-text text-danger" v-if="form.errors.has('user_id')">
              {{ form.errors.first('user_id') }}
            </small>
          </div>

          <div class="form-group mb-0">
            <div class="form-check">
              <input class="form-check-input"
                     type="checkbox"
                     :checked="form.can_edit"
                     @change="form.can_edit = $event.target.checked"
                     id="user-can-edit">
              <label class="form-check-label font-weight-normal" for="user-can-edit">
                Allow user to edit this site
              </label>
              <small class="form-text text-muted">
                By checking this box, the user will be allowed to edit existing data and add new data
              </small>
            </div>
          </div>
        </modal-body>
        <modal-footer class="d-flex">
          <button type="submit" class="btn btn-primary" :disabled="loading">
            <inline-spinner v-if="loading"/>
            <span>Invite</span>
          </button>

          <button type="button"
                  class="btn btn-light ml-auto"
                  @click.prevent="$emit('close')"
                  :disabled="loading">
            Cancel
          </button>
        </modal-footer>
      </modal-card>
    </form>
  </modal>
</template>

<script>
import ModalCard from '../components/Modal/ModalCard'
import Modal from '../components/Modal/Modal'
import ModalHeader from '../components/Modal/ModalHeader'
import ModalTitle from '../components/Modal/ModalTitle'
import Close from '../components/Modal/Close'
import ModalBody from '../components/Modal/ModalBody'
import ModalFooter from '../components/Modal/ModalFooter'
import Dropdown from '../components/Dropdown'
import Form from './Form'
import InlineSpinner from '../components/InlineSpinner'
import Errors from './Errors'

export default {
  name: 'SiteSharingForm',

  components: {InlineSpinner, ModalFooter, ModalBody, Dropdown, Close, ModalTitle, ModalHeader, Modal, ModalCard},

  props: {
    site: {required: true, type: Object},
  },

  data() {
    return {
      total      : 0,
      userOptions: [],
      userSearch : '',
      loading    : false,
      form       : new Form({
        user_id : '',
        can_edit: false,
      }),
      _timer     : null,
      _request   : null,
    }
  },

  watch: {
    userSearch() {
      if (this._timer) {
        clearTimeout(this._timer)
      }

      if (this.userSearch.length >= 2) {
        this._timer = setTimeout(() => {
          this.loadUsers()
        }, 600)
      } else {
        this.userOptions = []
      }
    },
  },

  methods: {
    async invite() {
      this.loading = true
      try {
        await this.form.post(`/web/sites/${this.site.id}/invitations`)
        this.$emit('create')
        this.form.reset()
        this.$notify({
          text: 'User invited successfully',
          type: 'success',
        })
      } catch (e) {
        if (e.response && e.response.status === 403) {
          this.$alert('You are not authorized to complete this action.')
        } else if (e.response && e.response.status === 422) {
          const errors = new Errors(e.response.data)
          this.$alert(errors.toArray().join(' '))
        } else {
          this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
        }
        console.error(e)
      }
      this.loading = false
    },

    async loadUsers() {
      if (this._request) {
        this._request()
      }

      try {
        const {data} = await axios.get(`/web/user-sites/users`, {
          params     : {
            search : this.userSearch.length >= 2 ? this.userSearch : null,
            site_id: this.site.id,
          },
          cancelToken: new axios.CancelToken(c => this._request = c),
        })

        this.total       = data.total
        this.userOptions = data.data.map(u => {
          return {
            label: u.name,
            value: u.id,
          }
        })
      } catch (e) {
        if (!axios.isCancel(e)) {
          if (e.response && e.response.status === 403) {
            this.$alert('You are not authorized to complete this action.')
          } else if (e.response && e.response.status === 422) {
            const errors = new Errors(e.response.data)
            this.$alert(errors.toArray().join(' '))
          } else {
            this.$alert('Unable to process your request at this time. Please try refreshing the page or contact us.')
          }
          console.error(e)
        }
      }
      this.loading = false
    },
  },
}
</script>

<style scoped>

</style>
