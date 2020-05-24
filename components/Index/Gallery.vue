<template>
  <card
    :style="{
      background: `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.3)), url(${backgroundURL})`,
      backgroundSize: 'cover'
    }"
    class="flex flex-col lg:flex-row mt-4"
  >
    <div class="w-full pr-2 xl:w-1/4">
      <heading class="p-4 text-white">Gallery</heading>
      <paragraph class="p-4 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ante
        ex. Donec elit metus, faucibus non sollicitudin ut, efficitur ut lorem.
        Fusce pellentesque orci ac accumsan congue. Fusce gravida purus nulla,
        vel tempus eros sollicitudin non. Sed vel velit mi. Morbi at feugiat
        tortor, ac lobortis mauris. Mauris in lacus ut neque accumsan
        consectetur. Ut id convallis mi. Etiam ut purus eget ante condimentum
        mattis. Quisque a lobortis arcu.
      </paragraph>
    </div>

    <div class="w-full xl:pl-8 mb-4 xl:w-3/4">
      <vue-slick-carousel
        :accessibility="true"
        :arrows="true"
        :dots="true"
        :center-mode="true"
        center-padding="20px"
        :slides-to-show="3"
        :pause-on-hover="true"
        :autoplay="true"
        :infinite="true"
        lazy-load="ondemand"
      >
        <img class="px-2" src="/gallery/Back.png" alt="" />
        <img class="px-2" src="/gallery/Back.png" alt="" />
        <img class="px-2" src="/gallery/Back.png" alt="" />

        <img class="px-2" src="/gallery/Back.png" alt="" />
        <img class="px-2" src="/gallery/Back.png" alt="" />
        <img class="px-2" src="/gallery/Back.png" alt="" />

        <img class="px-2" src="/gallery/Back.png" alt="" />
        <img class="px-2" src="/gallery/Back.png" alt="" />
        <img class="px-2" src="/gallery/Back.png" alt="" />

        <template #prevArrow>
          <svg fill="none" viewBox="0 0 24 24" stroke="white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </template>

        <template #nextArrow>
          <svg fill="none" viewBox="0 0 24 24" stroke="white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </template>
      </vue-slick-carousel>
    </div>
  </card>
</template>

<style lang="css">
@media (max-width: 1024px) {
  .slick-prev,
  .slick-next {
    @apply w-16 h-16 z-50;
  }
}

@media (min-width: 1024px) {
  .slick-prev,
  .slick-next {
    @apply w-32 h-32 z-50;
  }
}

.slick-slide :not(.slick-current) {
  background: radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
}

.slick-current {
  @apply shadow-2xl;
}
</style>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'

import Card from '~/components/Card'
import Heading from '~/components/Typography/Heading'
import Paragraph from '~/components/Typography/Paragraph'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    VueSlickCarousel
  },

  computed: {
    backgroundURL() {
      return require('~/static/mesh.png')
    }
  }
}
</script>
