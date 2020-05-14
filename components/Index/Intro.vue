<template>
  <card class="flex flex-col lg:block mt-4">
    <alert-small class="right-0 bg-white fixed h-6 w-6 md:h-12 md:w-12" />

    <div class="hidden lg:block">
      <div class="flex justify-between items-center h-80 overflow-hidden">
        <div class="px-4 py-2 m-2">
          <multimedia-icon :enabled="muted" @click="muted = !muted" />
        </div>
        <div class="px-4 py-2 m-2">
          <preview-video :muted="muted" />
        </div>
        <div class="px-4 py-2 m-2 flex flex-col">
          <ellipse-icon
            class="h-2 w-2 shadow-outline rounded bg-white text-white mb-1"
          />
          <ellipse-icon class="h-2 w-2 text-gray-200 my-1" />
          <ellipse-icon class="h-2 w-2 text-gray-500 my-1" />
        </div>
      </div>

      <div class="hidden md:flex items-end text-white">
        <a
          href="https://twitter.com/hoeternity"
          class="px-4 py-2 m-2 flex font-black"
        >
          <twitter-icon class="pr-1" />
          /HOETERNITY
        </a>
        <a
          href="https://instagram.com/hoeternity"
          class="px-4 py-2 m-2 flex font-black"
        >
          <instagram-icon class="pr-1" />
          /HOETERNITY
        </a>
      </div>

      <div class="hidden md:flex justify-center items-center text-white my-2">
        <a href="#">
          <arrow-down-icon />
        </a>
      </div>
    </div>

    <div class="block lg:hidden">
      <preview-video :muted="muted" />

      <div class="w-full flex text-white mt-2">
        <div class="w-full flex">
          <a
            href="https://twitter.com/hoeternity"
            class="flex font-black h-6 w-6"
          >
            <twitter-icon />
          </a>

          <a
            href="https://instagram.com/hoeternity"
            class="flex font-black h-6 w-6"
          >
            <instagram-icon />
          </a>
        </div>

        <multimedia-icon
          class="h-6 w-6 float-right"
          :enabled="muted"
          @click="muted = !muted"
        />
      </div>
    </div>
  </card>
</template>

<script>
import Card from '~/components/Card'
import AlertSmall from '~/components/AlertSmall'
import PreviewVideo from '~/components/Index/Intro/PreviewVideo'
import MultimediaIcon from '~/components/icons/MultimediaIcon'
import EllipseIcon from '~/components/icons/EllipseIcon'
import TwitterIcon from '~/components/icons/TwitterIcon'
import InstagramIcon from '~/components/icons/InstagramIcon'
import ArrowDownIcon from '~/components/icons/ArrowDownIcon'

export default {
  components: {
    Card,
    AlertSmall,
    PreviewVideo,
    MultimediaIcon,
    EllipseIcon,
    TwitterIcon,
    InstagramIcon,
    ArrowDownIcon
  },

  data: () => ({
    muted: false
  })
}
</script>
