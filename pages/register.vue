<template>
  <div class="register-page">
    <Header />
    <main>
      <Search />
      <Register />
      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Register from "@/components/section/Register.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "RegisterPage",
  components: {
    Header,
    Search,
    Register,
    Statistics,
    Footer,
  },

  mounted() {
    if (this.access_token !== null) {
      this.$router.push({ path: "/account" });
    }
  },

  computed: {
    ...mapGetters({
      access_token: "authStore/access_token",
    }),
  },
};
</script>
