import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getLocations = () => api.get('/locations')
export const addExpense = (data) => api.post('/expenses', data)
