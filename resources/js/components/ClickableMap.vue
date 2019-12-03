<template>
    <div ref="map">
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
        default : () => ({latitude: 42.6588992, longitude: -80.2590355}),
      },
    },

    mounted() {
      Maps.load(() => {
        const pos = new google.maps.LatLng(this.value.latitude, this.value.longitude)
        this.map  = new google.maps.Map(this.$refs.map, {
          zoom  : 6,
          center: pos,
        })

        this.map.addListener('click', this.selectLocation)

        this.marker = new google.maps.Marker({
          map     : this.map,
          position: pos,
        })
      })
    },

    data() {
      return {
        map   : null,
        marker: null,
      }
    },

    watch: {
      'value.latitude' : {
        handler(v) {
          this.setMarkerPosition()
        },
      },
      'value.longitude': {
        handler() {
          this.setMarkerPosition()
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
        }
      }
    },
  }
</script>

<style scoped>

</style>
