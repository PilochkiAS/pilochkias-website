import axios from 'axios'

axios.defaults.baseURL = '/'
axios.defaults.proxyHeaders = false
axios.defaults.credentials = false

const fetchProducts = async () => {
  const { data } = await axios({
    url: '/api/products'
  })

  return data
}

export default {
  fetchProducts
}
