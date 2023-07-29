export const state = () => ({
  // убрать
  userList: [
    // {
    //   username: "yesha_blogger",
    //   pk: "5",
    // },
    // {
    //   username: "Cat12",
    //   pk: "4",
    // },
    // {
    //   username: "yesha",
    //   pk: "1",
    // },
    // {
    //   username: "artemiurev",
    //   pk: "2",
    // },
  ],

  // убрать
  dialogsList: [
    // {
    //   username: "yesha_blogger",
    //   pk: "5",
    // },
    // {
    //   username: "Cat12",
    //   pk: "4",
    // },
    // {
    //   username: "yesha",
    //   pk: "1",
    // },
    // {
    //   username: "artemiurev",
    //   pk: "2",
    // },
  ],

  messagesList: [],
  isLoadingMessagesList: false,
  isResponseMessagesList: false,

  ws: null,
  isWsConnected: false,
});

export const getters = {
  userList: ({ userList }) => userList,

  dialogsList: ({ dialogsList }) => dialogsList,

  messagesList: ({ messagesList }) => messagesList,
  isLoadingMessagesList: ({ isLoadingMessagesList }) => isLoadingMessagesList,
  isResponseMessagesList: ({ isResponseMessagesList }) =>
    isResponseMessagesList,

  isWsConnected: ({ isWsConnected }) => isWsConnected,
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

  ADD_MESSAGE(state, msg) {
    state.messagesList.push(msg);
  },

  SET_CONNECTED_STATUS(state, status) {
    state.isWsConnected = status;
  },

  SET_WS(state, ws) {
    state.ws = ws;
  },

  SET_LOADING_MESSAGES_LIST_STATUS(state, status) {
    state.isLoadingMessagesList = status;
  },

  SET_RESPONSE_MESSAGES_LIST_STATUS(state, status) {
    state.isResponseMessagesList = status;
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
    commit("SET_LOADING_MESSAGES_LIST_STATUS", true);

    await this.$axios
      .$get(`chat/messages/${dialog_with}/`)
      .then((response) => {
        commit("SET_MESSAGES_LIST", response.data);

        commit("SET_LOADING_MESSAGES_LIST_STATUS", false);
        commit("SET_RESPONSE_MESSAGES_LIST_STATUS", true);
      })
      .catch((error) => {
        commit("SET_RESPONSE_MESSAGES_LIST_STATUS", false);
      });
  },

  startWebSocketChat({ commit, state }) {
    if (state.ws === null) {
      const socket = new WebSocket(`wss://socmediamarket.ru/api/chat_ws`);

      commit("SET_WS", socket);
    }

    if (state.wsConnectedfalse === false) {
      console.log("start test socket");

      state.ws.onopen = function () {
        console.log("socket connected");
        commit("SET_CONNECTED_STATUS", true);
      };

      state.ws.onmessage = function (message) {
        console.log("message:", message);
        commit("ADD_MESSAGE", message.data);
      };

      state.ws.onclose = function () {
        console.log("socket disconnected");
        commit("SET_CONNECTED_STATUS", false);
      };

      state.ws.onerror = function (error) {
        console.log("error", error);
      };
    }
  },

  sendToWebSocket({ state }, message) {
    console.log("start test send 1");

    const stringifiedMessage = JSON.stringify(message);

    if (state.ws.readyState === 1) {
      console.log("start test send 2");

      state.ws.send(stringifiedMessage);
      return;
    }

    state.ws.addEventListener(
      "open",
      () => {
        state.ws.send(stringifiedMessage);
      },
      { once: true }
    );
  },

  finishWebSocket({ commit, state }) {
    if (state.wsConnectedfalse === true) {
      socket.close();
      commit("SET_CONNECTED_STATUS", false);
    }
  },
};
