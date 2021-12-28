<template lang="pug">
    a(:href="url")
        card
            card-image(:src="url" :alt="name")
            card-body(:title="")
              span {{ formattedTimestamp }}
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
