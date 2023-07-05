export const state = () => ({
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
      isWorks: false,
    },
  ],
});

export const getters = {
  count: ({ count }) => count,

  activePage: ({ activePage }) => activePage,

  filtersTitles: ({ filtersTitles }) => filtersTitles,

  bloggerOrdersList: ({ bloggerOrdersList }) => bloggerOrdersList,
};

export const mutations = {
  SET_ACTIVE_PAGE(state, value) {
    state.activePage = value;
  },

  SET_COUNT_CARDS(state, count) {
    state.count = count;
  },

  SET_BLOGGER_ORDERS_LIST(state, response) {
    state.bloggerOrdersList = response;
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
    { commit },
    { ordering = "", activePage = "1", pageSize = "", searchInput = "" }
  ) {
    await this.$axios
      .$get(
        `orders/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`
      )
      .then((response) => {
        commit("SET_COUNT_CARDS", response.count);

        commit("SET_BLOGGER_ORDERS_LIST", response.results);
      })
      .catch((error) => {
        console.log(error.response);
      });
  },
};
