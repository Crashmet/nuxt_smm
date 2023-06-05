export const state = () => ({
  registerData: {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    username: "",
  },

  validatorResponse: {},

  isRegistered: false,
});

export const getters = {
  validatorResponse: ({ validatorResponse }) => validatorResponse,

  isRegistered: ({ isRegistered }) => isRegistered,
};

export const mutations = {
  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },

  SET_STATUS(state, status) {
    state.isRegistered = status;
  },
};

export const actions = {
  async onRegistration({ commit }, registerData) {
    const dataJson = JSON.stringify(registerData);
    await this.$axios
      .$post("account/register/", dataJson)
      .then(function (response) {
        commit("SET_STATUS", true);

        commit("SET_VALIDATOR_DATA", {});
      })
      .catch(function (error) {
        commit("SET_VALIDATOR_DATA", error.response.data);
      });
  },

  setRegisterStatus({ commit }, status) {
    commit("SET_STATUS", status);
  },
};
