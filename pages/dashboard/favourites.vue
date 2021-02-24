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
        <div class="flex flex-wrap mt-4 w-full">
          <section class="text-gray-600 body-font w-full">
            <div
              class="text-3xl text-white font-bold relative text-center"
              v-if="data.length === 0"
            >
              You have no favorite Product
              <small><n-link to="/product"> view products now </n-link></small>
            </div>
            <div class="flex flex-wrap -m-3">
              <div
                class="md:w-1/4 p-3 w-full"
                v-for="(favorites, i) in data"
                :key="i"
              >
                <div class="shadow-md">
                  <n-link
                    :to="'/product/' + favorites.product._id"
                    class="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      :src="favorites.product.image"
                    />
                  </n-link>
                  <div class="p-4 bg-white">
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {{ favorites.product.name }}
                    </h2>
                    <p class="mt-1">${{ favorites.product.price }}</p>
                    <n-link :to="'/product/' + favorites._id">
                      <h3
                        class="text-gray-500 text-xs tracking-widest title-font mb-1"
                      >
                        VIEW
                      </h3>
                    </n-link>
                  </div>
                </div>
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
      data: [],
    }
  },
  middleware: ['authenticated'],
  async mounted() {
    this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
    const { data } = await this.$axios.$get('/likes/products')
    console.log(data)
    this.data = data.data
  },
}
</script>
