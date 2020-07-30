import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
})

axiosInstance.interceptors.response.use((response) => {
  return response
}, (error)=> {
  alert(error.response.data.message)
  return Promise.reject(error.response.data)
})

export default axiosInstance