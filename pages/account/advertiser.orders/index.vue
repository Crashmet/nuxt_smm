<template>
  <div class="orders-home home">
    <div :class="isOpenModalAddOrder ? 'blur' : ''">
      <nav class="orders__nav">
        <div class="nav_left">
          <button
            class="nav-change__btn"
            @click="changeAddOrderModalStatus(true)"
          >
            <span class="nav-change__text">Разместить новый заказ</span>
          </button>
        </div>

        <div v-if="countPages > 1" class="nav_right">
          <div class="nav-pagination">
            <button
              v-if="activePage > 1"
              @click="handlerClickPrevPage()"
              class="nav-pagination__btn left-btn"
            >
              <div class="nav-pagination__btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="nav-pagination__icon left-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>

              <form action="#" class="nav-search__form">
                <input
                  type="text"
                  placeholder="Поиск"
                  class="nav-search__input"
                />
                <button class="nav-search__btn">
                  <p class="nav-search__btn-arrow"></p>
                </button>
              </form>
            </button>

            <button
              v-if="activePage > 3"
              @click="handlerClickActivePage"
              class="page-numbers__btn"
            >
              1
            </button>

            <span
              v-if="activePage > 3 && countPages > 5"
              class="page-numbers__dots"
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

            <button
              v-if="countPages !== activePage"
              @click="handlerClickNextPage()"
              class="nav-pagination__btn right-btn"
            >
              <div class="nav-pagination__btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="nav-pagination__icon right-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </button>
          </div>

          <form action="#" class="nav-search__form">
            <input type="text" placeholder="Поиск" class="nav-search__input" />
            <button class="nav-search__btn">
              <p class="nav-search__btn-arrow"></p>
            </button>
          </form>
        </div>
      </nav>

      <div class="orders__table">
        <table>
          <thead>
            <tr>
              <th scope="col">Наименование</th>
              <th scope="col">Бюджет</th>
              <th scope="col">Дата</th>
              <th scope="col">Соцсеть</th>
              <th scope="col">Статус исполнения</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in advertiserOrdersList" :key="item.id">
              <th scope="row">{{ item.name }}</th>
              <td>{{ item.budget_per_subscriber }}</td>
              <td>{{ item.end_date }}</td>
              <td>{{ item.social[0].name }}</td>
              <td>-</td>
            </tr>

            <tr>
              <th scope="row">123</th>
              <td>12323123</td>
              <td>123123</td>
              <td>123</td>
              <td>1231</td>
            </tr>

            <tr>
              <th scope="row">123</th>
              <td>12323123</td>
              <td>123123</td>
              <td>123</td>
              <td>1231</td>
            </tr>

            <tr>
              <th scope="row">123</th>
              <td>12323123</td>
              <td>123123</td>
              <td>123</td>
              <td>1231</td>
            </tr>

            <tr>
              <th scope="row">123</th>
              <td>12323123</td>
              <td>123123</td>
              <td>123</td>
              <td>1231</td>
            </tr>
          </tbody>
        </table>

        <div v-if="!count" class="table__not-found">
          "По вашему запросу ничего не найдено"
        </div>
      </div>
    </div>

    <add-advertiser-new-order-modal v-show="isOpenModalAddOrder" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import addAdvertiserNewOrderModal from "~/components/modal/addAdvertiserNewOrderModal.vue";

