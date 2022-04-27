import axios from "../utils/axios"

export function login() {
  return axios.get("/login")
}
