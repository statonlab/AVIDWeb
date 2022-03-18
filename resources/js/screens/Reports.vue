<template>
  <div class="row">
    <div class="col-md-3 col-sm-4">
      <div class="card mb-3 border shadow-sm">
        <div class="card-header shadow-none bg-light rounded">
          <strong class="text-medium">Options</strong>
        </div>
        <div class="card-body p-2">
          <div class="nav nav-pills flex-column"
               id="v-pills-tab"
               role="tablist"
               aria-orientation="vertical">
            <a href="#"
               :class="['nav-link', 'pr-0', {'active': tab === 'wmu'}]"
               @click.prevent="selectTab('wmu')">
              <span>{{ 'Report By Aggregate WMU' }}</span>
              <icon v-if="tab === 'wmu'" name="arrow-forward" class="ml-auto forward-icon"/>
            </a>
            <a href="#"
               :class="['nav-link', 'pr-0', {'active': tab === 'state'}]"
               @click.prevent="selectTab('state')">
              <span>{{ 'Report by State' }}</span>
              <icon v-if="tab === 'state'" name="arrow-forward" class="ml-auto forward-icon"/>
            </a>
            <a href="#"
               :class="['nav-link', 'pr-0', {'active': tab === 'county'}]"
               @click.prevent="selectTab('county')">
              <span>{{ 'Report by County' }}</span>
              <icon v-if="tab === 'county'" name="arrow-forward" class="ml-auto forward-icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <report-by-aggregate-wmu v-if="tab === 'wmu'"/>
    <report-by-state v-if="tab === 'state'"/>
    <report-by-county v-if="tab === 'county'"/>
  </div>
</template>

<script>
import InlineSpinner from '../components/InlineSpinner'
import Icon from '../components/Icon'
import ReportByAggregateWmu from "../components/Reports/ReportByAggregateWmu";
import ReportByState from "../components/Reports/ReportByState";
import ReportByCounty from "../components/Reports/ReportByCounty";

export default {
  name: 'Reports',

  components: {
    InlineSpinner,
    Icon,
    ReportByAggregateWmu,
    ReportByState,
    ReportByCounty
  },

  mounted() {
    this.selectTabFromHash()
  },

  data() {
    return {
      _request: null,
      tab: 'wmu',
      tabs: [
        'wmu',
        'state',
        'county',
        'township',
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
