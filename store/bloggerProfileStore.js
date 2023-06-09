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
});

export const getters = {
  bloggerData: ({ bloggerData }) => bloggerData,

  isOpenModalChangeData: ({ isOpenModalChangeData }) => isOpenModalChangeData,

  isOpenModalChangePassword: ({ isOpenModalChangePassword }) =>
    isOpenModalChangePassword,
};

export const mutations = {
  ADD_BLOGGER_DATA(state, response) {
    const { username, first_name, last_name, email } = response;

    const bloggerData = { username, first_name, last_name, email };

    state.bloggerData = bloggerData;
  },

  CHANGE_DATA_MODAL_STATUS(state, flag) {
    state.isOpenModalChangeData = flag;
  },

  CHANGE_PASSWORD_MODAL_STATUS(state, flag) {
    state.isOpenModalChangePassword = flag;
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
      .$patch({
        url: "account/",
        data: dataJson,
        headers: {
          "X-Csrftoken": `${this.$cookies.get("csrftoken")}`,
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((response) => {
        console.log(response);

        // location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async changeBloggerPassword({ commit }, passwordData) {
    const dataJson = JSON.stringify(passwordData);

    await this.$axios
      .$put({
        url: "account/password_change/",
        data: dataJson,
        headers: {
          "X-Csrftoken": `${this.$cookies.get("csrftoken")}`,
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((response) => {
        console.log(response);
        // location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
