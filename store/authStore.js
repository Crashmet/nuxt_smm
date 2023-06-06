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
  ADD_ACCESS_TOKEN(state, { name, token }) {
    this.$cookies.set(name, token, {
      path: "/",
      maxAge: 60 * 60 * 60 * 24 * 7,
    });
  },

  ADD_REFRESH_TOKEN(state, token) {},

  DELETE_STATUS() {
    this.$cookies.removeAll();
  },

  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },
};

export const actions = {
  async onLogin({ commit }, loginData) {
    const dataJson = JSON.stringify(loginData);

    await this.$axios
      .$post("account/login/", dataJson)
      .then((response) => {
        // commit("ADD_ACCESS_TOKEN", {
        //   name: "access_token",
        //   token: response.access,
        // });

        console.log(response.headers);

        commit("SET_VALIDATOR_DATA", {});

        // location.reload();
      })
      .catch((error) => {
        commit("DELETE_STATUS");

        commit("SET_VALIDATOR_DATA", error.response.data);
      });
  },

  async onLogout({ commit }) {
    // commit("DELETE_STATUS");

    await this.$axios.$delete();

    location.reload();
  },

  addAccessToken({ commit }, token) {
    commit("ADD_ACCESS_TOKEN", token);
  },
};
