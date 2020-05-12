<template>
  <section>
    <alert-small class="right-0 bg-white fixed h-6 w-6 md:h-12 md:w-12" />

    <desktop-icons
      :multimedia-enabled="multimediaEnabled"
      @click-multimedia-icon="multimediaEnabled = !multimediaEnabled"
    />

    <mobile-icons
      :multimedia-enabled="multimediaEnabled"
      @click-multimedia-icon="multimediaEnabled = !multimediaEnabled"
    />
  </section>
</template>

<script>
import AlertSmall from '~/components/AlertSmall'
import DesktopIcons from '~/components/Index/GamePreview/DesktopIcons'
import MobileIcons from '~/components/Index/GamePreview/MobileIcons'

export default {
  components: {
    AlertSmall,
    DesktopIcons,
    MobileIcons
  },

  data: () => ({
    multimediaEnabled: false
  })
}
</script>
