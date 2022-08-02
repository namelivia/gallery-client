<template lang="pug">
a(:href="url")
  card
    card-image(:src="url" alt="image")
    card-body(:title="image")
      span {{ formattedTimestamp }}
      br
      badge(v-for="label in labels" :text="label")
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
    labels: {
      type: Array,
      default: [],
    },
  },
  computed: {
    formattedTimestamp: function () {
      return new Date(this.timestamp).toLocaleString('es-ES')
    },
  },
}
</script>
