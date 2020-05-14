<template>
  <iframe
    src="https://www.youtube.com/embed/nbmJnCHXaW8?autoplay=1"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    muted: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    muted(muted) {
      this.$el.muted = muted
    }
  }
}
</script>
