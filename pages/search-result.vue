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

  asyncData({ store }) {
    // console.log(store.state.authStore.access_token);
    // console.log(process.client);
    // if (process.client && localStorage.getItem("access_token")) {
    // console.log(localStorage.getItem("access_token"));
    // return true;
    // }
    // return true;
  },
};
</script>
