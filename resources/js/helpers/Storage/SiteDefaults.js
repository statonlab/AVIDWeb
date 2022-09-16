import StorageDefaults from './StorageDefaults'

export default class SiteDefaults extends StorageDefaults {
  static makeKey(site) {
    return `site-defaults-${site.id}`
  }
}
