export const state = () => ({
  isOpenModalAddOrder: false,

  count: 48,

  activePage: 1,

  advertiserOrdersList: [],

  validatorResponse: {},

  filtersTitles: [
    {
      title: "Наименование",
      isSortUp: false,
      isActive: false,
      isWorks: false,
    },
    {
      title: "Бюджет",
      isSortUp: false,
      isActive: false,
      isWorks: true,
      APIRequestUp: "budget_per_subscriber",
      APIRequestDown: "-budget_per_subscriber",
    },
    {
      title: "Дата",
      isSortUp: false,
      isActive: false,
      isWorks: true,
      APIRequestUp: "end_date",
      APIRequestDown: "-end_date",
    },
    {
      title: "Соцсеть",
      isSortUp: false,
      isActive: false,
      isWorks: false,
    },
    {
      title: "Статус исполнения",
      isSortUp: false,
      isActive: false,
      isWorks: false,
    },
  ],
});

export const getters = {
  count: ({ count }) => count,

  activePage: ({ activePage }) => activePage,

  filtersTitles: ({ filtersTitles }) => filtersTitles,

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

  SET_COUNT_CARDS(state, count) {
    state.count = count;
  },
};

export const actions = {
  changeAddOrderModalStatus({ commit }, flag) {
    commit("CHANGE_ORDER_MODAL_STATUS", flag);
  },

  async advertiserNewOrderCreate({ commit, dispatch }, order) {
    const dataJson = JSON.stringify(order);

    await this.$axios
      .$post("orders/create/", dataJson)
      .then((response) => {
        commit("SET_VALIDATOR_DATA", {});

        commit("statusMassageModalStore/ADD_STATUS", "success", { root: true });

        commit("CHANGE_ORDER_MODAL_STATUS", false);

        dispatch("getAdvertiserOrdersList");
      })
      .catch((error) => {
        commit("SET_VALIDATOR_DATA", error.response.data);

        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });

        console.log(error.response);
      });
  },

  async getAdvertiserOrdersList(
    { commit },
    { ordering = "", activePage = "", pageSize = "", searchInput = "" }
  ) {
    await this.$axios
      .$get(
        `orders/my_orders/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`
      )
      .then((response) => {
        commit("SET_COUNT_CARDS", response.count);

        commit("SET_ADVERTISER_ORDERS_LIST", response.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
