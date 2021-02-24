<template>
  <div>
    <div
      v-if="alertOpen"
      class="text-white px-6 py-4 border-0 rounded fixed mb-4 bg-red-500 z-20 mt-20"
    >
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell"></i>
      </span>
      <span class="inline-block align-middle mr-8">
        <b class="capitalize">Unauthorized</b> Please Login to continue!
      </span>
      <button
        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        v-on:click="closeAlert()"
      >
        <span>×</span>
      </button>
    </div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    closeAlert() {
      this.$store.commit('authentication/notify', false)
    },
  },
  computed: {
    alertOpen() {
      return this.$store.state.authentication.alert
    },
  },
}
</script>
