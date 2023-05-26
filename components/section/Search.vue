<template>
  <section class="search">
    <div class="search__container container">
      <div class="search__bar">
        <div class="search-bar__line">
          <input
            class="search-line__input"
            type="text"
            v-model.trim="searchInput"
          />
          <button class="search-line__btn" @click.prevent="handlerClickSearch">
            <span class="search-line-btn__text">поиск</span>
          </button>
        </div>
        <template v-if="searchRequest">
          <p class="search-bar__desc">Выдача по слову «{{ searchRequest }}»</p>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",

  data() {
    return {
      searchInput: "",

      pageSize: 12,
    };
  },

  mounted() {
    const maxWidth = window.screen.width;

    if (maxWidth < 735) {
      this.pageSize = 10;
    } else {
      this.pageSize = 12;
    }
  },

  computed: {
    ...mapGetters({
      searchRequest: "searchStore/searchRequest",
      activePage: "searchStore/activePage",
    }),
  },

  methods: {
    ...mapActions({
      setSearchRequest: "searchStore/setSearchRequest",
      addSearchResult: "searchStore/addSearchResult",
      setActivePage: "searchStore/setActivePage",
      saveSearchRequestLocalStorage:
        "searchStore/saveSearchRequestLocalStorage",
      resetFiltersTitles: "searchStore/resetFiltersTitles",
    }),

    handlerClickSearch() {
      this.$router.push({ name: "search-result" });

      this.setActivePage(1);
      this.setSearchRequest(this.searchInput);

      this.saveSearchRequestLocalStorage({
        activePage: this.activePage,
        searchRequest: this.searchInput,
      });

      this.addSearchResult({
        ordering: "",
        activePage: this.activePage,
        pageSize: this.pageSize,
        searchInput: this.searchInput,
      });

      this.resetFiltersTitles();
    },
  },

  watch: {
    searchRequest() {},
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

.search {
  margin-top: 3.2222rem;
}

.search__container {
  padding: 0 4.4444rem;
}

.search__bar {
  margin-bottom: 4.4445rem;
}

.search-bar__line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  border-radius: 20px;
  background: #ffffff;
  -webkit-filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

.search-bar__desc {
  margin-top: 1.1111rem;
  margin-left: 1.4444rem;
  color: rgba(13, 13, 13, 0.61);
}

.search-line__input {
  padding-left: 19.9998px;
  width: 100%;
  height: 2.5556rem;
  border: none;
  border-radius: 20px;
  background: #ffffff;
  font-size: 1rem;
  line-height: 1.1667rem;
}

.search-line__btn {
  right: 0;
  bottom: 0;
  padding: 0.5556rem 4.3333rem 0.5556rem;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 20px;
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.search-line__btn:hover,
.search-line__btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.search-line-btn__text {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  text-align: center;
  color: #ffffff;
}

@media (max-width: 480px) {
  .search {
    margin-top: 23px;
  }

  .search__container {
    padding: 0 20px;
  }

  .search__bar {
    margin-bottom: 20px;
  }

  .search-bar__desc {
    margin-top: 5px;
    margin-left: 20px;
  }

  .search-line__input {
    height: 28px;
  }

  .search-line__btn {
    padding: 6.5px 18px 5.5px;
  }

  .search-line-btn__text {
    font-size: 14px;
    line-height: 16px;
  }
}

@media (max-width: 320px) {
  .search__container {
    padding: 0;
  }
}
</style>
