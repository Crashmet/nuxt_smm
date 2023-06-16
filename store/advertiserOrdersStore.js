export const state = () => ({
  isOpenModalAddOrder: false,

  advertiserOrdersList: [],

  validatorResponse: {},
});

export const getters = {
  isOpenModalAddOrder: ({ isOpenModalAddOrder }) => isOpenModalAddOrder,

  advertiserOrdersList: ({ advertiserOrdersList }) => advertiserOrdersList,

  validatorResponse: ({ validatorResponse }) => validatorResponse,
};

export const mutations = {
  CHANGE_ORDER_MODAL_STATUS(state, flag) {
    state.isOpenModalAddOrder = flag;
  },

  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },

  SET_ADVERTISER_ORDERS_LIST(state, response) {
    state.advertiserOrdersList = response;
  },
};

export const actions = {
  changeAddOrderModalStatus({ commit }, flag) {
    commit("CHANGE_ORDER_MODAL_STATUS", flag);
  },

  async advertiserNewOrderCreate({ commit }, order) {
    const dataJson = JSON.stringify(order);

    await this.$axios
      .$post("orders/create/", dataJson)
      .then((response) => {
        commit("SET_VALIDATOR_DATA", {});

        commit("statusMassageModalStore/ADD_STATUS", "success", { root: true });
      })
      .catch((error) => {
        commit("SET_VALIDATOR_DATA", error.response.data);

        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });

        console.log(error.response);
      });
  },

  async getAdvertiserOrdersList({ commit }) {
    await this.$axios
      .$get("orders/my_orders/?page_size=10")
      .then((response) => {
        commit("SET_ADVERTISER_ORDERS_LIST", response.data.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
