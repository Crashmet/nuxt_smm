import { STATUS } from "~/assets/consts/status";

export const state = () => ({
  isLoading: true,

  count: 0,

  activePage: 1,

  bloggerOrdersList: [],

  filtersTitles: [
    {
      title: "Заказчик",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
    },
    {
      title: "Задание",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
    },
    {
      title: "Соцсеть",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
    },
    {
      title: "Регион",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
    },
    {
      title: "Сумма",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      isSelect: false,
      APIRequestUp: "budget_per_subscriber",
      APIRequestDown: "-budget_per_subscriber",
    },
    {
      title: "Срок",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      isSelect: false,
      APIRequestUp: "end_date",
      APIRequestDown: "-end_date",
    },
    {
      title: "Статус",
      isArrowUp: false,
      isActive: false,
      isWork: true,
      isSelect: true,
    },

    {
      title: "Чат",
      isArrowUp: false,
      isActive: false,
      isWork: false,
      isSelect: false,
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
        case "archive":
          el.respond_status = STATUS.archive;
          break;
        default:
          el.respond_status = STATUS.default;
      }

      statusList.push(el.respond_status);

      return el;
    });

    const filterStatusList = statusList.reduce((acc, el) => {
      if (!acc.find((item) => item.status === el.status)) {
        acc.push(el);
      }
      return acc;
    }, []);

    filterStatusList.push(STATUS.reset);

    state.statusList = filterStatusList;
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
        `orders/responded/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}&status=${status}`
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
