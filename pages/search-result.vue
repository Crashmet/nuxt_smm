<template>
  <div class="search-result-page">
    <Header />
    <main>
      <Search />
      <search-result />
      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import SearchResult from "@/components/section/SearchResult.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SearchResultPage",
  components: {
    Header,
    Search,
    SearchResult,
    Statistics,
    Footer,
  },

  // async asyncData({ $axios, store }) {
  //   // console.log(process.client);

  //   await store.dispatch("searchStore/addSearchResult", {
  //     ordering: "",
  //     activePage: 1,
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
};
</script>
