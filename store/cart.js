const state = () => ({
  products: []
})

const getters = {
  getSortedProducts (state) {
    let products = [...new Set(state.products)]

    products.forEach(product => {
      product.number = calculateProductNumber(state.products, product._id)
      return calculateWholesale(product)
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
  removeOneFromCart (state, product) {
    let products = state.products
    let deleteCount = 0

    products = products.filter(item => {
      if (item._id === product._id && deleteCount === 0) {
        deleteCount += 1
        return false
      }
      return true
    })

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

function calculateProductNumber (products, id) {
  let count = 0
  products.forEach(item => {
    if (item._id === id) count += 1
  })
  return count
}

function calculateWholesale (product) {
  const count = parseInt(product.number)
  const category = parseInt(product.category)

  if (category === 1) {
    if (count > 0 && count <= 6) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit1)
    } else if (count > 6 && count <= 20) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit2)
    } else if (count > 20 && count <= 50) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit3)
    } else if (count > 50) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit4)
    }
  } else if (category === 2) {
    if (count > 0 && count <= 50) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit1)
    } else if (count > 50 && count <= 250) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit2)
    } else if (count > 250 && count <= 400) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit3)
    } else if (count > 400) {
      product.totalPrice = calculateTotalPrice(count, product.wholesale.limit4)
    }
  } else {
    if (product.discount) {
      product.totalPrice = calculateTotalPrice(count, product.discount)
    } else {
      product.totalPrice = calculateTotalPrice(count, product.price)
    }
  }

  return product
}

function calculateTotalPrice (count, price) {
  let totalPrice = 0
  for (let i = 0; i < count; i++) {
    totalPrice += price
  }
  return totalPrice
}
