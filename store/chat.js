export const state = () => ({
  // убрать
  userList: [
    {
      username: "yesha_blogger",
      pk: "5",
    },
    {
      username: "Cat12",
      pk: "4",
    },
    {
      username: "yesha",
      pk: "1",
    },
    {
      username: "artemiurev",
      pk: "2",
    },
  ],

  // убрать
  dialogsList: [
    {
      username: "yesha_blogger",
      pk: "5",
    },
    {
      username: "Cat12",
      pk: "4",
    },
    {
      username: "yesha",
      pk: "1",
    },
    {
      username: "artemiurev",
      pk: "2",
    },
  ],

  messagesList: [],
});

export const getters = {
  userList: ({ userList }) => userList,

  dialogsList: ({ dialogsList }) => dialogsList,

  messagesList: ({ messagesList }) => messagesList,
};

export const mutations = {
  SET_USER_LIST(state, list) {
    state.userList = list;
  },

  SET_DIALOGS_LIST(state, list) {
    state.userList = list;
  },

  SET_MESSAGES_LIST(state, list) {
    state.messagesList = list;
  },
};

export const actions = {
  async getUserList({ commit }) {
    await this.$axios
      .$get("chat/users/")
      .then((response) => {
        commit("SET_USER_LIST", response);
      })
      .catch((error) => {});
  },

  async getDialogsList({ commit }) {
    await this.$axios
      .$get("chat/dialogs/")
      .then((response) => {
        commit("SET_DIALOGS_LIST", response.data);
      })
      .catch((error) => {});
  },

  // async getAllMessagesList({ commit }) {
  //   await this.$axios
  //     .$get("chat/dialogs/")
  //     .then((response) => {
  //       commit("SET_DIALOGS_LIST", response.data);
  //     })
  //     .catch((error) => {});
  // },

  async getMessagesList({ commit }, dialog_with) {
    await this.$axios
      .$get(`chat/messages/${dialog_with}/`)
      .then((response) => {
        commit("SET_MESSAGES_LIST", response.data);
      })
      .catch((error) => {});
  },
};
