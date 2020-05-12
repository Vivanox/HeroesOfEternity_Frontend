/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      80: '80vh',
      screen: '100vh'
    }),

    extend: {
      colors: {
        brand: '#131313'
      }
    }
  },
  variants: {},
  plugins: []
}
