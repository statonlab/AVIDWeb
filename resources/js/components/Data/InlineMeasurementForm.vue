<template>
    <tr>
        <td class="p-0"></td>
        <td class="p-0"></td>
        <td class="p-0" :class="{'shadow-primary': focusedCell === 'date'}">
            <date-picker
                    v-model="date"
                    color="green"
                    @popoverDidShow="dateFocused = 'date'"
                    @popoverDidHide="dateFocused = null"
                    :max-date="new Date()"
                    :input-props="{class: 'form-control px-3 border-0 w-100 cell-h', placeholder: 'Measurement Date' }"
                    :popover="{ visibility: 'click' }">
            </date-picker>
        </td>
        <td class="p-0" :class="{'shadow-primary': focusedCell === 'located'}">
            <select
                    @focusin="focusedCell = 'located'"
                    @focusout="focusedCell = null"
                    class="form-control border-0 py-0 cell-h">
                <option value="">Located?</option>
                <option value="">Yes</option>
                <option value="">No</option>
            </select>
        </td>
        <td class="p-0" :class="{'shadow-primary': focusedCell === 'alive'}">
            <select @focusin="focusedCell = 'alive'"
                    @focusout="focusedCell = null"
                    class="form-control border-0 py-0 cell-h focus-outlined">
                <option value="">Alive?</option>
                <option value="">Yes</option>
                <option value="">No</option>
            </select>
        </td>
        <td class="p-0" :class="{'shadow-primary': focusedCell === 'height'}">
            <input class="form-control px-3 border-0 w-100 cell-h focus-outlined"
                   @focusin="focusedCell = 'height'"
                   @focusout="focusedCell = null"
                   type="number"
                   step="any"
                   min="0"
                   placeholder="Height">
        </td>
    </tr>
</template>

<script>
  import DatePicker from 'v-calendar/lib/components/date-picker.umd'

  export default {
    name: 'InlineMeasurementForm',

    components: {DatePicker},

    data() {
      return {
        date: null,
        focusedCell: null
      }
    },

    watch: {
      focusedCell() {
        console.log(this.focusedCell)
      }
    },

    methods: {
      fd() {
        this.focusedCell = 'date'
      }
    }
  }
</script>

<style scoped>

</style>
