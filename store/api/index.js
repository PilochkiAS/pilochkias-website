import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:3000'
}
if (process.env.herokuBaseURL) {
  axios.defaults.baseURL = 'https://pilochki.herokuapp.com'
}

const fetchProducts = async () => {
  const { data } = await axios('api/products')

  return data
}

export default {
  fetchProducts
}
