<template lang="pug">
.h-screen
  navbar(
    :links="links"
    :locale="$i18n.locale"
    :current-user-email="currentUserEmail"
    title="Gallery App"
    :imageBig="imageBigUrl"
    :imageSmall="imageSmallUrl"
  )
  container
      router-view
</template>

<script>
import { store } from '@namelivia/vue-currentuser'
export default {
  data: function () {
    return {
      currentUserEmail: undefined,
      links: []
    }
  },
  computed: {
    imageBigUrl: function () {
      return new URL('assets/images/logo-big.svg', import.meta.url).href
    },
    imageSmallUrl: function () {
      return new URL('assets/images/logo-small.svg', import.meta.url)
        .href
    },
  },
  mounted() {
    this.getCurrentUser()
  },
  methods: {
    async getCurrentUser() {
      const currentUser = await store.getCurrentUser(import.meta.env.VITE_APP_API_ENDPOINT)
      this.currentUserEmail = currentUser.email
    },
  },
}
</script>

<style lang="css">
@import './assets/styles/custom.css';
@import 'vue-toastification/dist/index.css';
</style>
