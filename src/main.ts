import { createApp } from "vue"
import "./common/css/base.css"
import "./index.css"
import { store, key } from "./store"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(store, key)
app.use(router)
app.mount("#app")
