<template>
    <div ref="map" class="map">
    </div>
</template>

<script>
    import Maps from '../helpers/Maps'

    export default {
        name: 'PlotMap',

        props: {
            plot: {required: true, type: Object}
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
    }
</script>

<style scoped>

</style>
