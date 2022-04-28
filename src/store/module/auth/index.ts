import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

export interface Auth {
  name: String
}

export const auth = {
  namespaced: true,
  state() {
    return {
      name: "Tong Siyuan",
    }
  },
  mutations,
  getters,
  actions,
}
