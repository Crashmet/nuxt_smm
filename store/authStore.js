export const state = () => ({
  loginData: {
    username: "",
    password: "",
  },

  validatorResponse: {},
});

export const getters = {
  validatorResponse: ({ validatorResponse }) => validatorResponse,
};

export const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.access_token = token;

    localStorage.setItem("access_token", token);
  },

  SET_REFRESH_TOKEN(state, token) {
    state.refresh_token = token;

    localStorage.setItem("refresh_token", token);
  },

  DELETE_STATUS() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },
};

export const actions = {
  async onLogin({ commit }, loginData) {
    const dataJson = JSON.stringify(loginData);

    await this.$axios
      .$post("account/token/", dataJson)
      .then(function (response) {
        commit("SET_ACCESS_TOKEN", response.access);
        commit("SET_REFRESH_TOKEN", response.refresh);

        commit("SET_VALIDATOR_DATA", {});

        location.reload();
      })
      .catch(function (error) {
        commit("DELETE_STATUS");

        // commit("SET_VALIDATOR_DATA", response.data);
      });
  },

  async onLogout({ commit }) {
    commit("DELETE_STATUS");

    // await this.$axios.$delete();

    location.reload();
  },
};
