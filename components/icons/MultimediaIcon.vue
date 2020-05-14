<template>
  <transition name="fade-enter">
    <svg
      v-if="enabled"
      class="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="31.508"
      height="31.514"
      viewBox="0 0 31.508 31.514"
      @click="$emit('click')"
    >
      <path
        d="M196.134,1.131A1.126,1.126,0,0,0,195.5.118a1.1,1.1,0,0,0-1.193.135L184.341,8.2l11.793,11.793Z"
        transform="translate(-171.379 0)"
        fill="#fff"
      />
      <path
        d="M31.224,29.655,1.965.4A1.125,1.125,0,0,0,.374,1.987L7.455,9.07H6.8a2.287,2.287,0,0,0-2.251,2.251v9A2.257,2.257,0,0,0,6.8,22.574h5.222l10.961,8.755a1.148,1.148,0,0,0,.7.248,1.317,1.317,0,0,0,.5-.113,1.126,1.126,0,0,0,.63-1.013V26.416l4.83,4.83a1.126,1.126,0,1,0,1.593-1.591Z"
        transform="translate(-0.045 -0.062)"
        fill="#fff"
      />
    </svg>
    <svg
      v-else
      class="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="20.447"
      height="31.514"
      viewBox="0 0 20.447 31.514"
      @click="$emit('click')"
    >
      <path
        d="M99.828.113a1.131,1.131,0,0,0-1.2.135L87.575,9.006h-5.28a2.262,2.262,0,0,0-2.272,2.251v9a2.262,2.262,0,0,0,2.272,2.251h5.28l11.048,8.758a1.154,1.154,0,0,0,.711.245,1.167,1.167,0,0,0,.493-.113,1.122,1.122,0,0,0,.643-1.013V1.128A1.128,1.128,0,0,0,99.828.113Z"
        transform="translate(-80.023 0)"
        fill="#fff"
      />
    </svg>
  </transition>
</template>

<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>
