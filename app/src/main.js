import Vue from "vue";
import router from "./router";
import store from "./store";
import system from "./system";
import * as components from "./components";
import utils from "./utils";
import "./hook";
import App from "./App";
import "@/assets/styles/common.scss";
import "@/assets/styles/element-ui.scss";

Vue.use(window.ELEMENT, {
  size: "mini"
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});

export default { utils, components, router, store, system };
