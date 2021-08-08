import Axios, { AxiosRequestConfig } from 'axios'

Axios.defaults.timeout = 60 * 1000
Axios.defaults.withCredentials = true

Axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, error => {
  return Promise.reject(error)
})

// Axios.interceptors.response.use(response => {
//   if (response.data && response.status === 200) {
//     return response.data
//   }

//   return Promise.reject(response.data ? response.data.errorinfo : '')

// })

export default Axios