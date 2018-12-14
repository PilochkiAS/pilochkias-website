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
        if (item._id === product._id) {
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
  changeProductNumber (state, { number, product }) {
    let products = state.products
    let count = products.filter(item => item._id === product._id).length

    if (parseInt(number) > count) {
      for (let i = 0; i < parseInt(number) - count; i++) {
        products.push(product)
      }
    } else if (parseInt(number) < count) {
      let removeCount = 0
      products = products.filter(item => {
        if (removeCount === count - parseInt(number)) {
          return true
        }
        if (item._id === product._id) {
          removeCount += 1
          return false
        }
        return true
      })
    }

    state.products = products
  },
  removeFromCart (state, product) {
    let products = state.products
    products = products.filter(item => item._id !== product._id)
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
