<template>
  <section class="search-result">
    <div class="search-result__container container">
      <nav v-if="count > 0" class="search__nav">
        <ul class="search-nav__list">
          <li
            v-for="item in filtersTitles"
            :key="item.title"
            :class="[item.isSortUp ? 'search-nav__item_arrow_up' : '']"
            @click="handlerClickFiltersTitles(item)"
            class="search-nav__item search-nav__item_arrow"
          >
            <span
              :class="[item.isActive ? 'search-nav__item_active' : '']"
              class="search-nav__text"
              >{{ item.title }}</span
            >
          </li>
        </ul>
      </nav>

      <ul class="search-result__list-cards">
        <li
          class="search-result__item-card item-card"
          v-for="item in searchResult"
          :key="item.id"
        >
          <div class="item-card__img"></div>

          <ul class="item-card__list-description">
            <li class="item-card__item-description item-description">
              {{ item.social }}: {{ item.nickname }}
            </li>
            <li class="item-card__item-description item-description">
              Кол-во подписчиков: {{ item.subscribers }}
            </li>
            <li class="item-card__item-description item-description">
              Цена за пост:
              {{ item.price_for_post ? item.price_for_post : 0 }} руб.
            </li>
            <li class="item-card__item-description item-description">
              Цена за сторис:
              {{ item.price_for_stories ? item.price_for_stories : 0 }} руб.
            </li>
            <li class="item-card__item-description item-description">
              Цена за рилс:
              {{ item.price_for_reels ? item.price_for_reels : 0 }} руб.
            </li>
            <li class="item-card__item-description item-description">
              Дата создания: {{ item.created }}
            </li>
          </ul>
        </li>
      </ul>

      <div v-if="count === 0" class="search-result__not-found">
        "По вашему запросу ничего не найдено"
      </div>
    </div>

    <div v-if="countPages > 1" class="search-pagination">
      <button
        v-if="activePage > 1"
        @click="handlerClickPrevPage()"
        class="search-pagination__btn left-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-pagination__icon left-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div class="search-page-numbers page-numbers">
        <button
          v-if="activePage > 3"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          1
        </button>

        <span v-if="activePage > 3 && countPages > 5" class="page-numbers__dots"
          >...</span
        >

        <button
          v-if="activePage > 1"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage - 1 }}
        </button>

        <button
          @click="handlerClickActivePage"
          class="page-numbers__btn page-numbers__btn_selected"
        >
          {{ activePage }}
        </button>

        <button
          v-if="countPages > activePage + 1"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage + 1 }}
        </button>

        <button
          v-if="countPages > activePage + 2"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ activePage + 2 }}
        </button>

        <span
          v-if="countPages > activePage + 3 && countPages > 3"
          class="page-numbers__dots"
          >...</span
        >

        <button
          v-if="countPages !== activePage"
          @click="handlerClickActivePage"
          class="page-numbers__btn"
        >
          {{ countPages }}
        </button>
      </div>

      <button
        v-if="countPages !== activePage"
        @click="handlerClickNextPage()"
        class="search-pagination__btn right-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-pagination__icon right-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchResult",

  data() {
    return {
      pageSize: null,

      ordering: "",
    };
  },

  mounted() {
    const maxWidth = window.screen.width;

    if (maxWidth < 735) {
      this.pageSize = 10;
    } else {
      this.pageSize = 12;
    }

    const searchData = JSON.parse(localStorage.getItem("search-list")) || null;

    if (searchData) {
      this.setActivePage(searchData.activePage);
      this.setSearchRequest(searchData.searchRequest);
    }

    this.addSearchResult({
      ordering: this.ordering,
      activePage: this.activePage,
      pageSize: this.pageSize,
      searchInput: this.searchRequest,
    });

    this.historyPushState();
  },

  unmounted() {
    this.setSearchRequest("");
  },

  computed: {
    ...mapGetters({
      searchRequest: "searchStore/searchRequest",
      count: "searchStore/count",
      searchResult: "searchStore/searchResult",
      activePage: "searchStore/activePage",
      filtersTitles: "searchStore/filtersTitles",
    }),

    countPages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },

  methods: {
    ...mapActions({
      setSearchRequest: "searchStore/setSearchRequest",
      addSearchResult: "searchStore/addSearchResult",
      setActivePage: "searchStore/setActivePage",
      saveSearchRequestLocalStorage:
        "searchStore/saveSearchRequestLocalStorage",
      refreshFiltersTitles: "searchStore/refreshFiltersTitles",
    }),

    handlerClickFiltersTitles(item) {
      let { title, isSortUp, APIRequestUp, APIRequestDown } = item;

      const filterTitle = {
        title,
        isActive: true,
        isSortUp: !isSortUp,
        APIRequestUp,
        APIRequestDown,
      };

      this.refreshFiltersTitles(filterTitle);

      this.ordering = isSortUp ? APIRequestUp : APIRequestDown;

      this.addSearchResult({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });
    },

    historyPushState() {
      window.history.pushState(
        window.history.state,
        document.title,
        `${window.location.pathname}#/search-result?page=${this.activePage}&page_size=${this.pageSize}&search=${this.searchRequest}`
      );
    },

    handlerClickNextPage() {
      this.setActivePage(this.activePage + 1);
    },

    handlerClickPrevPage() {
      this.setActivePage(this.activePage - 1);
    },

    handlerClickActivePage(e) {
      this.setActivePage(+e.target.textContent);
    },
  },

  watch: {
    searchRequest() {
      this.saveSearchRequestLocalStorage({
        activePage: this.activePage,
        searchRequest: this.searchRequest,
      });

      this.historyPushState();
    },

    activePage() {
      this.saveSearchRequestLocalStorage({
        activePage: this.activePage,
        searchRequest: this.searchRequest,
      });

      this.addSearchResult({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchRequest,
      });

      this.historyPushState();
    },
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.search-result {
  margin-top: 3.8889rem;
  margin-bottom: 5.6111rem;
}

.search-result__container {
  padding: 0 4.4444rem;
}

.search__nav {
  margin-bottom: 2.2222rem;
}

.search-nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.search-nav__item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-bottom: 24px;
  height: 2.2222rem;
  background: #fefefe;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
}

