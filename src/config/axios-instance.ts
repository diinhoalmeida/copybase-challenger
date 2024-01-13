import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json'
  }
})

export default api
