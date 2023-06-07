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
        console.log(response);

        commit("SET_VALIDATOR_DATA", {});

        location.reload();
      })
      .catch((error) => {
        commit("SET_VALIDATOR_DATA", error.response.data);
      });
  },

  async onLogout({ commit }) {
    // commit("DELETE_STATUS");

    await this.$axios
      .$delete("account/", {
        data: {},
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "text/html",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // location.reload();
  },
};
