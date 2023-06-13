export const state = () => ({
  isOpenModalAddOrder: false,
});

export const getters = {
  isOpenModalAddOrder: ({ isOpenModalAddOrder }) => isOpenModalAddOrder,
};

export const mutations = {
  CHANGE_ORDER_MODAL_STATUS(state, flag) {
    state.isOpenModalAddOrder = flag;
  },
};

export const actions = {
  changeAddOrderModalStatus({ commit }, flag) {
    commit("CHANGE_ORDER_MODAL_STATUS", flag);
  },
};
