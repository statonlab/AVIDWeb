<template>
  <div class="card">
    <div class="card-header border-bottom">
      <strong>Plots</strong>
    </div>
    <div class="card-body">
      <div ref="map" class="map"></div>
    </div>
  </div>
</template>

<script>
import Maps from '../../helpers/Maps'

export default {
  name: 'DashboardPlotsMap',

  mounted() {
    this.loadMap()
  },

  data() {
    return {
      plots  : [],
      map    : null,
      markers: [],
    }
  },

  methods: {
    loadMap() {
      Maps.load(async () => {
        await this.loadPlots()
        this.createMap()
        this.setMapMarkers()
        await this.loadLayers()
      })
    },

    async loadPlots() {
      try {
        const {data} = await axios.get(`/web/plots-map`)
        this.plots   = data
      } catch (e) {
        console.error(e)
      }
    },

    async loadLayers() {
      try {
        // const {data} = await axios.get('/web/plots-map/layers')
        this.map.data.loadGeoJson('/web/plots-map/layers')
      } catch (e) {
        console.error(e)
      }
    },

    setMapMarkers() {
      this.plots.forEach(plot => {
        const marker = new google.maps.Marker({
          map     : this.map,
          position: this.getCoords(plot),
        })

        this.markers.push(marker)
      })
    },

    createMap() {
      let position = {
        lat: -35,
        lng: 85,
      }

      if (this.plots.length) {
        const plot = this.plots[0]
        position   = this.getCoords(plot)
      }

      this.map = new google.maps.Map(this.$refs.map, {
        zoom  : 6,
        center: position,
      })
    },

    getCoords(plot) {
      if (plot.custom_latitude && plot.custom_longitude) {
        return {lat: plot.custom_latitude, lng: plot.custom_longitude}
      }

      return {lat: plot.latitude, lng: plot.longitude}
    },
  },
}
</script>

<style scoped>

</style>
