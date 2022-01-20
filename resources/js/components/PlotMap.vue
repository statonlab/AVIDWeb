<template>
  <div ref="map">
  </div>
</template>

<script>
import Maps from '../helpers/Maps'

export default {
  name: 'PlotMap',

  props: {
    plot: {required: true, type: Object},
  },

  watch: {
    'plot.latitude': {
      handler() {
        this.setCenter()
      },
    },
  },

  mounted() {
    Maps.load(() => {
      const pos = new google.maps.LatLng(this.plot.latitude, this.plot.longitude)
      this.map  = new google.maps.Map(this.$refs.map, {
        zoom  : 6,
        center: pos,
      })

      this.marker = new google.maps.Marker({
        map     : this.map,
        position: pos,
      })
    })
  },

  methods: {
    setCenter() {
      const pos = new google.maps.LatLng(this.plot.latitude, this.plot.longitude)
      this.map.setCenter(pos)
      this.marker.setPosition(pos)
    },
  },
}
</script>

<style scoped>

</style>
