export default class StorageDefaults {
  static makeKey(object) {
    return `defaults-${object.id}`
  }

  /**
   * Set the form defaults for a resource.
   *
   * @param {Object|Number} object The site, plot or any other resource
   * @param {Object} data
   */
  static set(object, data) {
    if (!window.localStorage) {
      return
    }

    if(typeof object !== 'object') {
      object = {id: object}
    }

    const key    = this.makeKey(object)
    let defaults = window.localStorage.getItem(key)
    if (!defaults) {
      defaults = {}
    } else {
      defaults = JSON.parse(defaults)
    }

    defaults = {
      ...defaults,
      ...data,
    }

    window.localStorage.setItem(key, JSON.stringify(defaults))
  }

  /**
   * Get the form defaults for a resource.
   *
   * @param {Object|Number} object The plot, site or any other resource
   * @returns {Object}
   */
  static get(object) {
    if (!window.localStorage) {
      return {}
    }

    if(typeof object !== 'object') {
      object = {id: object}
    }

    const key    = this.makeKey(object)
    let defaults = window.localStorage.getItem(key)
    if (defaults) {
      defaults = JSON.parse(defaults)
    } else {
      defaults = {}
    }

    return defaults
  }
}
