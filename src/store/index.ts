import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { auth, Auth } from "./module/auth"

export interface State {
  count: number
  auth?: Auth
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      count: 0,
    }
  },
  modules: {
    auth,
  },
})

// define useStore in order to get the correct typescript type
export function useStore() {
  return baseUseStore(key)
}
