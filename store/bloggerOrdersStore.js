export const state = () => ({
  isLoading: true,

  count: 0,

  activePage: 1,

  bloggerOrdersList: [],

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
      title: "Статус",
      isSortUp: false,
      isActive: false,
      isWorks: true,
      APIRequestUp: "respond_status",
      APIRequestDown: "-respond_status",
    },
  ],
});

export const getters = {
  isLoading: ({ isLoading }) => isLoading,

  count: ({ count }) => count,

  activePage: ({ activePage }) => activePage,

  filtersTitles: ({ filtersTitles }) => filtersTitles,

  bloggerOrdersList: ({ bloggerOrdersList }) => bloggerOrdersList,
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

  SET_BLOGGER_ORDERS_LIST(state, response) {
    const filteredList = response.filter(
      (el) => el.respond_status !== "canceled"
    );

    const list = filteredList.map((el) => {
      switch (el.respond_status) {
        case "new_order":
          el.respond_status = {
            tag: el.respond_status,
            name: "Новый заказ",
            style: "badge-info",
          };
          break;
        case "in_progress":
          el.respond_status = {
            tag: el.respond_status,
            name: "В работе",
            style: "badge-warning",
          };
          break;
        case "done":
          el.respond_status = {
            tag: el.respond_status,
            name: "Выполнен",
            style: "badge-success",
          };
          break;
        case "accepted":
          el.respond_status = {
            tag: el.respond_status,
            name: "Принят заказчиком",
            style: "badge-primary",
          };
          break;
        case "canceled":
          el.respond_status = {
            tag: el.respond_status,
            name: "Отклонен",
            style: "badge-danger",
          };
          break;
        case "arbitration":
          el.respond_status = {
            tag: el.respond_status,
            name: "Арбитраж",
            style: "badge-secondary",
          };
          break;
        default:
          el.respond_status = {
            tag: el.respond_status,
            name: "-",
            style: "badge-light",
          };
      }

      return el;
    });

    state.bloggerOrdersList = list;
  },

  UPDATE_FILTER_TITLE(state, filterTitle) {
    const newfiltersTitles = state.filtersTitles.map((el) => {
      if (el.title === filterTitle.title) {
        el = { ...el, ...filterTitle };
      } else {
        el.isSortUp = false;
        el.isActive = false;
      }

      return el;
    });

    state.filtersTitles = newfiltersTitles;
  },

  RESET_FILTER_TITLE(state) {
    const newfiltersTitles = state.filtersTitles.map((el) => {
      el.isSortUp = false;
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

  async getBloggerOrdersList(
    { commit, dispatch },
    { ordering = "", activePage = "1", pageSize = "", searchInput = "" }
  ) {
    dispatch("setStatusLoading", true);

    await this.$axios
      .$get(
        `orders/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`
      )
      .then((response) => {
        dispatch("setStatusLoading", false);

        commit("SET_COUNT_CARDS", response.count);

        commit("SET_BLOGGER_ORDERS_LIST", response.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
