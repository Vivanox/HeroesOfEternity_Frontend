<template>
  <div class="md:hidden w-full flex text-white fixed bottom-0 mb-2">
    <div class="w-full flex">
      <a href="https://twitter.com/hoeternity" class="flex font-black h-6 w-6">
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
      :enabled="multimediaEnabled"
      @click="$emit('click-multimedia-icon')"
    />
  </div>
</template>

<script>
import InstagramIcon from '~/components/icons/InstagramIcon'
import TwitterIcon from '~/components/icons/TwitterIcon'
import MultimediaIcon from '~/components/icons/MultimediaIcon'

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    MultimediaIcon
  },

  props: {
    multimediaEnabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>
