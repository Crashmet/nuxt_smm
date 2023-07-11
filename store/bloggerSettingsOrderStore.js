export const state = () => ({
  orderId: null,

  orderList: {},

  isLoading: true,

  isResponseOk: true,
});

export const getters = {
  orderId: ({ orderId }) => orderId,

  orderList: ({ orderList }) => orderList,

  isLoading: ({ isLoading }) => isLoading,

  isResponseOk: ({ isResponseOk }) => isResponseOk,
};

export const mutations = {
  SET_ORDER_ID(state, id) {
    state.orderId = id;
  },

  SET_ORDER_LIST(state, data) {
    state.orderList = data;
  },

  SET_STATUS_LOADING(state, flag) {
    state.isLoading = flag;
  },

  SET_STATUS_RESPONSE(state, flag) {
    state.isResponseOk = flag;
  },
};

export const actions = {
  setOrderId({ commit }, id) {
    commit("SET_ORDER_ID", id);
  },

  setStatusLoading({ commit }, flag) {
    commit("SET_STATUS_LOADING", flag);
  },

  async getOrderList({ commit, dispatch }, id) {
    dispatch("setStatusLoading", true);

    await this.$axios
      .$get(`orders/${id}/`)
      .then((response) => {
        dispatch("setStatusLoading", false);

        commit("SET_STATUS_RESPONSE", true);

        commit("SET_ORDER_LIST", response);
      })
      .catch((error) => {
        commit("SET_STATUS_RESPONSE", false);

        console.log(error.response);
      });
  },

  async setStatusOrder({ commit }, { id, status }) {
    await this.$axios
      .$get(`orders/response/${id}/?status=${status}`)
      .then((response) => {
        commit("statusMassageModalStore/ADD_STATUS", "success", { root: true });
      })
      .catch((error) => {
        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });

        console.log(error.response);
      });
  },
};
