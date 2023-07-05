export const state = () => ({
  orderId: null,

  orderList: {},

  validatorResponse: {},

  isLoading: true,

  isResponseOk: true,
});

export const getters = {
  orderId: ({ orderId }) => orderId,

  orderList: ({ orderList }) => orderList,

  validatorResponse: ({ validatorResponse }) => validatorResponse,

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

  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
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

  async deleteOrder({ commit }, id) {
    await this.$axios
      .$delete(`orders/${id}/`)
      .then((response) => {
        commit("statusMassageModalStore/ADD_STATUS", "success", { root: true });

        this.app.router.go(-1);
      })
      .catch((error) => {
        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });

        console.log(error.response);
      });
  },

  async updateOrderList({ commit, dispatch }, order) {
    dispatch("setStatusLoading", true);

    const dataJson = JSON.stringify(order);

    await this.$axios
      .$patch(`orders/${order.id}/`, dataJson)
      .then((response) => {
        dispatch("setStatusLoading", false);

        commit("SET_VALIDATOR_DATA", {});

        commit("SET_ORDER_LIST", response);

        commit("statusMassageModalStore/ADD_STATUS", "success", { root: true });

        dispatch(
          "advertiserOrdersStore/getAdvertiserOrdersList",
          {},
          { root: true }
        );

        this.app.router.go(-1);
      })
      .catch((error) => {
        commit("SET_VALIDATOR_DATA", error.response.data);

        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });
      });
  },
};
