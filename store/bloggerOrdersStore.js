export const state = () => ({
  isLoading: true,

  count: 0,

  activePage: 1,

  bloggerOrdersList: [],

  filtersTitles: [
    {
      title: "Наименование",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
    },
    {
      title: "Бюджет",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      isSelect: false,
      APIRequestUp: "budget_per_subscriber",
      APIRequestDown: "-budget_per_subscriber",
    },
    {
      title: "Дата",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      isSelect: false,
      APIRequestUp: "end_date",
      APIRequestDown: "-end_date",
    },
    {
      title: "Соцсеть",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
    },
    {
      title: "Статус",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      isSelect: true,
    },
  ],

  statusList: [],
});

export const getters = {
  isLoading: ({ isLoading }) => isLoading,

  count: ({ count }) => count,

  activePage: ({ activePage }) => activePage,

  filtersTitles: ({ filtersTitles }) => filtersTitles,

  bloggerOrdersList: ({ bloggerOrdersList }) => bloggerOrdersList,

  statusList: ({ statusList }) => statusList,
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

    const statusList = [];

    const list = filteredList.map((el) => {
      switch (el.respond_status) {
        case "new_order":
          el.respond_status = {
            status: el.respond_status,
            name: "Новый заказ",
            style: "badge-info",
          };
          break;
        case "in_progress":
          el.respond_status = {
            status: el.respond_status,
            name: "В работе",
            style: "badge-warning",
          };
          break;
        case "done":
          el.respond_status = {
            status: el.respond_status,
            name: "Выполнен",
            style: "badge-success",
          };
          break;
        case "accepted":
          el.respond_status = {
            status: el.respond_status,
            name: "Принят заказчиком",
            style: "badge-primary",
          };
          break;
        case "canceled":
          el.respond_status = {
            status: el.respond_status,
            name: "Отклонен",
            style: "badge-danger",
          };
          break;
        case "arbitration":
          el.respond_status = {
            status: el.respond_status,
            name: "Арбитраж",
            style: "badge-secondary",
          };
          break;
        default:
          el.respond_status = {
            status: el.respond_status,
            name: "-",
            style: "badge-light",
          };
      }

      statusList.push(el.respond_status);

      return el;
    });

    if (state.statusList.length === 0) {
      state.statusList = statusList.reduce((acc, el) => {
        if (!acc.find((item) => item.status === el.status)) {
          acc.push(el);
        }
        return acc;
      }, []);

      state.statusList.push({
        status: "",
        name: "Сброс",
        style: "badge-light",
      });
    }

    state.bloggerOrdersList = list;
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

  async getBloggerOrdersList(
    { commit, dispatch },
    {
      ordering = "",
      activePage = "1",
      pageSize = "",
      searchInput = "",
      status = "",
    }
  ) {
    dispatch("setStatusLoading", true);

    await this.$axios
      .$get(
        `orders/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}&status=${status}`
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
