export default {
  state: {
    isCollapse: false,
    overall: "全局的state"
  },

  mutations: {
    IS_COLLAPSE(state, collapse) {
      state.isCollapse = !collapse;
    },
    CHANGE_APP_STATE(state, data) {
      state.overall = data;
    }
  }
};
