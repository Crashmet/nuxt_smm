export const state = () => ({
  access_token: null,
});

export const getters = {
  access_token: ({ access_token }) => access_token,
};

export const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token;
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    const token = this.$cookies.get("access_token");

    if (token) {
      commit("SET_ACCESS_TOKEN", token);
    }
  },
};
