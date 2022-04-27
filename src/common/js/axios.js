import axios from "axios"

/*
 * 超时时间: 5000ms
 */
const _axios = config => {
  const service = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 5000,
  })
  return service(config)
}

_axios.interceptors.request.use(
  config => {
    // 统一请求前缀
    config.url = "./apiPro" + config.url
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default _axios
