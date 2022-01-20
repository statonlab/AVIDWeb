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
      plots     : [],
      map       : null,
      markers   : [],
      infoWindow: null,
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
        const {data} = await axios.get('/web/plots-map/layers')
        this.map.data.addGeoJson(data.geojson)
        this.map.data.setMap(this.map)
      } catch (e) {
        console.error(e)
      }
    },

    setMapMarkers() {
      this.markers.forEach(marker => {
        marker.setMap(null)
      })
      this.markers = []
      this.plots.forEach(plot => {
        const marker = new google.maps.Marker({
          map     : this.map,
          position: this.getCoords(plot),
        })

        marker.addListener('click', () => {
          this.openWindow(marker, plot)
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

      this.map.addListener('click', () => {
        if(this.infoWindow) {
          this.infoWindow.close()
        }
      })
    },

    getCoords(plot) {
      return {lat: plot[1], lng: plot[2]}
    },

    async openWindow(marker, plot) {
      if (this.loading) {
        return
      }

      this.loading = true
      try {
        const id = plot[0]
        if (this.infoWindow) {
          this.infoWindow.close()
        }

        const loadingState = `
        <span class="spinner-grow spinner-grow-sm text-primary" role="status" aria-hidden="true"></span>
        <span>Loading...</span>
        `
        if (!this.infoWindow) {
          this.infoWindow = new google.maps.InfoWindow({
            content: loadingState,
          })
        } else {
          this.infoWindow.setContent(loadingState)
        }

        this.infoWindow.open({
          anchor: marker,
          map   : this.map,
        })

        const {data} = await axios.get(`/web/plots-map/plot/${id}`)

        this.infoWindow.setContent(`
        <div>
          <table class="table mb-0">
            <tr>
              <th colspan="2">Plot #${data.number}</th>
            </tr>
            <tr>
              <th>Site Name</th>
              <td>${data.site.name}</td>
            </tr>
            <tr>
              <th>Created By</th>
              <td>${data.user.name}</td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="${data.url}">Visit site page</a>
              </td>
            </tr>
          </table>
        </div>
        `)
      } catch (e) {
        console.error(e)
      }

      this.loading = false
    },
  },
}
</script>

<style scoped>

</style>
