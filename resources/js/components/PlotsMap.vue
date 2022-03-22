<template>
  <div ref="map">
  </div>
</template>

<script>
import Maps from '../helpers/Maps'

export default {
  name: 'PlotsMap',

  props: {
    plots: {required: true, type: Array},
  },

  data() {
    return {
      infoWindow: null,
      markers: [],
    }
  },

  mounted() {
    Maps.load(() => {
      const pos = new google.maps.LatLng(this.plots[0].latitude, this.plots[0].longitude)
      this.map = new google.maps.Map(this.$refs.map, {
        zoom: 9,
        center: pos,
      })

      this.map.addListener('click', () => {
        if (this.infoWindow) {
          this.infoWindow.close()
        }
      })

      this.setMapMarkers()
    })
  },

  methods: {
    setMapMarkers() {
      this.markers.forEach(marker => {
        marker.setMap(null)
      })
      this.markers = []
      this.plots.forEach(plot => {
        const marker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(plot.latitude, plot.longitude),
        })

        marker.addListener('click', () => {
          this.openWindow(marker, plot)
        })

        this.markers.push(marker)
      })
    },

    openWindow(marker, plot) {
      if (this.infoWindow) {
        this.infoWindow.close()
      }
      let content = `
        <div>
              <span>Plot #${plot.number}</span>
        </div>`
      this.infoWindow = new google.maps.InfoWindow({
        content,
      })
      this.infoWindow.open({
        anchor: marker,
        map: this.map,
      })
    },
  },
}
</script>

<style scoped>

</style>
