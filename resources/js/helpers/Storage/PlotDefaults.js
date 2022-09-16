import StorageDefaults from './StorageDefaults'

export default class PlotDefaults extends StorageDefaults {
  static makeKey(plot) {
    return `plot-defaults-${plot.id}`
  }
}
