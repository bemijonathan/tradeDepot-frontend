<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="relative md:ml-64 bg-gray-200">
      <navbar-component></navbar-component>
      <!-- Header -->
      <div class="relative bg-blue-600 md:pt-32 pb-32 pt-12">
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
        <div class="flex flex-wrap w-full">
          <div class="text-2xl text-white relative font-bold text-right w-full">
            <button
              class="bg-white py-2 px-2 ml-10 rounded text-black"
              style="transition: all 0.15s ease"
              v-on:click="toggleModal()"
            >
              Create Product
            </button>
            <div
              v-if="showModal"
              class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
            >
              <div class="relative w-2/5 my-6 mx-auto max-w-3xl">
                <!--content-->
                <div
                  class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gray-600"
                >
                  <!--header-->
                  <div
                    class="flex items-start justify-between px-5 py-3 border-b border-solid border-gray-300 rounded-t"
                  >
                    <h3 class="text-2xl">Modal Title</h3>
                    <button
                      class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      v-on:click="toggleModal()"
                    >
                      <span
                        class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  <!--body-->
                  <div class="relative p-6 flex-auto">
                    <div
                      class="relative flex w-full flex-wrap items-stretch mb-3"
                    >
                      <input
                        v-model="name"
                        type="text"
                        placeholder="Name"
                        class="px-3 py-4 text-black relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10 my-4"
                      />

                      <input
                        v-model="price"
                        type="number"
                        placeholder="Comment"
                        class="px-3 py-4 text-black relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10 my-4"
                      />

                      <input
                        v-model="country"
                        type="text"
                        placeholder="Country"
                        class="px-3 py-4 text-black relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10 my-4"
                      />

                      <input
                        v-model="city"
                        type="text"
                        placeholder="City"
                        class="px-3 py-4 text-black relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10 my-4"
                      />

                      <textarea
                        v-model="description"
                        type="text"
                        placeholder="Description"
                        class="px-3 py-4 text-black relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10 my-4"
                      />

                      <input
                        type="file"
                        accept="image/*"
                        placeholder="City"
                        @change="getFile"
                        class="px-3 py-4 text-black relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10 my-4"
                      />
                      <span
                        class="z-10 h-full leading-normal font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4"
                      >
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <!--footer-->
                  <div
                    class="flex items-center justify-end px-5 py-2 border-t border-solid border-gray-300 rounded-b"
                  >
                    <button
                      class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease"
                      v-on:click="toggleModal()"
                    >
                      Close
                    </button>
                    <button
                      class="text-blue-500 border border-solid border-blue-500 rounded ml-3 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease"
                      v-on:click="submit"
                      :disabled="disabled"
                    >
                      Add Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section class="text-gray-600 body-font w-full">
            <div
              class="text-3xl text-white font-bold relative text-center"
              v-if="data.length === 0"
            >
              You have no Product
            </div>
            <div class="flex flex-wrap -m-3 w-full">
              <div
                class="md:w-1/4 p-3 w-full"
                v-for="(product, i) in data"
                :key="i"
              >
                <div class="shadow-md">
                  <nuxt-link
                    :to="'/product/' + product._id"
                    class="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      class="object-cover object-center w-full h-full block"
                      :src="product.image"
                    />
                  </nuxt-link>
                  <div class="p-4 bg-white">
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                      {{ product.name }}
                    </h2>
                    <p class="mt-1">$16.00</p>
                    <n-link :to="'product/' + product._id">
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
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
      this.hide = false
    },
    getFile(e) {
      this.file = e.target.files[0]
    },
    async submit() {
      this.hide = false
      try {
        let form = new FormData()
        form.append('file', this.file)
        form.append('name', this.name)
        form.append('desciption', this.description)
        form.append('price', this.price)
        form.append('city', this.city)
        form.append('country', this.country)
        const { data } = await this.$axios.post('/products/', form)
        console.log(data)
        await this.getData()
        this.toggleModal()
      } catch (e) {
        this.$notify({
          group: 'foo',
          title: 'Error',
          text: error.response.data
            ? error.response.data.data || 'Error Creating Product'
            : 'Error Occured',
          position: 'top right',
          type: 'error',
        })
      }
    },
    async getData() {
      this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
      const { data } = await this.$axios.$get('/products/dashboard')
      console.log(data)
      this.data = data
    },
  },
  computed: {
    disabled() {
      if (
        this.name === '' ||
        this.description === '' ||
        this.price === '' ||
        this.city === '' ||
        this.country === ''
      ) {
        return true
      } else {
        return false
      }
    },
  },
  data() {
    return {
      date: new Date().getFullYear(),
      data: [],
      showModal: false,
      name: '',
      description: '',
      file: {},
      price: '',
      city: '',
      country: '',
    }
  },
  async mounted() {
    await this.getData()
  },
  middleware: ['authenticated'],
}
</script>

<style>
button[disabled] {
  cursor: not-allowed;
}
</style>
