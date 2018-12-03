import api from './api'

const state = () => ({
  products: []
})

const getters = {
  getDiscountProducts (state) {
    return state.products.filter(item => item.discount || item.discount > 0)
  },
  getRandomProducts (state) {
    const products = []
    const ITEMS_IN_CAROUSEL = 6

    if (state.products.length < ITEMS_IN_CAROUSEL) return state.products

    while (products.length !== ITEMS_IN_CAROUSEL) {
      const randomIndex = Math.floor(Math.random() * state.products.length)
      const coincidenceProducts = products.filter(item => item._id === state.products[randomIndex]._id)

      if (coincidenceProducts.length === 0) {
        products.push(state.products[randomIndex])
      }
    }

    return products
  }
}

const mutations = {
  setProducts (state, products) {
    state.products = products
  }
}

const actions = {
  async nuxtServerInit ({ commit }, { req }) {
  },
  fetchProducts ({ commit }) {
    return api.fetchProducts().then(data => {
      commit('setProducts', data.data)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
