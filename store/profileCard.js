export const state = () => ({
  username: "",

  profileDataList: {},

  isLoading: true,

  isResponseOk: true,
});

export const getters = {
  username: ({ username }) => username,

  profileDataList: ({ profileDataList }) => profileDataList,

  isLoading: ({ isLoading }) => isLoading,

  isResponseOk: ({ isResponseOk }) => isResponseOk,
};

export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username;
  },

  SET_PROFILE_DATA_LIST(state, data) {
    state.profileDataList = data;
  },

  SET_STATUS_LOADING(state, flag) {
    state.isLoading = flag;
  },

  SET_STATUS_RESPONSE(state, flag) {
    state.isResponseOk = flag;
  },
};

export const actions = {
  setUsername({ commit }, username) {
    commit("SET_USERNAME", username);
  },

  setStatusLoading({ commit }, flag) {
    commit("SET_STATUS_LOADING", flag);
  },

  async getProfileDataList({ commit, dispatch }, username) {
    dispatch("setStatusLoading", true);
    commit("SET_STATUS_RESPONSE", true);

    await this.$axios
      .$get(`account/${username}/`)
      .then((response) => {
        dispatch("setStatusLoading", false);

        commit("SET_PROFILE_DATA_LIST", response);
      })
      .catch((error) => {
        console.log(error.response);

        commit("SET_STATUS_RESPONSE", false);
      });
  },
};
