import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000'

const fetchProducts = async () => {
  const { data } = await axios('api/products')

  return data
}

export default {
  fetchProducts
}
