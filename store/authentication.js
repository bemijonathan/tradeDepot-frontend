import jwt from 'jsonwebtoken';

export const state = () => ({
    isAutheticated: false,
    currentUser: undefined,
    token: null,
    user_id: null,
    alert: false
})

export const mutations = {
    LogOut(state) {
        state.token = null
        state.user_id = null
        localStorage.clear()
        state.isAutheticated = false
        state.currentUser = undefined
    },
    checkValidity(state) {
        if (state.currentUser) {
            let expTime = state.currentUser.exp
            let currentTime = new Date()
            let unixTime = Math.floor(currentTime / 1000)
            if (expTime >= unixTime) {
                state.isAutheticated = true
                console.log(true)
            } else {
                localStorage.clear()
                state.token = null
                state.isAutheticated = false
                console.log(false)
            }
        } else {
            state.isAutheticated = false
            console.log(false)
        }
    },
    notify(state, payload) {
        debugger
        if (payload !== undefined) {
            state.payload = payload
        } else {
            state.alert = true
        }
    },
    parseJwt(state) {
        state.token = localStorage.getItem('auth-token')
        state.user_id = localStorage.getItem('user-id')
        if (state.token) {
            // set to decoded value
            const data = jwt.decode(state.token)
            console.log(data)
            state.currentUser = data
        }
    },
}

export const actions = {
    async login({ commit, state, dispatch }, payload) {
        try {
            const user = await this.$axios.$post('user_token', {
                auth: payload,
            })
            console.log(user)
            localStorage.setItem('auth-token', user.jwt)
            localStorage.setItem('user-details', JSON.stringify(JSON.stringify(user.user)))
            commit('parseJwt')
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    },
}
