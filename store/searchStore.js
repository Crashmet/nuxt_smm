export const state = () => ({
  searchRequest: "",

  activePage: 1,

  count: null,

  searchResult: [],

  filtersTitles: [
    {
      title: "Кол-во подписок",
      isSortUp: false,
      isActive: false,
      APIRequestUp: "subscribers",
      APIRequestDown: "-subscribers",
    },
    {
      title: "Цена за пост",
      isSortUp: false,
      isActive: false,
      APIRequestUp: "price_for_post",
      APIRequestDown: "-price_for_post",
    },
    {
      title: "Цена за сторис",
      isSortUp: false,
      isActive: false,
      APIRequestUp: "price_for_stories",
      APIRequestDown: "-price_for_stories",
    },
    {
      title: "Цена за рилс",
      isSortUp: false,
      isActive: false,
      APIRequestUp: "price_for_reels",
      APIRequestDown: "-price_for_reels",
    },
    {
      title: "Дата создания",
      isSortUp: false,
      isActive: false,
      APIRequestUp: "created",
      APIRequestDown: "-created",
    },
  ],
});

export const getters = {
  searchRequest: ({ searchRequest }) => searchRequest,

  activePage: ({ activePage }) => activePage,

  count: ({ count }) => count,

  searchResult: ({ searchResult }) => searchResult,

  filtersTitles: ({ filtersTitles }) => filtersTitles,
};

export const mutations = {
  REFRESH_FILTER_TITLE(state, filterTitle) {
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

  SET_ACTIVE_PAGE(state, value) {
    state.activePage = value;
  },

  SET_SEARCH_REQUEST(state, searchInput) {
    state.searchRequest = searchInput;
  },

  SET_COUNT_CARDS(state, count) {
    state.count = count;
  },

  ADD_SEARCH_RESULT(state, results) {
    const resultsData = results.map((el) => {
      const dateUpd = new Date(Date.parse(el.created));

      let date = null;

      if (dateUpd.getMonth() + 1 < 10) {
        date = `${dateUpd.getDate()}.0${
          dateUpd.getMonth() + 1
        }.${dateUpd.getFullYear()}`;
      } else {
        date = `${dateUpd.getDate()}.${
          dateUpd.getMonth() + 1
        }.${dateUpd.getFullYear()}`;
      }

      el.created = date;

      return el;
    });

    state.searchResult = resultsData;
  },
};

export const actions = {
  setActivePage({ commit }, value) {
    commit("SET_ACTIVE_PAGE", value);
  },

  setSearchRequest({ commit }, searchInput) {
    commit("SET_SEARCH_REQUEST", searchInput);
  },

  async addSearchResult(
    { commit },
    { ordering = "", activePage = "", pageSize = "", searchInput = "" }
  ) {
    await this.$axios
      .$get(
        `bloggers/?ordering=${ordering}&page=${activePage}&page_size=${pageSize}&search=${searchInput}`
      )
      .then(function (response) {
        commit("SET_COUNT_CARDS", response.count);
        commit("ADD_SEARCH_RESULT", response.results);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  },

  refreshFiltersTitles({ commit }, filterTitle) {
    commit("REFRESH_FILTER_TITLE", filterTitle);
  },

  resetFiltersTitles({ commit }) {
    commit("RESET_FILTER_TITLE");
  },
};
