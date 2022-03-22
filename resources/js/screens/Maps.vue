<template>
  <div>
    <!-- Filters to be added later -->
    <!--    <div class="col-md-3 col-sm-4">-->
    <!--      <div class="card mb-3 border shadow-sm">-->
    <!--        <div class="card-header shadow-none bg-light rounded">-->
    <!--          <strong class="text-medium">Options</strong>-->
    <!--        </div>-->
    <!--        <div class="card-body p-2">-->
    <!--          <div class="nav nav-pills flex-column"-->
    <!--               id="v-pills-tab"-->
    <!--               role="tablist"-->
    <!--               aria-orientation="vertical">-->
    <!--            <a href="#"-->
    <!--               :class="['nav-link', 'pr-0', {'active': tab === 'one'}]"-->
    <!--               @click.prevent="selectTab('one')">-->
    <!--              <span>{{ 'Test Option 1' }}</span>-->
    <!--              <icon v-if="tab === 'one'" name="arrow-forward" class="ml-auto forward-icon"/>-->
    <!--            </a>-->
    <!--            <a href="#"-->
    <!--               :class="['nav-link', 'pr-0', {'active': tab === 'two'}]"-->
    <!--               @click.prevent="selectTab('two')">-->
    <!--              <span>{{ 'Test Option 2' }}</span>-->
    <!--              <icon v-if="tab === 'two'" name="arrow-forward" class="ml-auto forward-icon"/>-->
    <!--            </a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <sites-map/>
  </div>
</template>

<script>
import InlineSpinner from '../components/InlineSpinner'
import Icon from '../components/Icon'
import SitesMap from "../components/SitesMap";

export default {
  name: 'Maps',

  components: {
    InlineSpinner,
    Icon,
    SitesMap
  },

  mounted() {
    this.selectTabFromHash()
  },

  data() {
    return {
      _request: null,
      tab: 'one',
      tabs: [
        'one',
        'two',
      ],
    }
  },

  methods: {
    makeHash(tab) {
      return tab.replace(/ /g, '-')
    },
    selectTabFromHash() {
      if (this.$route.hash && this.$route.hash.length > 0) {
        this.selectTab(this.$route.hash.replace(/-/g, ' ').substring(1))
      }
    },
    selectTab(tab) {
      if (this.tabs.indexOf(tab) === -1) {
        return
      }
      this.tab = tab
      this.$router.push({
        hash: this.makeHash(tab),
      }).catch(e => {
      })
    },
  },
}
</script>

<style scoped>

</style>
