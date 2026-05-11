import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000
})

export const askQuestion = async (question) => {
  const response = await api.post('/api/ask', { question })
  return response.data
}

export const uploadDocument = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const response = await api.post('/api/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return response.data
}

export const getDocuments = async () => {
  const response = await api.get('/api/documents')
  return response.data
}

export const deleteDocument = async (id) => {
  const response = await api.delete(`/api/documents/${id}`)
  return response.data
}

export default api