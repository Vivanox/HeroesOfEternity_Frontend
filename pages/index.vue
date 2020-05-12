<template>
  <article class="h-screen">
    <game-preview class="parallax relative h-screen" tabindex="1" />

    <about-us-excerpt
      class="parallax bg-fixed relative h-screen"
      tabindex="2"
    />
  </article>
</template>

<script>
export default {
  components: {
    GamePreview: () => import('~/components/Index/GamePreview'),
    AboutUsExcerpt: () => import('~/components/Index/AboutUsExcerpt')
  }
}
</script>
