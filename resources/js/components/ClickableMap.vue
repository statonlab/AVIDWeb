<template>
    <div style="height:100px" ref="map">
    </div>
</template>

<script>
  import Maps from '../helpers/Maps'

  export default {
    name: 'ClickableMap',

    props: {
      value: {
        required: false,
        type    : Object,
        default : () => ({latitude: 40.354388, longitude: -95.998237}),
      },
    },

    mounted() {
      let start_pos = {latitude: 40.354388, longitude: -95.998237}
      if (this.value.latitude && this.value.longitude) {
        start_pos = this.value
      }

      Maps.load(() => {
        const pos = new google.maps.LatLng(start_pos.latitude, start_pos.longitude)
        this.map  = new google.maps.Map(this.$refs.map, {
          zoom  : 4,
          center: pos,
        })

        this.map.addListener('click', this.selectLocation)
      })

      if (this.value.latitude && this.value.longitude) {
        this.marker = new google.maps.Marker({
          map     : this.map,
          position: new google.maps.LatLng(start_pos.latitude, start_pos.longitude),
        })
      }
    },

    data() {
      return {
        pos   : {latitude: 40.354388, longitude: -95.998237},
        map   : null,
        marker: null,
      }
    },

    watch: {
      'value.latitude' : {
        handler() {
          this.setMarkerPosition()
          this.panTo()
        },
      },
      'value.longitude': {
        handler() {
          this.setMarkerPosition()
          this.panTo()
        },
      },
    },

    methods: {
      selectLocation(e) {
        const pos = e.latLng
        this.$emit('input', {
          latitude : pos.lat(),
          longitude: pos.lng(),
        })
      },

      setMarkerPosition() {
        const v = this.value
        const pos = this.marker && this.marker.getPosition()
        if(pos) {
          const lat = pos.lng(),
                lng = pos.lng()

          if(v.latitude !== lat || v.longitude !== lng) {
            this.marker.setPosition(new google.maps.LatLng(v.latitude, v.longitude))
          }
        } else {

          this.marker = new google.maps.Marker({
            map     : this.map,
            position: new google.maps.LatLng(v.latitude, v.longitude),
          })
        }
      },

      panTo() {
        const v = this.value
        if (v.latitude && v.longitude) {
          this.map.panTo(new google.maps.LatLng(v.latitude, v.longitude))
        }
      }
    },
  }
</script>

<style scoped>

</style>
