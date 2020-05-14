<template>
  <card class="flex flex-col lg:flex-row mt-4">
    <div class="w-full xl:w-2/4">
      <heading class="p-4 text-white">Closed Alpha</heading>
      <paragraph class="p-4 text-white">
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
      </paragraph>
    </div>

    <ValidationObserver
      ref="form"
      v-slot="{ invalid, handleSubmit }"
      tag="div"
      class="w-full xl:w-2/4 flex flex-col items-center xl:items-end"
    >
      <ValidationProvider
        v-slot="{ errors }"
        class="pb-8 w-3/4"
        rules="required|email"
      >
        <div class="relative rounded-full">
          <input
            id="email"
            v-model="email"
            class="rounded-full bg-white placeholder-black text-black form-input block w-full py-4 pl-4 pr-10 font-black text-right"
            :class="
              errors[0]
                ? 'border-4 border-red-900 focus:border-red-900 focus:shadow-outline-red'
                : null
            "
            placeholder="Enter email..."
            aria-invalid="true"
            aria-describedby="email-error"
          />
          <div
            v-show="errors[0]"
            class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
          >
            <exclamation-circle-icon class="text-red-500" />
          </div>
        </div>
        <p id="email-error" class="mt-2 text-sm text-red-600">
          {{ errors[0] }}
        </p>
      </ValidationProvider>

      <button
        class="cursor-pointer text-center px-16 py-2 border-2 text-white border-white text-base leading-6 font-black rounded-full shadow-sm"
        :class="{
          'bg-gray-900': state === states.WORKING,
          'bg-green-600': state === states.SUCCESS,
          'bg-red-500': state === states.ERROR
        }"
        :disabled="invalid || state === states.WORKING"
        @click="handleSubmit(submit)"
      >
        {{ state }}
      </button>
    </ValidationObserver>
  </card>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Card from '~/components/Card'
import Heading from '~/components/Typography/Heading'
import Paragraph from '~/components/Typography/Paragraph'
import ExclamationCircleIcon from '~/components/icons/ExclamationCircleIcon'

const states = {
  DEFAULT: 'Submit',
  WORKING: 'Submitting...',
  SUCCESS: 'Sign up created',
  ERROR: 'Something went wrong.'
}

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    ExclamationCircleIcon,
    ValidationProvider,
    ValidationObserver
  },

  data: () => ({
    states,
    state: states.DEFAULT,
    email: ''
  }),

  methods: {
    async submit() {
      try {
        this.state = states.WORKING

        await this.$store.dispatch('alpha-sign-ups/store', {
          email: this.email
        })

        this.state = states.SUCCESS
      } catch (error) {
        this.state = states.ERROR

        if (error.response && error.response.status === 422) {
          this.$refs.form.setErrors(error.response.data.errors)
          return
        }

        throw error
      }
    }
  }
}
</script>
