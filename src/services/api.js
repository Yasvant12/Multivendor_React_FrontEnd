import axios from 'axios'

const api = axios.create({
  baseURL: '/',
  timeout: 5000,
})

export default api
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
})

export const fetchSampleProducts = async () => {
  // placeholder: returning static data for now
  return [
    { id: 'f1', title: 'Red Dress', category: 'fashion', price: 49 },
    { id: 'f2', title: 'Blue Jacket', category: 'fashion', price: 89 },
    { id: 'g1', title: 'Organic Apples', category: 'groceries', price: 4 },
  ]
}

export default api
