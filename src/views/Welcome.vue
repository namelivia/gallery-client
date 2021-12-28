<template lang="pug">
section
    loading(v-if='loading')
    card-grid(v-else)
      image-card(
          v-for='image in images' :key='image.url'
          :url="image.url"
          :timestamp="image.date"
      )
    nav(aria-label="Pagination")
        ul.pagination
            li.page-item(v-if='showPrevious')
                a.page-link(:href="previousPage") Anterior
            li.page-item.ml-auto
                a.page-link(:href="nextPage") Siguiente
</template>

<script>
import Card from './components/Card'
import { getImages } from '@/apis/apis'
//import { errorToast } from '@/helpers/ui'
export default {
  components: {
    ImageCard: Card,
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
