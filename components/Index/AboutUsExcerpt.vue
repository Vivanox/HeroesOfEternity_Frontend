<template>
  <section
    :style="{
      background: `linear-gradient(rgba(255,255,255,.9), rgba(0,0,0,.3)), url(${backgroundURL})`,
      backgroundSize: 'cover'
    }"
    class="text-black flex items-center justify-between px-4 py-2"
    tabindex="2"
  >
    <div class="w-3/4">
      <h1 class="font-black text-6xl">About Us</h1>
      <p class="text-4xl text-justify break-words">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ante
        ex. Donec elit metus, faucibus non sollicitudin ut, efficitur ut lorem.
        Fusce pellentesque orci ac accumsan congue. Fusce gravida purus nulla,
        vel tempus eros sollicitudin non. Sed vel velit mi. Morbi at feugiat
        tortor, ac lobortis mauris. Mauris in lacus ut neque accumsan
        consectetur. Ut id convallis mi. Etiam ut purus eget ante condimentum
        mattis. Quisque a lobortis arcu. Duis posuere justo purus, et porta
        sapien mollis eu. Nam aliquet mauris sed dignissim eleifend. Phasellus
        consequat finibus hendrerit. Duis id nisi ut nunc semper blandit in non
        est. Vivamus placerat nunc eros, et commodo lorem consequat sed. Sed
        euismod lectus ac viverra varius. Etiam egestas varius odio, nec mattis
        enim feugiat a. Nam eu purus luctus, pulvinar erat et, viverra sapien.
        Vestibulum eu enim nec nulla efficitur egestas sed vel tellus. Maecenas
        facilisis leo imperdiet tellus suscipit pulvinar.
      </p>

      <span class="inline-flex rounded-full shadow-sm mt-2">
        <nuxt-link
          to="about"
          type="button"
          class="inline-flex items-center px-6 py-3 border border-4 border-black text-base leading-6 font-black rounded-full"
        >
          Read More
          <play-icon class="ml-4" />
        </nuxt-link>
      </span>
    </div>

    <nujani />
  </section>
</template>

<script>
import PlayIcon from '~/components/icons/PlayIcon'
import Nujani from '~/components/characterModels/Nujani'

export default {
  components: {
    PlayIcon,
    Nujani
  },

  computed: {
    backgroundURL() {
      return require('~/static/mesh.png')
    }
  }
}
</script>
