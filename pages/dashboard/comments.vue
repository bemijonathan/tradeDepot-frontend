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
        <div class="flex flex-wrap">
          <!-- <line-chart-component></line-chart-component>
          <bar-chart-component></bar-chart-component> -->
        </div>
        <div class="flex flex-wrap mt-4">
          <section class="text-gray-600 body-font">
            <div
              class="text-3xl text-white font-bold relative text-center"
              v-if="data.length === 0"
            >
              You have no favorite Comment
            </div>
            <div class="flex flex-wrap -mx-3">
              <div
                class="md:w-1/3 p-3 w-full bg-blue-500 relative rounded"
                v-for="(comment, i) in data"
                :key="i"
              >
                <!-- {{ comment }} -->
                <div
                  class="text-xl inline-block mr-5 align-middle w-full items-center justify-center flex text-white"
                >
                  <img
                    src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                    alt="..."
                    class="shadow rounded-full max-w-full h-8 align-middle border-none inline-block"
                  />
                  <span class="ml-4 text-sm"> Jonathan </span>
                  <span class="ml-auto text-xs"> 15th Febuary 2021 </span>
                </div>
                <span
                  class="inline-block align-middle mr-2 mt-4 text-xs text-white"
                >
                  <b class="capitalize">green!</b> This is a green alert - check
                  it This is a green alert - check itThis is a green alert -
                  check itThis is a green alert - check itThis is a green alert
                  - check itThis is a green alert - check itThis is a green
                  alert - check itThis is a green alert - check it out!
                </span>
                <span
                  class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    ></path></svg
                  >1.2K
                </span>
              </div>
            </div>
          </section>
        </div>
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
export default {
  name: 'dashboard-page',
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  data() {
    return {
      date: new Date().getFullYear(),
      data: [],
    }
  },
  middleware: ['authenticated'],
  async mounted() {
    this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
    const { data } = await this.$axios.$get('/likes/comments')
    console.log(data)
    this.data = data.data
  },
}
</script>
