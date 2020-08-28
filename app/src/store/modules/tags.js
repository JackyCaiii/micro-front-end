const TAGS_KEY = "TAGS_KEY";

let data;

try {
  const local = sessionStorage.getItem(TAGS_KEY) || [];
  data = JSON.parse(local);
} catch (error) {
  data = [];
}

export default {
  state: {
    data
  },

  mutations: {
    SET_TAGS(state, data) {
      state.data = data;
      update(state.data);
    },

    ADD_TAG(state, { route, index }) {
      state.data.splice(index + 1, 0, route);
      update(state.data);
    },

    REMOVE_TAG(state, keyword) {
      if (keyword) {
        const index = findTagIndex(state.data, keyword);
        if (index !== -1) {
          state.data.splice(index, 1);
          update(state.data);
        }
      }
    },

    REMOVE_ALL_TAG() {
      update([]);
    }
  }
};

function findTagIndex(data, keyword) {
  return data.findIndex(item => item.path === keyword || item.name === keyword);
}

function update(data) {
  sessionStorage.setItem(TAGS_KEY, JSON.stringify(data));
}
