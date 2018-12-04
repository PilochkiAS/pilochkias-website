const axios = require('axios')
const env = require('../env')

axios.defaults.baseURL = env.ADMIN_API_URL
if (process.env.herokuBaseURL) {
  axios.defaults.baseURL = 'https://pilochki-cms.herokuapp.com'
}

module.exports = {
  async getAllProducts () {
    const { data } = await axios.get('/api/products')
    return data.data
  },
  async getProductById (id) {
    const { data } = await axios.get('/api/product/' + id)
    return data.data
  },
  async createNewOrder (order) {
    const { data } = await axios.post('/api/orders', order)
    return data.data
  }
};


