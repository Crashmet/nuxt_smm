export const state = () => ({
  bloggerData: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
});

export const getters = {
  bloggerData: ({ bloggerData }) => bloggerData,
};

export const mutations = {
  SET_SESSION_ID(state, token) {
    state.sessionid = token;
  },

  SET_ROLE(state, role) {
    state.role = role;
  },
};

export const actions = {
  async addBloggerData({ commit }) {
    await this.$axios
      .$get("account/")
      .then((response) => {
        commit("ADD_BLOGGER_DATA", response.role);
      })
      .catch((error) => {});
  },
};
