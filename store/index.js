export const state = () => ({
  sessionid: null,
});

export const getters = {
  sessionid: ({ sessionid }) => sessionid,
};

export const mutations = {
  SET_SESSION_ID(state, token) {
    state.sessionid = token;
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    const token = this.$cookies.get("sessionid");
    console.log(token);

    if (token) {
      commit("SET_SESSION_ID", token);
    }
  },
};
