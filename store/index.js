export const state = () => ({
  sessionid: null,

  role: "advertiser",
});

export const getters = {
  role: ({ role }) => role,
  sessionid: ({ sessionid }) => sessionid,
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
  async nuxtServerInit({ commit }) {
    const token = this.$cookies.get("sessionid");

    if (token) {
      commit("SET_SESSION_ID", token);
    }

    await this.$axios
      .$get("account")
      .then((response) => {
        console.log(response.role);

        commit("SET_ROLE", response.role);
      })
      .catch((error) => {});
  },
};
