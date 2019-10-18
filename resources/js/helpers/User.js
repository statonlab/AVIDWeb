class User {
    constructor(app) {
        this.user = app.user
    }

    get() {
        return this.user
    }
}

export default new User(window.avid)
