import Vuex from "vuex";
import menus from "./modules/menus";
import tags from "./modules/tags";
import app from "./modules/app";
import getters from "./getters";

export default new Vuex.Store({
  modules: {
    menus,
    tags,
    app
  },
  getters
});
