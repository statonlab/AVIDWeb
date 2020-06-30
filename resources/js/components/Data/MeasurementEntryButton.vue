<template>
    <div>
        <div class="dropdown">
            <a href="#"
               tabindex="-1"
               data-toggle="dropdown"
               class="d-flex align-items-center justify-content-between w-100 flex-nowrap no-wrap">
                <span>{{ moment(measurement.date).format('MMM Do, YYYY') }}</span>
                <icon name="caret-down"/>
            </a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-item pl-2 d-flex align-items-center" @click.prevent="$emit('editMeasurement')">
                    <icon name="create"/>
                    <span>Edit Measurement</span>
                </a>
                <a href="#" class="dropdown-item pl-2 d-flex align-items-center" @click.prevent="$emit('deleteMeasurement')">
                    <icon name="trash"/>
                    <span>Delete Measurement</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import Icon from '../Icon'

  export default {
    name      : 'MeasurementEntryButton',
    components: {Icon},
    props     : {measurement: {required: true}},
    data() { return {moment} }
  }
</script>

<style scoped>

</style>
