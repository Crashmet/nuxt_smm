export const state = () => ({
  isOpenModal: false,

  status: [],
});

export const getters = {
  isOpenModal: ({ isOpenModal }) => isOpenModal,
  status: ({ status }) => status,
};

export const mutations = {
  CHANGE_MESSAGE_MODAL_STATUS(state, flag) {
    state.isOpenModal = flag;
  },

  ADD_STATUS(state, status) {
    state.status.push(status);
  },
};

export const actions = {
  changeMessageModalStatus({ commit }, flag) {
    commit("CHANGE_MESSAGE_MODAL_STATUS", flag);
  },

  addStatus({ commit }, status) {
    commit("ADD_STATUS", status);
  },
};
