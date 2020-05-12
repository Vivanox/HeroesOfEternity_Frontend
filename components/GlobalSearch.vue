<template>
  <div>
    <div class="flex-1 flex">
      <div class="flex">
        <label for="search_field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <input
            id="search_field"
            class="hidden md:block w-full h-full pl-8 pr-3 bg-transparent border-b-2 border-gray-700 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
            type="search"
          />

          <div
            class="absolute inset-y-0 right-0 flex items-center pointer-events-none"
          >
            <search-icon class="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from '~/components/icons/SearchIcon'

export default {
  components: {
    SearchIcon
  }
}
</script>
