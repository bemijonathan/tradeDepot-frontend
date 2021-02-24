<template>
  <section>
    <NavbarComponent />
    <section class="text-gray-600 body-font overflow-hidden bg-gray-900">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            :src="data.image"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-white tracking-widest">
              {{ data.name }}
            </h2>
            <h1 class="text-white text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <p class="leading-relaxed mt-10 text-white">
              {{ data.description }}
            </p>

            <div class="flex mt-4">
              <span class="title-font font-medium text-2xl text-white"
                >${{ data.price }}</span
              >
              <button
                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                @click="like($route.params.id, 'product')"
              >
                <svg
                  :fill="product_like"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  ></path>
                </svg>
              </button>
            </div>
            <p class="leading-relaxed mt-3 text-white">
              Country : {{ data.country }}
            </p>
            <p class="leading-relaxed mt-3 text-white">
              State : {{ data.state }}
            </p>
            <p class="leading-relaxed mt-3 text-white">City {{ data.city }}</p>
            <p class="leading-relaxed mt-3 text-white">
              Created at : {{ data.createdAt }}
            </p>
            <p class="leading-relaxed mt-3 text-white">
              Updated Last : {{ data.UpdatedAt }}
            </p>

            <div class="flex mt-4">
              <span class="title-font font-medium text-2xl text-white"
                >Product by : {{ data.user ? data.user.name : '' }}</span
              >

              <button
                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                {{ data.user ? data.user.email : '' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center bg-gray-900"
        style="min-height: 25vh"
      >
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="">
                <h1 class="text-white font-semibold text-3xl mb-10">
                  Comments
                </h1>
                <div>
                  <div
                    v-if="data.comments ? data.comments.length === 0 : false"
                  >
                    <h1 class="text-2xl text-white text-center">
                      No Comments Yet !!
                    </h1>
                  </div>
                  <button
                    class="bg-pink-500 text-white active:bg-blue-600 uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none my-3 text-sm"
                    type="button"
                    style="transition: all 0.15s ease"
                    v-on:click="toggleModal()"
                  >
                    Add Comment
                  </button>
                  <div
                    v-if="showModal"
                    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
                  >
                    <div class="relative w-2/5 my-6 mx-auto max-w-3xl">
                      <!--content-->
                      <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
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
                            <textarea
                              v-model="comment"
                              type="text"
                              placeholder="Comment"
                              class="px-3 py-4 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
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
                  <div
                    v-if="showModal"
                    class="opacity-25 fixed inset-0 z-40 bg-black"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {{ product_like }}

          <div
            class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-blue-500 w-1/3 mx-auto"
            v-for="(comment, i) in data.comments"
            :key="i"
          >
            <div
              class="text-xl inline-block mr-5 align-middle w-full items-center justify-center flex"
            >
              <img
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                alt="..."
                class="shadow rounded-full max-w-full h-8 align-middle border-none inline-block"
              />
              <span class="ml-4 text-sm">
                {{
                  comment.user ? comment.user.name || comment.user.email : ''
                }}
              </span>
              <span class="ml-auto text-xs"> 15th Febuary 2021 </span>
            </div>
            <div class="inline-block align-middle mr-2 mt-4 text-sm w-full">
              {{ comment.comment }}
            </div>
            <div
              class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 cursor-pointer"
              @click="like(comment._id, 'comments', i)"
            >
              <svg
                class="w-8 h-8 mr-1"
                stroke="currentColor"
                stroke-width="2"
                :fill="
                  comment.likes
                    ? comment.likes.find((e) => e._id === user_id)
                      ? 'red'
                      : 'none'
                    : 'none'
                "
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                ></path>
              </svg>
              {{ comment.likes ? comment.likes.length : 0 }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </section>
</template>
<script>
import NavbarComponent from '../../components/Navbar.vue'
import FooterComponent from '../../components/Footer.vue'
export default {
  name: 'login-page',
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {
      showModal: false,
      data: {
        comment: '',
        disabled: false,
      },
      user_id: '',
      product_like: '',
    }
  },
  methods: {
    async like(id, entity, i) {
      try {
        this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
        const { data } = await this.$axios.$post(`/likes/${id}/${entity}`)

        if (entity === 'product') {
          if (this.product_like === 'red') {
            this.product_like = 'none'
          } else {
            this.product_like = 'red'
          }
        } else {
          this.data.comments[i].liked = !this.data.comments[i].liked
        }
        await this.getDAta()
      } catch (err) {
        console.log(err)
      }
    },
    async submit() {
      this.disabled = true
      try {
        if (this.comment.trim() === '') {
          return
        }
        this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
        const { data } = await this.$axios.$post(
          '/comments/' + this.$route.params.id,
          { comment: this.comment }
        )
        console.log(data)
        await this.getDAta()
        this.toggleModal()
      } catch (e) {
        console.log(e)
      } finally {
        this.disabled = false
      }
    },
    toggleModal: function () {
      this.showModal = !this.showModal
    },
    async getDAta() {
      this.$axios.setToken(localStorage.getItem('auth-token'), 'Bearer')
      const { data } = await this.$axios.$get(
        '/products/' + this.$route.params.id
      )
      console.log(data)
      this.data = data
    },
  },
  async mounted() {
    await this.getDAta()
    this.user_id = localStorage.getItem('user-id')
  },
}
</script>

<style></style>
