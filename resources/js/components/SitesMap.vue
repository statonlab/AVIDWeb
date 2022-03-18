<template>
  <div class="col-md-8">
    <div class="card border shadow-sm">
      <div class="card-header shadow-none bg-light rounded">
        <h4 class="mt-1 ml-2 page-title">All Sites</h4>
      </div>
      <div class="card-body">
        <div ref="map" class="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Maps from "../helpers/Maps";

export default {
  name: 'SitesMap',

  mounted() {
    this.loadMap()
  },

  data() {
    return {
      plots: [],
      map: null,
      markers: [],
      infoWindow: null,
      selectedFeature: null,
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
        const {data} = await axios.get(`/web/sites-map`)
        this.plots = data
      } catch (e) {
        console.error(e)
      }
    },

    async loadLayers() {
      try {
        const {data} = await axios.get('/web/sites-map/layers')
        this.map.data.addGeoJson(data)
        this.map.data.setMap(this.map)
        this.map.data.addListener('click', (event) => {
          this.showWmu(event)
        })
        this.map.data.setStyle(f => {
          return {
            strokeWeight: 1,
            fillColor: '#000000',
          }
        })
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
          map: this.map,
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
        position = this.getCoords(plot)
      }

      this.map = new google.maps.Map(this.$refs.map, {
        zoom: 6,
        center: position,
      })

      this.map.addListener('click', () => {
        this.map.data.setStyle(() => {
          return {
            color: '#000000',
            strokeWeight: 1,
          }
        })

        if (this.infoWindow) {
          this.infoWindow.close()
        }
      })
    },

    getCoords(plot) {
      return {lat: plot[1], lng: plot[2]}
    },

    async showWmu(event) {
      const feature = event.feature
      const unit = feature.getProperty('UNIT')

      if (this.selectedFeature && this.selectedFeature.getProperty('UNIT') === unit) {
        this.selectedFeature = null
        this.map.data.setStyle(() => {
          return {
            color: '#000000',
            strokeWeight: 1,
          }
        })
        if (this.infoWindow) {
          this.infoWindow.close()
        }

        return
      }

      let content = `
      <table class="table mb-0">
        <tr>
          <th>WMU</th>
          <td>${unit}</td>
        </tr>
      </table>
      `
      if (!this.infoWindow) {
        this.infoWindow = new google.maps.InfoWindow({
          content,
        })
      } else {
        this.infoWindow.close()
        this.infoWindow.setContent(content)
      }

      this.map.data.setStyle(f => {
        let color = '#000000'

        if (f.getProperty('UNIT') === unit) {
          color = '#ff0000'
        }

        return {
          strokeWeight: 1,
          fillColor: color,
        }
      })

      this.infoWindow.open({
        anchor: null,
        position: event.latLng,
        map: this.map,
      })
      this.infoWindow.setPosition(event.latLng)
      this.selectedFeature = feature
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
          map: this.map,
        })

        const {data} = await axios.get(`/web/sites-map/site/${id}`)

        this.infoWindow.setContent(`
        <div>
          <table class="table mb-0 table-sm">
          <tr>
              <th>Site Name</th>
              <td>${data.name}</td>
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
