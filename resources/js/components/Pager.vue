<template>
  <nav aria-label="Page navigation" v-if="hideIfEmpty ? lastPage > 1 : true" class="d-flex w-100 justify-content-between align-items-center">
    <button class="btn btn-white"
            :disabled="page === 1"
            @click.prevent="previous()"
            type="button">
      Previous
    </button>

    <div>
      <select class="custom-select w-auto" v-model="currentPage">
        <option v-for="i in lastPage" :value="i">
          Page {{ i }}
        </option>
      </select>
    </div>

    <button class="btn btn-white"
            :disabled="page === lastPage"
            @click.prevent="next()"
            type="button">
      Next
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Pager',

  props: {
    lastPage: {required: true, type: Number},
    page    : {required: true, type: Number},
    hideIfEmpty: {required: false, type: Boolean, default: true}
  },

  data() {
    return {
      currentPage: 1,
    }
  },

  mounted() {
    this.currentPage = this.page
  },

  watch: {
    page(page) {
      this.currentPage = page
    },

    currentPage(page) {
      this.change(page)
    },
  },

  methods: {
    previous() {
      if (this.page === 1) {
        return
      }

      this.$emit('change', this.page - 1)
    },

    next() {
      if (this.lastPage === this.page) {
        return
      }

      this.$emit('change', this.page + 1)
    },

    change(page) {
      if (this.page === page) {
        return
      }

      this.$emit('change', page)
    },
  },
}
</script>

<style scoped>

</style>
