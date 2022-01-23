<template lang="pug">
.h-screen
  navbar(:links="links" :locale="$i18n.locale" :current-user-email="currentUserEmail")
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
</style>
