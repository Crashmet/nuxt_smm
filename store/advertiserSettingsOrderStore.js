export const state = () => ({
  orderId: null,

  orderList: {},

  validatorResponse: {},
});

export const getters = {
  orderId: ({ orderId }) => orderId,

  orderList: ({ orderList }) => orderList,

  validatorResponse: ({ validatorResponse }) => validatorResponse,
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
};

export const actions = {
  setOrderId({ commit }, id) {
    commit("SET_ORDER_ID", id);
  },

  async getOrderList({ commit }, id) {
    await this.$axios
      .$get(`orders/${id}/`)
      .then((response) => {
        commit("SET_ORDER_LIST", response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },

  async deleteOrder({ commit, dispatch }, id) {
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
    const dataJson = JSON.stringify(order);

    await this.$axios
      .$patch(`orders/${order.id}/`, dataJson)
      .then((response) => {
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
