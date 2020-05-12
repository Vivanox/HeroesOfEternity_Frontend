<template>
  <div>
    <div
      class="hidden md:flex justify-between items-center h-80 overflow-hidden"
    >
      <div class="px-4 py-2 m-2">
        <multimedia-icon
          :enabled="multimediaEnabled"
          @click="$emit('click-multimedia-icon')"
        />
      </div>
      <div class="px-4 py-2 m-2">
        <!-- Center block -->
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
</template>

<script>
import MultimediaIcon from '~/components/icons/MultimediaIcon'
import EllipseIcon from '~/components/icons/EllipseIcon'
import TwitterIcon from '~/components/icons/TwitterIcon'
import InstagramIcon from '~/components/icons/InstagramIcon'
import ArrowDownIcon from '~/components/icons/ArrowDownIcon'

export default {
  components: {
    MultimediaIcon,
    EllipseIcon,
    TwitterIcon,
    InstagramIcon,
    ArrowDownIcon
  },

  props: {
    multimediaEnabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>