.search-nav__item:not(:last-child) {
  margin-right: 10px;
}

.search-nav__item_active {
  color: rgba(255, 54, 0, 0.8);
}

.search-nav__item_arrow::after {
  content: "";
  position: absolute;
  top: 0.6111rem;
  right: 0.6111rem;
  width: 1.0556rem;
  height: 1.0556rem;
  background-image: url("../../assets/image/arrow.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.search-nav__item_arrow_up::after {
  top: 0.5556rem;
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
  -webkit-transition: -webkit-transform 0.3s easy;
  transition: -webkit-transform 0.3s easy;
  -o-transition: transform 0.3s easy;
  transition: transform 0.3s easy;
  transition: transform 0.3s easy, -webkit-transform 0.3s easy;
}

.search-nav__item:nth-child(4) {
  max-width: 12rem;
}

.search-nav__item:nth-child(5) {
  max-width: 12rem;
}

.search-nav__text {
  padding: 0.5556rem 2.2222rem 0.5556rem 1.6111rem;
}

.search-result__list-cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.search-result__item-card {
  max-width: 11.1111rem;
  margin-bottom: 3.1667rem;
}

.search-result__item-card:not(:nth-child(4n)) {
  margin-right: 4.4444rem;
}

.item-card__img {
  margin-bottom: 0.9444rem;
  width: 11.1111rem;
  height: 11.1111rem;
  background: #d9d9d9;
}

.item-description {
  font-size: 0.8889rem;
}

.item-card__item-description:not(:last-child) {
  margin-bottom: 0.2222rem;
}

/* pagination  */

.search-pagination,
.page-numbers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 0.8889rem;
}

.search-pagination__btn {
  padding: 0.4444rem;
  width: 2.3333rem;
  height: 2.3333rem;
  color: rgba(255, 54, 0, 0.8);
  background-color: #fff;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 54, 0, 0.8);
  cursor: pointer;
}

.search-pagination__btn:hover,
.page-numbers__btn:hover {
  background-color: rgba(255, 54, 0, 0.8);
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.page-numbers__btn {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.page-numbers__btn_selected {
  background-color: rgba(255, 54, 0, 0.8);
  color: #fff;
}

.search-result__not-found {
  margin-bottom: 8.3333rem;
  font-size: 1.2222rem;
}

@media (max-width: 1199px) {
  .search-result__item-card:nth-child(4n) {
    margin-right: 0;
  }

  .search-result__item-card:nth-child(even) {
    margin-right: 40px;
    margin-bottom: 32px;
  }

  .search-result__item-card:nth-child(odd) {
    margin-right: 40px;
    margin-bottom: 32px;
  }
}

@media (max-width: 960px) {
  .item-card__img {
    width: 140px;
    height: 140px;
    background: #d9d9d9;
  }
}

@media (max-width: 480px) {
  .search-result {
    margin-top: 36px;
  }

  .search-result__container {
    padding: 0 40px;
  }

  .search-nav__item {
    margin-bottom: 16px;
  }

  .search-nav__text {
    padding-left: 14px;
  }

  .search-nav__list {
    margin-left: 10px;
  }

  .search-nav__item {
    margin-right: 15px;
  }

  .search-result__item-card:nth-child(even) {
    margin-right: 0;
    margin-bottom: 0;
  }

  .item-card__item-description:not(:last-child) {
    margin-bottom: 2px;
  }

  .search-pagination__btn {
    width: 30.9994px;
    height: 30.9994px;
  }
}

@media (max-width: 390px) {
  .search-result__container {
    padding: 0 20px;
  }
}

@media (max-width: 350px) {
  .search-result__container {
    padding: 0 10px;
  }
}

@media (max-width: 330px) {
  .search-result__container {
    padding: 0;
  }
}

@media (max-width: 307px) {
  .search-result__container {
    padding: 0 40px;
  }
}
</style>
