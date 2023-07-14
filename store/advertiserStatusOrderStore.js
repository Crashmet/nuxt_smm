import { STATUS } from "~/assets/consts/status";

export const state = () => ({
  isLoading: true,

  count: 0,

  activePage: 1,

  statusOrderList: [],

  filtersTitles: [
    {
      title: "Username",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      APIRequestUp: "username",
      APIRequestDown: "-username",
    },
    {
      title: "First name",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
    {
      title: "Last name",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
    {
      title: "Email",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
    {
      title: "Role",
      isArrowUp: false,
      isActive: false,
      isWork: false,
    },
    {
      title: "Status",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      APIRequestUp: "responses_to_orders__status",
      APIRequestDown: "-responses_to_orders__status",
    },
    {
      title: "Comand",
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

  statusOrderList: ({ statusOrderList }) => statusOrderList,
};

export const mutations = {
  SET_STATUS_LOADING(state, flag) {
    state.isLoading = flag;
  },

  SET_ACTIVE_PAGE(state, value) {
    state.activePage = value;
  },

  SET_COUNT_CARDS(state, count) {
    state.count = count;
  },

  SET_STATUS_ORDER_LIST(state, response) {
    const filteredList = response.filter(
      (el) =>
        el.respond_status !== "canceled" && el.respond_status !== "new_order"
    );

    const list = filteredList.map((el) => {
      switch (el.status) {
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

    state.statusOrderList = list;
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

  updateFiltersTitles({ commit }, filterTitle) {
    commit("UPDATE_FILTER_TITLE", filterTitle);
  },

  resetFiltersTitles({ commit }) {
    commit("RESET_FILTER_TITLE");
  },

  async getStatusOrderList(
    { commit, dispatch },
    {
      id = null,
      ordering = "",
      activePage = "1",
      pageSize = "",
      searchInput = "",
    }
  ) {
    dispatch("setStatusLoading", true);

    await this.$axios
      .$get(
        `orders/${id}/respondents/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`
      )
      .then((response) => {
        dispatch("setStatusLoading", false);

        commit("SET_COUNT_CARDS", response.count);

        commit("SET_STATUS_ORDER_LIST", response.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
