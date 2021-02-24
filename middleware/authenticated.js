export default function (vue) {
    const { store, redirect, $axios } = vue

    store.commit("authentication/parseJwt")
    if (!store.state.authentication.token) {
        store.commit("authentication/checkValidity")
        if (store.state.authentication.isAutheticated) {
            store.commit("authentication/notify")
            redirect('/login')
        }
    } else {
        store.commit("authentication/notify")
        redirect('/login')
    }
}
