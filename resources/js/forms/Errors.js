export default class Errors {
  constructor(data) {
    this.errors = {}

    if (typeof data !== 'undefined') {
      this.set(data)
    }
  }

  get(field) {
    if (this.errors[field]) {
      if (typeof this.errors[field] === 'string') {
        return this.errors[field]
      }
      return this.errors[field][0]
    }
  }

  first(field) {
    return this.get(field)
  }

  set(errors) {
    this.errors = errors.errors
  }

  clear(field) {
    if (this.errors[field]) {
      delete this.errors[field]
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field)
  }

  any() {
    return Object.keys(this.errors).length > 0
  }

  clearAll() {
    this.errors = {}
  }

  toArray() {
    const errors = []
    Object.keys(this.errors).forEach(key => {
      this.errors[key].forEach(error => errors.push(error))
    })

    return errors
  }
}
