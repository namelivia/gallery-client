<template lang="pug">
section
    loading(v-if='loading')
    div(v-else)
      card-grid
        image-card(
            v-for='image in images' :key='image.url'
            :url="image.url"
            :timestamp="image.date"
        )
      pagination(
        previous-label="Anterior"
        next-label="Siguiente"
        :show-previous="showPrevious"
        :previous-link="previousPage"
        :next-link="nextPage"
      )
</template>

<script>
import ImageCard from '@/views/components/ImageCard.vue'
import { getImages } from '@/apis/apis'
import { useToast } from 'vue-toastification'
export default {
  components: {
    ImageCard: ImageCard,
  },
  data: function () {
    return {
      images: [],
      page: 0,
      loading: true,
    }
  },
  computed: {
    nextPage: function () {
      return `?page=${this.page + 1}`
    },
    previousPage: function () {
      return `?page=${this.page - 1}`
    },
    showPrevious: function () {
      return this.page > 0
    },
  },
  mounted: function () {
    this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 0
    this.loadList()
  },
  methods: {
    async loadList() {
      const toast = useToast()
      try {
        this.images = await getImages(this.page)
      } catch (err) {
        toast.error(`Images can't be retrieved`)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
