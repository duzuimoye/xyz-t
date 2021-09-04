import Axios, { AxiosRequestConfig } from 'axios'

Axios.defaults.timeout = 60 * 1000
Axios.defaults.withCredentials = true

Axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, error => {
  return Promise.reject(error)
})

export default Axios