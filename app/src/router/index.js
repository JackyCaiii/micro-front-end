import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/login",
      name: "account-login",
      component: () => import("@/views/login")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home")
    },
    { path: "/error", component: () => import("@/views/error") }
  ]
});
