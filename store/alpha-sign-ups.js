export const actions = {
  async store(_store, { email }) {
    await this.$axios.get('/sanctum/csrf-cookie')

    await this.$axios.post('/api/alpha-sign-up', {
      email
    })
  }
}
