<template>
  <div>
    <div class="fixed inset-0 flex z-40">
      <div class="fixed inset-0">
        <div class="absolute inset-0 bg-brand opacity-75"></div>
      </div>
      <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4">
        <div class="absolute top-0 right-0 -mr-14 p-1">
          <button
            class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none"
            aria-label="Close sidebar"
            @click="$emit('close')"
          >
            <times-icon class="h-6 w-6 text-white" />
          </button>
        </div>
        <div class="mt-5 flex-1 h-0 overflow-y-auto">
          <nav class="px-2">
            <a
              href="#"
              class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-white border-b border-white"
            >
              <logo class="mr-4 h-6 w-6 transition ease-in-out duration-150" />

              Placeholder
            </a>
          </nav>
        </div>
      </div>
      <div class="flex-shrink-0 w-14">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import TimesIcon from '~/components/icons/TimesIcon'
export default {
  components: {
    Logo,
    TimesIcon
  }
}
</script>
