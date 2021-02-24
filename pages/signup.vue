<template>
  <div>
    <navbar-component></navbar-component>
    <div
      v-if="error"
      class="text-white px-6 py-4 border-0 rounded fixed mb-4 bg-red-500 z-20 mt-20"
    >
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell"></i>
      </span>
      <span class="inline-block align-middle mr-8">
        {{ message.length ? message : 'Error occured Contact Support' }}
      </span>
      <button
        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        v-on:click="closeAlert()"
      >
        <span>×</span>
      </button>
    </div>
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat"
          :style="{
            'background-image':
              'url(' + require('../assets/img/register_bg_2.png') + ')',
          }"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
              >
                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-gray-600 text-sm font-bold">Sign Up</h6>
                  </div>
                  <div class="btn-wrapper text-center"></div>
                  <hr class="mt-6 border-b-1 border-gray-400" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <n-link to="/login">
                      <small>Or sign in with credentials</small>
                    </n-link>
                  </div>
                  <div>
                    <div class="relative w-full mb-1">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-1"
                        for="grid-password"
                        >Email</label
                      ><input
                        v-model="email"
                        type="email"
                        class="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-1">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-1"
                        for="grid-password"
                        >Country</label
                      ><input
                        v-model="country"
                        type="text"
                        class="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="South Africa"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-1">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-1"
                        for="grid-password"
                        >City</label
                      ><input
                        v-model="city"
                        type="text"
                        class="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="City"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-1">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-1"
                        for="grid-password"
                        >State</label
                      ><input
                        v-model="state"
                        type="text"
                        class="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="State"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="relative w-full mb-1">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-1"
                        for="grid-password"
                        >Password</label
                      ><input
                        v-model="password"
                        type="password"
                        class="px-2 py-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style="transition: all 0.15s ease 0s"
                        :disabled="disabled"
                        @click="signUp"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Forgot password?</small></a
                  >
                </div>
                <div class="w-1/2 text-right">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Create new account</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </section>
    </main>
  </div>
</template>
<script>
import NavbarComponent from '../components/Navbar.vue'
import FooterComponent from '../components/Footer.vue'
export default {
  name: 'login-page',
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      email: '',
      password: '',
      city: '',
      country: '',
      state: '',
      error: false,
      message: '',
    }
  },
  methods: {
    closeAlert() {
      this.error = false
      this.message = ''
    },
    async signUp() {
      this.error = false
      this.message = ''
      try {
        if (this.disabled) {
          return
        }
        const token = await this.$axios.post('/auth/signup', {
          email: this.email,
          password: this.password,
          city: this.city,
          country: this.country,
          state: this.state,
        })
        debugger
        localStorage.setItem('auth-token', token.data.token)
        localStorage.setItem('user-id', token.data.id)
        this.$store.commit('authentication/parseJwt', token.data.token)
        this.$router.push('/products')
      } catch (error) {
        this.$notify({
          group: 'foo',
          title: 'Error',
          text: error.response.data
            ? error.response.data.data ||
              'All fields are required and must be filled properly'
            : 'Error Occured',
          position: 'top right',
          type: 'error',
        })
      }
    },
  },
  computed: {
    disabled() {
      if (
        this.email === '' ||
        this.password === '' ||
        this.city === '' ||
        this.country === '' ||
        this.state === ''
      ) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style>
button[disabled] {
  background: gray !important;
  cursor: not-allowed;
}
</style>
