export const state = () => ({
    authenticated: false,
    token: ''
})

export const mutations = {
    setToken(state, payload) {
        localStorage.setItem('auth-token', 'payload');
    },
    getToken(state, payload) {
        state.token = localStorage.getItem('auth-token');
    },
    deleteToken(state, payload) {
        state.authenticated = false
        token = ''
        localStorage.clear()
    }
}