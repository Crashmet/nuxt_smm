export const state = () => ({
  sessionid: null,

  csrftoken: null,

  role: null,
});

export const getters = {
  role: ({ role }) => role,
  sessionid: ({ sessionid }) => sessionid,
};

export const mutations = {
  SET_SESSION_ID(state, token) {
    state.sessionid = token;
  },

  SET_CSRF_TOKEN(state, csrf) {
    state.csrftoken = csrf;
  },

  SET_ROLE(state, role) {
    state.role = role;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const token = this.$cookies.get("sessionid");

    const csrf = this.$cookies.get("csrftoken");

    if (token) {
      commit("SET_SESSION_ID", token);
    }

    if (csrf) {
      commit("SET_CSRF_TOKEN", csrf);
    }

    await this.$axios
      .$get("account/")
      .then((response) => {
        commit("SET_ROLE", response.role);
      })
      .catch((error) => {});
  },
};
