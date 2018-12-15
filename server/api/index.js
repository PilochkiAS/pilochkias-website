const axios = require('axios')
const env = require('../env')

axios.defaults.baseURL = env.ADMIN_API_URL
if (process.env.herokuBaseURL) {
  axios.defaults.baseURL = 'https://pilochki-cms.herokuapp.com'
}

module.exports = {
  async getAllProducts (query) {
    let url = '/api/products'
    if (query.length > 0) {
      url += '?'
      query.forEach(item => {
        url += item
      })
    }

    const { data } = await axios.get(url)
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


