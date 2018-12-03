import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000'
}
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
