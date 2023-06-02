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

  entryStatus: null,
});

export const getters = {
  validatorResponse: ({ validatorResponse }) => validatorResponse,

  entryStatus: ({ entryStatus }) => entryStatus,
};

export const mutations = {
  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },

  SET_STATUS(state, status) {
    state.entryStatus = status;

    console.log(state.entryStatus, 2222222);
  },
};

export const actions = {
  async onRegistration({ commit }, registerData) {
    const dataJson = JSON.stringify(registerData);
    console.log(dataJson);

    await this.$axios
      .$post("account/register/", dataJson)
      .then(function (response) {
        commit("SET_STATUS", 201);

        commit("SET_VALIDATOR_DATA", {});
      })
      .catch(function (error) {
        commit("SET_VALIDATOR_DATA", error.response.data);
      });
  },
};
