const state = () => ({
  products: []
})

const getters = {
  getSortedProducts (state) {
    let products = [...new Set(state.products)]

    products.forEach(product => {
      let count = 0
      let totalPrice = 0

      state.products.forEach(item => {
        if (item.id === product.id) {
          count += 1

          if (item.discount) totalPrice += item.discount
          else totalPrice += item.price
        }
      })

      product.number = count
      product.totalPrice = totalPrice
    })

    return products
  }
}

const mutations = {
  addToCart (state, product) {
    let products = state.products
    products.push(product)
    state.products = products
  },
  removeFromCart (state, product) {
    let products = state.products
    products = products.filter(item => item.id !== product.id)
    state.products = products
  }
}

const actions = {
  async nuxtServerInit ({ commit }, { req }) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
