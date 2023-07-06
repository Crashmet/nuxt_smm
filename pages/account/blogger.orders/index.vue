<template>
  <div
    class="orders-home home"
    :class="isOpenModalAddOrder ? 'open-modal' : ''"
  >
    <div v-if="isLoading">
      <nav class="orders__nav">
        <form action="#" class="nav-search__form">
          <b-skeleton
            v-if="isLoading"
            class="nav-search__input"
            type="input"
          ></b-skeleton>

          <button class="nav-search__btn">
            <p class="nav-search__btn-arrow"></p>
          </button>
        </form>
      </nav>

      <b-skeleton-table
        :rows="5"
        :columns="5"
        :table-props="{ bordered: true, striped: true }"
      ></b-skeleton-table>
    </div>

    <div v-else>
      <nav class="orders__nav">
        <form v-if="count" action="#" class="nav-search__form">
          <input
            type="text"
            placeholder="Поиск"
            class="nav-search__input"
            v-model="filterInput"
          />
          <button class="nav-search__btn" @click.prevent="handlerClickSearch()">
            <p class="nav-search__btn-arrow"></p>
          </button>
        </form>
      </nav>

      <div class="orders__table">
        <table v-if="count">
          <thead>
            <tr>
              <th
                v-for="item in filtersTitles"
                :key="item.title"
                scope="col"
                @click="handlerClickFiltersTitles(item)"
              >
                <p
                  :class="[
                    item.isWorks ? 'table-title__sort_arrow' : '',
                    item.isSortUp ? 'table-title__sort_arrow_up' : '',
                  ]"
                >
                  {{ item.title }}
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in bloggerOrdersList"
              :key="item.id"
              @click.prevent="handlerClickOrderMenu(item)"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.budget_per_subscriber }}</td>
              <td>{{ item.end_date }}</td>
              <td>{{ item.social[0].name }}</td>
              <td>-</td>
            </tr>

            <!-- <tr @click.prevent="handlerClickOrderMenu({ id: 2 })">
              <td>sadasd</td>
              <td>ssdfsdfsd</td>
              <td>asd</td>
              <td>asdadasda</td>
              <td>-</td>
            </tr>

            <tr @click.prevent="handlerClickOrderMenu(item)">
              <td>sadasd</td>
              <td>ssdfsdfsd</td>
              <td>asd</td>
              <td>asdadasda</td>
              <td>-</td>
            </tr> -->
          </tbody>
        </table>

        <h3 v-else class="table__not-found">"Нет активных заказов"</h3>
      </div>

      <nav v-if="count" class="orders__nav">
        <div class="nav_left">
          <p class="nav-select__label">Entries per page:</p>
          <select
            class="nav-select"
            aria-label="Default select example"
            v-model="pageSize"
          >
            <option value="5">5</option>
            <option selected value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

        <div class="nav_right">
          <div v-if="countPages > 1" class="nav-pagination">
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
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BloggerOrdersHome",

  data() {
    return {
      ordering: "",

      filterInput: "",

      pageSize: 10,
    };
  },

  mounted() {
    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );

    if (windowData.page) {
      this.setActivePage(Number(windowData.page));
    }

    if (windowData.search) {
      this.filterInput = windowData.search;
    }

    this.getBloggerOrdersList({
      ordering: this.ordering,
      activePage: this.activePage,
      pageSize: this.pageSize,
      searchInput: this.filterInput,
    });

    this.historyPushState();
  },

  computed: {
    ...mapGetters({
      count: "bloggerOrdersStore/count",
      activePage: "bloggerOrdersStore/activePage",
      filtersTitles: "bloggerOrdersStore/filtersTitles",

      bloggerOrdersList: "bloggerOrdersStore/bloggerOrdersList",

      isLoading: "bloggerOrdersStore/isLoading",
    }),

    countPages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },

  methods: {
    ...mapActions({
      getBloggerOrdersList: "bloggerOrdersStore/getBloggerOrdersList",

      updateFiltersTitles: "bloggerOrdersStore/updateFiltersTitles",
      resetFiltersTitles: "bloggerOrdersStore/resetFiltersTitles",

      setActivePage: "bloggerOrdersStore/setActivePage",

      setOrderId: "bloggerSettingsOrderStore/setOrderId",
    }),

    handlerClickOrderMenu(data) {
      this.setOrderId(data.id);

      this.$router.push({ path: `/account/blogger.orders/${data.id}` });
    },

    handlerClickSearch() {
      this.getBloggerOrdersList({
        activePage: 1,
        pageSize: this.pageSize,
        searchInput: this.filterInput,
      });

      this.resetFiltersTitles();

      this.historyPushState();
    },

    handlerClickFiltersTitles(item) {
      let { title, isSortUp, isWorks, APIRequestUp, APIRequestDown } = item;

      if (!isWorks) {
        return;
      }

      const filterTitle = {
        title,
        isActive: true,
        isSortUp: !isSortUp,
      };

      this.updateFiltersTitles(filterTitle);

      this.ordering = isSortUp ? APIRequestUp : APIRequestDown;

      this.getBloggerOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.filterInput,
      });
    },

    historyPushState() {
      window.history.pushState(
        window.history.state,
        document.title,
        `/account/blogger.orders?page=${this.activePage}&page_size=${this.pageSize}&search=${this.filterInput}`
      );
    },

    handlerClickNextPage() {
      this.setActivePage(this.activePage + 1);

      this.getBloggerOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.filterInput,
      });
    },

    handlerClickPrevPage() {
      this.setActivePage(this.activePage - 1);

      this.getBloggerOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.filterInput,
      });
    },

    handlerClickActivePage(e) {
      this.setActivePage(+e.target.textContent);

      this.getBloggerOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.filterInput,
      });
    },
  },

  watch: {
    filterInput() {
      this.historyPushState();
    },

    activePage() {
      this.historyPushState();
    },

    pageSize() {
      this.historyPushState();

      this.getBloggerOrdersList({
        ordering: this.ordering,
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.filterInput,
      });
    },
  },
};
</script>

