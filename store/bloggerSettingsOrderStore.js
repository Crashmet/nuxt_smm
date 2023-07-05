export const state = () => ({
  orderId: null,

  orderList: {},

  isLoading: true,
});

export const getters = {
  orderId: ({ orderId }) => orderId,

  orderList: ({ orderList }) => orderList,

  isLoading: ({ isLoading }) => isLoading,
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

        commit("SET_ORDER_LIST", response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
