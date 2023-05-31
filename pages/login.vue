<template>
  <div class="login-page">
    <Header />
    <main>
      <Search />
      <Login />
      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Login from "@/components/section/Login.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LoginPage",

  middleware: "authDone",

  components: {
    Header,
    Search,
    Login,
    Statistics,
    Footer,
  },
};
</script>
