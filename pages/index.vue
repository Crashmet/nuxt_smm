<template>
  <div class="home-page">
    <Header />

    <main>
      <Search />
      <Home />
      <Statistics />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Home from "@/components/section/Home.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomePage",

  // middleware: ["searchRequestReset", "authDone"],

  components: {
    Header,
    Search,
    Home,
    Statistics,
    Footer,
  },
};
</script>

<style scoped>
.home-page {
  overflow: hidden;
}
</style>
