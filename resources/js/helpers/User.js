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

    isAdmin() {
        return this.user.role.name === 'Admin'
    }

    isScientist() {
        return this.user.role.name === 'scientist'
    }
}

export default new User(window.avid)
