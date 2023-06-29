export const state = () => ({
  orderId: null,

  orderList: {},

  status: "",
});

export const getters = {
  orderId: ({ orderId }) => orderId,

  orderList: ({ orderList }) => orderList,

  status: ({ status }) => status,
};

export const mutations = {
  SET_ORDER_ID(state, id) {
    state.orderId = id;
  },

  SET_ORDER_LIST(state, data) {
    state.orderList = data;
  },

  SET_ORDER_STATUS(state, status) {
    state.status = status;
  },
};

export const actions = {
  setOrderStatus({ commit }, status = "") {
    commit("SET_ORDER_STATUS", status);
  },

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

        dispatch("setOrderStatus", "success");
      })
      .catch((error) => {
        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });

        console.log(error.response);
      });
  },
};
