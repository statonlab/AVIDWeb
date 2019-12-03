export default class Maps {
    loadMap(onLoad) {
        if (window.google && window.google.maps) {
            onLoad()
            return
        }

        const script  = document.createElement('script')
        const key     = window.avid.keys.maps
        script.async  = true
        script.defer  = true
        script.type   = 'text/javascript'
        script.onload = onLoad
        script.src    = `https://maps.googleapis.com/maps/api/js?key=${key}`
        document.head.appendChild(script)
    }

    static load(onLoad) {
        return new Maps().loadMap(onLoad)
    }
}