export default {
  name: "AdvertiserOrdersHome",

  data() {
    return {
      pageSize: 10,

      ordering: "",
    };
  },

  components: { addAdvertiserNewOrderModal },

  mounted() {
    this.getAdvertiserOrdersList({ pageSize: this.pageSize });
  },

  computed: {
    ...mapGetters({
      count: "advertiserOrdersStore/count",
      activePage: "advertiserOrdersStore/activePage",
      filtersTitles: "advertiserOrdersStore/filtersTitles",

      isOpenModalAddOrder: "advertiserOrdersStore/isOpenModalAddOrder",
      advertiserOrdersList: "advertiserOrdersStore/advertiserOrdersList",
    }),

    countPages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },

  methods: {
    ...mapActions({
      changeAddOrderModalStatus:
        "advertiserOrdersStore/changeAddOrderModalStatus",
      getAdvertiserOrdersList: "advertiserOrdersStore/getAdvertiserOrdersList",
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
        `/search-result?page=${this.activePage}&page_size=${this.pageSize}&search=${this.searchRequest}`
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
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/
.home {
  margin-top: 2.5rem;
  position: relative;
}

.orders__nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.1111rem;
  padding: 0 0.8rem;
  width: 49.3334rem;
}

.nav_right {
  display: flex;
  justify-content: space-between;
}

/* **** CHANGE BTTN ****  */

.nav-change__btn {
  padding: 6px 10.0008px;
  background: #f09e56;
  border: 1.5px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.nav-change__btn:hover,
.nav-change__btn:active {
  border: 1.5px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.nav-change__text {
  font-size: 1rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.9);
}

.nav-change__btn:hover > .nav-change__text,
.nav-change__btn:active > .nav-change__text {
  color: #ff3600;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

/* **** NAV SEARCH  ****  */

.nav-search__form {
  display: flex;
  align-items: center;
  border: 1.5px solid rgba(240, 158, 86, 0.58);
  background: #ffffff;
}

.nav-search__form,
.nav-search__input,
.nav-search__btn {
  border-radius: 16px;
}

.nav-search__input {
  padding-left: 0.6667rem;
  height: 2rem;
  width: 8rem;
  color: rgba(13, 13, 13, 0.61);
  background: #ffffff;
  font-size: 0.8889rem;
  line-height: 1.1667rem;
}

.nav-search__btn {
  padding: 0.7222rem 1.3rem;
  background: rgba(255, 54, 0, 0.8);
  transition: background 0.2s ease-in;
}

.nav-search__btn:hover,
.nav-search__btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.nav-search__btn-arrow {
  width: 0.5556rem;
  height: 0.5556rem;
  border-top: 0.1667rem solid #ffffff;
  border-right: 0.1667rem solid #ffffff;
  transform: rotate(45deg);
}

/* **** PAGINATION ****  */

.nav-pagination {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 0.5556rem;
  margin-right: 1.1111rem;
}

.nav-pagination::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 3.5px;
  height: 2px;
  width: 100%;
  background: rgba(13, 13, 13, 0.1);
}

.page-numbers__btn {
  font-size: 0.8889rem;
}

.nav-pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.1111rem;
}

.page-numbers__btn,
.nav-pagination__btn {
  width: 1.6667rem;
  height: 1.6667rem;
  background-color: transparent;
  border-bottom: 3px solid rgba(255, 255, 255, 0);
  cursor: pointer;
}

.nav-pagination__btn-icon {
  width: 0.9444rem;
  height: 0.9444rem;
}

.nav-pagination__btn:hover,
.page-numbers__btn:hover {
  border-bottom: 3px solid rgba(255, 54, 0, 0.8);
  background-color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.page-numbers__btn_selected {
  border-bottom: 3px solid rgba(255, 54, 0, 0.8);
}

/* **** TABLE **** */

table {
  table-layout: fixed;
  width: 888px;
  border-collapse: collapse;
}

thead tr th {
  text-align: left;
  border: none;
}

thead th {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1667rem;
}

thead th:nth-child(1) {
  width: 24%;
}

thead th:nth-child(2) {
  width: 18%;
}

thead th:nth-child(3) {
  width: 19%;
}

thead th:nth-child(4) {
  width: 24%;
}

tbody th {
  text-align: left;
}

tbody tr {
  border-bottom: 1px solid rgba(240, 158, 86, 0.58);
}

tbody tr:hover {
  background: #f09e565e;
}

th,
td {
  padding: 0.7778rem 0.8333rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  border: none;
}

/* **** NOT FOUND ****  */

.nav-result__not-found {
  margin-bottom: 8.3333rem;
  font-size: 1.2222rem;
}

@media (max-width: 480px) {
  .orders__nav {
    width: 350px;
  }

  .orders__nav,
  table {
    width: 550px;
  }

  thead th {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  th,
  td {
    font-size: 12px;
    line-height: 14px;
  }
}

.blur {
  filter: blur(15px);
  min-height: 42.3rem;
}
</style>
