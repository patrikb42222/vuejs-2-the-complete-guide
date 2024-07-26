export default {
    login(state) {
        state.loggedIn = true
    },
    logout(state) {
        state.loggedIn = false
    }
}