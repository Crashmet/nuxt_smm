<template>
  <div class="search-result-page">
    <Header />
    <main>
      <Search />

      <nuxt-child />

      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SearchResultPage",
  components: {
    Header,
    Search,
    Statistics,
    Footer,
  },
};
</script>
