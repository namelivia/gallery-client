<template lang="pug">
section
    h3(v-if='loading' ) Loading...
    div(v-else)
        p Got some images
</template>
<script>
import { getImages } from '@/apis/apis'
import { errorToast } from '@/helpers/ui'
export default {
  data: function () {
    return {
      images: [],
      loading: true,
    }
  },
  mounted: function () {
    this.loadImages()
  },
  methods: {
    async loadImages() {
      try {
        this.images = await getImages()
      } catch (err) {
        this.$bvToast.toast(`Images can't be retrieved`, errorToast)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