<style scoped>
.open-modal {
  height: 700px;
}

.sceleton {
  width: 100%;
}

.home {
  width: 1000px;
  margin-top: 1rem;
  position: relative;
}

.orders__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 1rem;
}

.nav_left {
  display: flex;
  align-items: center;
}

.nav_right {
  display: flex;
  justify-content: space-between;
}

/* **** SELECT **** */

.nav-select__label {
  margin-right: 10px;
}

.nav-select {
  padding: 5px;
  border-radius: 10px;
  border: 1.5px solid var(--bs-gray-600);
  background: transparent;
}

/* **** CHANGE BTTN ****  */

.nav-change__btn {
  padding: 6px 10.0008px;
  background: transparent;
  border: 1.5px solid var(--bs-gray-600);
  border-radius: 10px;
  background-color: transparent;
}

.nav-change__btn:hover,
.nav-change__btn:active {
  -webkit-transition: outline 0.1s ease;
  -o-transition: outline 0.1s ease;
  transition: outline 0.1s ease;
  outline: 1.5px solid var(--bs-secondary);
}

.nav-change__text {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.0556rem;
  color: var(--bs-gray-600);
}

.nav-change__btn:hover > .nav-change__text,
.nav-change__btn:active > .nav-change__text {
  color: var(--bs-secondary);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

/* **** NAV SEARCH  ****  */

.nav-search__form {
  display: flex;
  align-items: center;
  /* width: 15.5rem; */
  border: 1px solid var(--bs-gray-600);
  background: transparent;
}

.nav-search__form,
.nav-search__input,
.nav-search__btn {
  border-radius: 16px;
}

.nav-search__input {
  padding: 0 0.6667rem;
  height: 2rem;
  width: 11.25rem;
  color: var(--bs-gray-600);
  background: transparent;
  font-size: 0.8889rem;
  line-height: 1.1667rem;
}

.nav-search__btn {
  padding: 0.75rem 1.3rem;
  background: var(--bs-gray-600);
  transition: background 0.2s ease-in;
}

.nav-search__btn:hover {
  background: var(--bs-secondary);
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
  bottom: 0px;
  height: 2px;
  width: 100%;
  background: var(--bs-gray-500);
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
  width: 1rem;
  height: 1.4rem;
}

.page-numbers__btn_selected {
  border-bottom: 3px solid var(--bs-gray-600);
}

/* **** TABLE **** */

.orders__table {
  margin-bottom: 30px;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

thead tr th {
  text-align: left;
  border: none;
}

thead th {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.1667rem;
  color: var(--bs-gray-600);
  background: var(--bs-gray-400);
}

.table-title__sort_arrow {
  position: relative;
  cursor: pointer;
}

.table-title__sort_arrow::after {
  content: "";
  position: absolute;
  top: 10%;
  right: 20%;
  width: 14px;
  height: 14px;
  background-image: url("@/static/img/arrow.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.table-title__sort_arrow_up::after {
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
  -webkit-transition: -webkit-transform 0.3s easy;
  transition: -webkit-transform 0.3s easy;
  -o-transition: transform 0.3s easy;
  transition: transform 0.3s easy;
  transition: transform 0.3s easy, -webkit-transform 0.3s easy;
}

thead th:nth-child(1) {
  width: 26%;
}

thead th:nth-child(2) {
  width: 18%;
}

thead th:nth-child(3) {
  width: 19%;
}

thead th:nth-child(4) {
  width: 23%;
}

thead th:nth-child(5),
td:nth-child(5) {
  text-align: center;
}

tbody tr {
  color: var(--bs-gray-600);
  border-bottom: 1px solid var(--bs-gray-400);
}

tbody tr:hover {
  cursor: pointer;
  background: var(--bs-gray-300);
}

th,
td {
  padding: 0.7778rem 0.8333rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  border: none;
}

/* **** NOT FOUND ****  */

.table__not-found {
  text-align: center;
  margin: 3rem 0;
  font-size: 1.2222rem;
}

@media (min-width: 980px) {
  .nav-pagination__btn:hover,
  .page-numbers__btn:hover {
    border-bottom: 3px solid var(--bs-secondary);
    background-color: transparent;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
}

@media (max-width: 572px) {
  .open-modal {
    height: 1050px;
  }
}

@media (max-width: 480px) {
  .home {
    width: 650px;
  }

  .nav_right {
    flex-direction: column-reverse;
    align-items: end;
  }

  .nav-search__form {
    margin-bottom: 10px;
  }

  .nav-pagination {
    margin-right: 0;
  }

  .nav-pagination::after {
    bottom: 0;
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
