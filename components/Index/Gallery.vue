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
.slick-slide :not(.slick-current) {
  background: radial-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
}

.slick-current {
  @apply shadow-2xl;
}

.slick-track[data-v-e4caeaf8] {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.slick-track.slick-center[data-v-e4caeaf8] {
  margin-left: auto;
  margin-right: auto;
}
.slick-track[data-v-e4caeaf8]:after,
.slick-track[data-v-e4caeaf8]:before {
  display: table;
  content: '';
}
.slick-track[data-v-e4caeaf8]:after {
  clear: both;
}
.slick-loading .slick-track[data-v-e4caeaf8] {
  visibility: hidden;
}
.slick-slide[data-v-e4caeaf8] {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir='rtl'] .slick-slide[data-v-e4caeaf8] {
  float: right;
}
.slick-slide img[data-v-e4caeaf8] {
  display: block;
}
.slick-slide.slick-loading img[data-v-e4caeaf8] {
  display: none;
}
.slick-slide.dragging img[data-v-e4caeaf8] {
  pointer-events: none;
}
.slick-initialized .slick-slide[data-v-e4caeaf8] {
  display: block;
}
.slick-loading .slick-slide[data-v-e4caeaf8] {
  visibility: hidden;
}
.slick-vertical .slick-slide[data-v-e4caeaf8] {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden[data-v-21137603] {
  display: none;
}
.slick-slider[data-v-3d1a4f76] {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list[data-v-3d1a4f76] {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.slick-list[data-v-3d1a4f76]:focus {
  outline: none;
}
.slick-list.dragging[data-v-3d1a4f76] {
  cursor: pointer;
  cursor: hand;
}

/* Arrows */
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;

  position: absolute;
  top: 50%;

  display: block;

  width: 20px;
  height: 20px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);

  cursor: pointer;

  color: transparent;
  border: none;
  outline: none;
  background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  color: transparent;
  outline: none;
  background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev:before,
.slick-next:before {
  font-family: 'slick';
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: white;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-prev {
  left: -25px;
}
[dir='rtl'] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-prev:before {
  content: '←';
}
[dir='rtl'] .slick-prev:before {
  content: '→';
}

.slick-next {
  right: -25px;
}
[dir='rtl'] .slick-next {
  right: auto;
  left: -25px;
}
.slick-next:before {
  content: '→';
}
[dir='rtl'] .slick-next:before {
  content: '←';
}

/* Dots */
.slick-dotted.slick-slider {
  margin-bottom: 30px;
}

.slick-dots {
  position: absolute;
  bottom: -25px;

  display: block;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;
}
.slick-dots li {
  position: relative;

  display: inline-block;

  width: 20px;
  height: 20px;
  margin: 0 5px;
  padding: 0;

  cursor: pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;

  display: block;

  width: 20px;
  height: 20px;
  padding: 5px;

  cursor: pointer;

  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before {
  opacity: 1;
}
.slick-dots li button:before {
  font-family: 'slick';
  font-size: 6px;
  line-height: 20px;

  position: absolute;
  top: 0;
  left: 0;

  width: 20px;
  height: 20px;

  content: '•';
  text-align: center;

  opacity: 0.25;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: black;
}

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
</style>

<script>
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
