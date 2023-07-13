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
    const list = response.map((el) => {
      switch (el.status) {
        case "new_order":
          el.status = {
            status: el.status,
            name: "Новый заказ",
            style: "badge-info",
          };
          break;
        case "in_progress":
          el.status = {
            status: el.status,
            name: "В работе",
            style: "badge-warning",
          };
          break;
        case "done":
          el.status = {
            status: el.status,
            name: "Выполнен",
            style: "badge-success",
          };
          break;
        case "accepted":
          el.status = {
            status: el.status,
            name: "Принят заказчиком",
            style: "badge-primary",
          };
          break;
        case "canceled":
          el.status = {
            status: el.status,
            name: "Отклонен",
            style: "badge-danger",
          };
          break;
        case "arbitration":
          el.status = {
            status: el.status,
            name: "Арбитраж",
            style: "badge-secondary",
          };
          break;
        default:
          el.status = {
            status: el.status,
            name: "-",
            style: "badge-light",
          };
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
