<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="relative md:ml-64 bg-gray-200">
      <navbar-component></navbar-component>
      <!-- Header -->
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div class="text-3xl text-white font-bold">
            {{ $route.name.toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <section class="text-gray-600 body-font w-full md:w-2/3 mx-auto">
          <div class="container mx-auto px-4 h-full w-full">
            <div class="flex content-center items-center justify-center h-full">
              <div class="w-full lg:w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
                >
                  <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form @submit.prevent="submitData">
                      <div class="relative w-full my-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                          >Name</label
                        ><input
                          type="text"
                          v-model="data.name"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style="transition: all 0.15s ease 0s"
                        />
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                          >Email</label
                        ><input
                          type="text"
                          v-model="data.email"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Location"
                          style="transition: all 0.15s ease 0s"
                          disabled
                        />
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                          >City</label
                        ><input
                          type="text"
                          v-model="data.city"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="City"
                          style="transition: all 0.15s ease 0s"
                        />
                      </div>
                      <div class="relative w-full mb-3">
                        <label
                          class="block uppercase text-gray-700 text-xs font-bold mb-2"
                          for="grid-password"
                          >Country</label
                        ><input
                          type="text"
                          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Country"
                          v-model="data.country"
                          style="transition: all 0.15s ease 0s"
                        />
                      </div>
                      <div class="text-center mt-6">
                        <button
                          class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style="transition: all 0.15s ease 0s"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
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
        </section>

        <footer class="block py-4">
          <div class="container mx-auto px-4">
            <hr class="mb-4 border-b-1 border-gray-300" />
            <div
              class="flex flex-wrap items-center md:justify-between justify-center"
            >
              <div class="w-full md:w-4/12 px-4">
                <div class="text-sm text-gray-600 font-semibold py-1">
                  Copyright © {{ date }}
                  <a
                    href="https://www.creative-tim.com"
                    class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                  >
                    Creative Tim
                  </a>
                </div>
              </div>
              <div class="w-full md:w-8/12 px-4">
                <ul
                  class="flex flex-wrap list-none md:justify-end justify-center"
                >
                  <li>
                    <a
                      href="https://www.creative-tim.com"
                      class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.creative-tim.com"
                      class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                      class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      MIT License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from '../../components/Navbar.vue'
import SidebarComponent from '../../components/Sidebar.vue'
// import LineChartComponent from '../../components/LineChart.vue'
// import BarChartComponent from '../../components/BarChart.vue'
export default {
  name: 'dashboard-page',
  components: {
    NavbarComponent,
    SidebarComponent,
    // LineChartComponent,
    // BarChartComponent,
  },
  data() {
    return {
      date: new Date().getFullYear(),
      data: {},
    }
  },
  middleware: ['authenticated'],
  methods: {
    async submitData() {
      delete this.data.email
      this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
      const { data } = await this.$axios.$put(
        '/user/' + localStorage.getItem('user-id'),
        this.data
      )
    },
  },
  async mounted() {
    this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
    const { data } = await this.$axios.$get(
      '/user/' + localStorage.getItem('user-id')
    )
    console.log(data)
    this.data = data
  },
}
</script>
