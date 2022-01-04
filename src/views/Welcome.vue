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
import ImageCard from './components/ImageCard'
import { getImages } from '@/apis/apis'
//import { errorToast } from '@/helpers/ui'
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
      try {
        this.images = await getImages(this.page)
      } catch (err) {
        //this.$bvToast.toast(`Images can't be retrieved`, errorToast)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
