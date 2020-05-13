<template>
  <article class="h-screen">
    <intro class="parallax relative h-screen" tabindex="1" />

    <about-us-excerpt
      class="parallax bg-fixed relative h-screen"
      tabindex="2"
    />

    <closed-alpha class="parallax bg-fixed relative h-screen" tabindex="3" />
  </article>
</template>

<script>
export default {
  components: {
    Intro: () => import('~/components/Index/Intro'),
    AboutUsExcerpt: () => import('~/components/Index/AboutUsExcerpt'),
    ClosedAlpha: () => import('~/components/Index/ClosedAlpha')
  }
}
</script>
