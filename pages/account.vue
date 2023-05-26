<template>
  <div class="account-page">
    <Header />
    <main>
      <Search />
      <Account />
      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Account from "@/components/section/Account.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AccountPage",
  components: {
    Header,
    Search,
    Account,
    Statistics,
    Footer,
  },
};
</script>
