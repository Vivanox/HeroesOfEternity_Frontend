<template>
  <article class="h-screen flex flex-col">
    <intro class="z-50" tabindex="1" />

    <about-us-excerpt
      class="parallax bg-fixed relative xl:h-screen"
      tabindex="2"
    />

    <closed-alpha class="parallax bg-fixed relative xl:h-screen" tabindex="3" />
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
