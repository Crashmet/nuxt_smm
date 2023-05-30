<template>
  <section class="search-result-user">
    <div class="search-result-user__container container">
      <div class="item-card">
        <div class="item-card__img"></div>

        <ul class="item-card__list-description">
          <li class="item-card__item-description item-description">
            {{ bloggerData.social }}: {{ bloggerData.nickname }}
          </li>
          <li class="item-card__item-description item-description">
            Кол-во подписчиков: {{ bloggerData.subscribers }}
          </li>
          <li class="item-card__item-description item-description">
            Цена за пост:
            {{ bloggerData.price_for_post ? bloggerData.price_for_post : 0 }}
            руб.
          </li>
          <li class="item-card__item-description item-description">
            Цена за сторис:
            {{
              bloggerData.price_for_stories ? bloggerData.price_for_stories : 0
            }}
            руб.
          </li>
          <li class="item-card__item-description item-description">
            Цена за рилс:
            {{ bloggerData.price_for_reels ? bloggerData.price_for_reels : 0 }}
            руб.
          </li>
          <li class="item-card__item-description item-description">
            Дата создания: {{ bloggerData.created }}
          </li>
        </ul>
      </div>
      <button @click="handlerClickBack">назад</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchResult",

  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },

  // async asyncData({ $axios, store }) {
  // console.log(process.client);

  //   const activePage = store.state.searchStore.activePage;

  //   await store.dispatch("searchStore/addSearchResult", {
  //     ordering: "",
  //     activePage,
  //     pageSize: 12,
  //     searchInput: "",
  //   });

  //   const searchResult = store.state.searchStore.searchResult;

  //   const count = store.state.searchStore.count;

  //   return {
  //     count,
  //     searchResult,
  //   };
  // },

  data() {
    return {
      pageSize: null,

      ordering: "",
    };
  },

  mounted() {},

  computed: {
    ...mapGetters({
      bloggerData: "bloggerCardStore/bloggerData",
    }),
  },

  methods: {
    handlerClickBack() {
      this.$router.go(-1);
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

.search-result-user {
  margin-top: 3.8889rem;
  margin-bottom: 5.6111rem;
}

.search-result-user__container {
  padding: 0 4.4444rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.item-card {
  margin-bottom: 3rem;
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

@media (max-width: 960px) {
  .item-card__img {
    width: 140px;
    height: 140px;
    background: #d9d9d9;
  }
}

@media (max-width: 480px) {
  .search-result-user {
    margin-top: 36px;
  }

  .search-result-user__container {
    padding: 0 40px;
  }

  .item-card__item-description:not(:last-child) {
    margin-bottom: 2px;
  }
}

@media (max-width: 390px) {
  .search-result-user__container {
    padding: 0 20px;
  }
}

@media (max-width: 350px) {
  .search-result-user__container {
    padding: 0 10px;
  }
}

@media (max-width: 330px) {
  .search-result-user__container {
    padding: 0;
  }
}
</style>
