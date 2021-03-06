import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "home" */ "@/src/pages/LoginP/index.vue"),
      meta: {
        index: 1,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import(/* webpackChunkName: "home" */ "@/src/pages/SignUp/index.vue"),
      meta: {
        index: 2,
      },
    },
  ],
})

export default router
