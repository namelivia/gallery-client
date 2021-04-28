<template lang="pug">
    a(:href="url")
        b-card.mb-2.no-body
            b-card-img-lazy(:src="url" :alt="name" top ref="image")
            b-card-body.text-center.pb-0
                | {{ formattedTimestamp }}
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
  },
  computed: {
    formattedTimestamp: function () {
      return new Date(this.timestamp).toLocaleString('es-ES')
    },
  },
}
</script>
