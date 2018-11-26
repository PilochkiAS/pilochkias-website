const state = () => ({
  products: []
})

const getters = {

}

const mutations = {
  addToCart (state, product) {
    let products = state.products
    products.push(product)
    state.products = products
  },
  removeFromCart (state, product) {
    let products = state.products
    products.push(product)
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
