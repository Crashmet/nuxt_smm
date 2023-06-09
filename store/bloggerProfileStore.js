export const state = () => ({
  bloggerData: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
  },
});

export const getters = {
  bloggerData: ({ bloggerData }) => bloggerData,
};

export const mutations = {
  SET_SESSION_ID(state, response) {
    const { username, first_name, last_name, email } = response;

    const bloggerData = { username, first_name, last_name, email };

    state.bloggerData = bloggerData;
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
        commit("ADD_BLOGGER_DATA", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async changeBloggerData({ commit }, bloggerData) {
    const dataJson = JSON.stringify(bloggerData);

    await this.$axios
      .$patch("account/", dataJson)
      .then((response) => {
        // commit("CHANGE_BLOGGER_DATA", response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async changeBloggerPassword({ commit }, bloggerData) {
    const dataJson = JSON.stringify(bloggerData);

    await this.$axios
      .$put("account/password_change/", dataJson)
      .then((response) => {
        // commit("CHANGE_BLOGGER_PASSWORD", response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
