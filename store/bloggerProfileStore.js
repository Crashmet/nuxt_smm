export const state = () => ({
  bloggerData: {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
  },

  isOpenModalChangeData: false,
  isOpenModalChangePassword: false,

  validatorResponse: {},
});

export const getters = {
  bloggerData: ({ bloggerData }) => bloggerData,

  isOpenModalChangeData: ({ isOpenModalChangeData }) => isOpenModalChangeData,

  isOpenModalChangePassword: ({ isOpenModalChangePassword }) =>
    isOpenModalChangePassword,

  validatorResponse: ({ validatorResponse }) => validatorResponse,
};

export const mutations = {
  ADD_BLOGGER_DATA(state, response) {
    const { username, first_name, last_name, email, role } = response;

    const bloggerData = { username, first_name, last_name, email, role };

    state.bloggerData = bloggerData;
  },

  CHANGE_DATA_MODAL_STATUS(state, flag) {
    state.isOpenModalChangeData = flag;
  },

  CHANGE_PASSWORD_MODAL_STATUS(state, flag) {
    state.isOpenModalChangePassword = flag;
  },

  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },
};

export const actions = {
  changeDataModalStatus({ commit }, flag) {
    commit("CHANGE_DATA_MODAL_STATUS", flag);
  },

  changePasswordModalStatus({ commit }, flag) {
    commit("CHANGE_PASSWORD_MODAL_STATUS", flag);
  },

  async addBloggerData({ commit }) {
    await this.$axios
      .$get("account/")
      .then((response) => {
        commit("ADD_BLOGGER_DATA", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async changeBloggerData({ commit }, bloggerData) {
    const dataJson = JSON.stringify(bloggerData);

    await this.$axios
      .$patch("account/", dataJson)
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error.response);
      });
  },

  async changeBloggerPassword({ commit }, passwordData) {
    const dataJson = JSON.stringify(passwordData);

    await this.$axios
      .$put("account/password_change/", dataJson)
      .then((response) => {
        commit("SET_VALIDATOR_DATA", {});

        location.reload();
      })
      .catch((error) => {
        commit("SET_VALIDATOR_DATA", error.response.data);
      });
  },
};
