import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:80'
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
