<template>
  <div class="h-screen flex overflow-hidden bg-black">
    <transition name="fade" duration="300">
      <sidebar-menu v-show="menuIsVisible" @close="menuIsVisible = false" />
    </transition>

    <div
      class="flex flex-col w-0 flex-1 overflow-x-hidden overflow-y-auto pt-6"
      :style="{
        background: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${backgroundURL})`,
        backgroundSize: 'cover'
      }"
    >
      <div class="fixed top-0 z-10 w-full mt-4 px-4">
        <div class="flex justify-between h-8 md:h-24">
          <button
            class="h-6 flex focus:outline-none"
            aria-label="Open sidebar"
            @click="menuIsVisible = true"
          >
            <p class="hidden md:block font-black font-2xl text-white pr-2">
              MENU
            </p>
            <hamburger-menu-icon class="h-6 w-6" />
          </button>

          <logo class="-ml-4 md:ml-32 h-8 md:h-24" />

          <global-search class="px-4 h-6 flex" />
        </div>
      </div>

      <main class="relative h-screen z-0 py-6" tabindex="0">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '~/components/SidebarMenu'
import Logo from '~/components/Logo'
import GlobalSearch from '~/components/GlobalSearch'
import HamburgerMenuIcon from '~/components/icons/HamburgerMenuIcon'

export default {
  components: {
    SidebarMenu,
    Logo,
    GlobalSearch,
    HamburgerMenuIcon
  },

  data: () => ({
    menuIsVisible: false
  }),

  computed: {
    backgroundURL() {
      return require('~/static/painting-1.png')
    }
  }
}
</script>

<style>
html {
  font-family: Raleway;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
