export default async function (vue) {
    const { store, redirect, $axios } = vue
    await store.commit("authentication/parseJwt")
    if (store.state.authentication.token) {
        console.log('from here')
        store.commit("authentication/checkValidity")
        if (!store.state.authentication.isAutheticated) {
            console.log('from here !!!')
            // store.commit("authentication/notify")
            redirect('/login')
        }
    } else {
        console.log('from here !!!!!!!')
        // store.commit("authentication/notify")
        redirect('/login')
    }
}
