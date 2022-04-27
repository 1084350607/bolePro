import { Store } from "vuex"
import st from "./state"

function add(state: typeof st) {
  state.count++
}

export default {
  add,
}
