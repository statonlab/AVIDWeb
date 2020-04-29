class User {
  constructor(app) {
    this.user = app.user
  }

  get() {
    return this.user
  }

  is(user) {
    return user.id === this.user.id
  }

  owns(resource) {
    return this.user.id === resource.user_id
  }

  can(ability) {
    if (Array.isArray(ability)) {
      return ability.filter(a => {
        return this.user.permissions.indexOf(a) > -1
      }).length > 0
    }

    return this.user.permissions.indexOf(ability) > -1
  }
}

export default new User(window.avid)
