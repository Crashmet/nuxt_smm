import { STATUS } from "~/assets/consts/status";

export const state = () => ({
  isLoading: true,

  isOpenModalAddOrder: false,

  count: 29,

  activePage: 1,

  advertiserOrdersList: [],

  validatorResponse: {},

  filtersTitles: [
    {
      title: "Наименование",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
    {
      title: "Бюджет",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      APIRequestUp: "budget_per_subscriber",
      APIRequestDown: "-budget_per_subscriber",
    },
    {
      title: "Дата",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      APIRequestUp: "end_date",
      APIRequestDown: "-end_date",
    },
    {
      title: "Соцсеть",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
    {
      title: "Статус",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
  ],
});

export const getters = {
  isLoading: ({ isLoading }) => isLoading,

  count: ({ count }) => count,

  activePage: ({ activePage }) => activePage,

  filtersTitles: ({ filtersTitles }) => filtersTitles,

  isOpenModalAddOrder: ({ isOpenModalAddOrder }) => isOpenModalAddOrder,

  advertiserOrdersList: ({ advertiserOrdersList }) => advertiserOrdersList,

  validatorResponse: ({ validatorResponse }) => validatorResponse,
};

export const mutations = {
  SET_STATUS_LOADING(state, flag) {
    state.isLoading = flag;
  },

  CHANGE_ORDER_MODAL_STATUS(state, flag) {
    state.isOpenModalAddOrder = flag;
  },

  SET_VALIDATOR_DATA(state, validatorResponse) {
    state.validatorResponse = validatorResponse;
  },

  SET_ADVERTISER_ORDERS_LIST(state, response) {
    const list = response.map((el) => {
      switch (el.respond_status) {
        case "new_order":
          el.respond_status = STATUS.new_order;
          break;
        case "in_progress":
          el.respond_status = STATUS.in_progress;
          break;
        case "done":
          el.respond_status = STATUS.done;
          break;
        case "accepted":
          el.respond_status = STATUS.accepted;
          break;
        case "canceled":
          el.respond_status = STATUS.canceled;
          break;
        case "arbitration":
          el.respond_status = STATUS.arbitration;
          break;
        default:
          el.respond_status = STATUS.default;
      }

      return el;
    });

    state.advertiserOrdersList = list;
  },

  SET_COUNT_CARDS(state, count) {
    state.count = count;
  },

  SET_ACTIVE_PAGE(state, value) {
    state.activePage = value;
  },

  UPDATE_FILTER_TITLE(state, filterTitle) {
    const newfiltersTitles = state.filtersTitles.map((el) => {
      if (el.title === filterTitle.title) {
        el = { ...el, ...filterTitle };
      } else {
        el.isArrowUp = false;
        el.isActive = false;
      }

      return el;
    });

    state.filtersTitles = newfiltersTitles;
  },

  RESET_FILTER_TITLE(state) {
    const newfiltersTitles = state.filtersTitles.map((el) => {
      el.isArrowUp = false;
      el.isActive = false;

      return el;
    });

    state.filtersTitles = newfiltersTitles;
  },
};

export const actions = {
  setStatusLoading({ commit }, flag) {
    commit("SET_STATUS_LOADING", flag);
  },

  setActivePage({ commit }, value) {
    commit("SET_ACTIVE_PAGE", value);
  },

  changeAddOrderModalStatus({ commit }, flag) {
    commit("CHANGE_ORDER_MODAL_STATUS", flag);
  },

  updateFiltersTitles({ commit }, filterTitle) {
    commit("UPDATE_FILTER_TITLE", filterTitle);
  },

  resetFiltersTitles({ commit }) {
    commit("RESET_FILTER_TITLE");
  },

  async advertiserNewOrderCreate({ commit, dispatch }, order) {
    const dataJson = JSON.stringify(order);

    await this.$axios
      .$post("orders/create/", dataJson)
      .then((response) => {
        commit("SET_VALIDATOR_DATA", {});

        commit("statusMassageModalStore/ADD_STATUS", "success", { root: true });

        commit("CHANGE_ORDER_MODAL_STATUS", false);

        dispatch("getAdvertiserOrdersList", {});
      })
      .catch((error) => {
        commit("SET_VALIDATOR_DATA", error.response.data);

        commit("statusMassageModalStore/ADD_STATUS", "error", { root: true });

        console.log(error.response);
      });
  },

  async getAdvertiserOrdersList(
    { commit, dispatch },
    { ordering = "", activePage = "1", pageSize = "", searchInput = "" }
  ) {
    dispatch("setStatusLoading", true);

    await this.$axios
      .$get(
        `orders/my_orders/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`
      )
      .then((response) => {
        dispatch("setStatusLoading", false);

        commit("SET_COUNT_CARDS", response.count);

        commit("SET_ADVERTISER_ORDERS_LIST", response.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
