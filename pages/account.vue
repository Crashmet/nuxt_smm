<template>
  <div class="account-page">
    <Header />
    <main>
      <Search />

      <section class="account">
        <div class="account__container container">
          <div class="account__main">
            <profile-menu />
            <nuxt-child />
          </div>
        </div>
      </section>

      <Statistics />
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Header from "@/components/Header.vue";
import Search from "@/components/section/Search.vue";
import Statistics from "@/components/section/Statistics.vue";
import Footer from "@/components/Footer.vue";

import ProfileMenu from "@/components/AccountSection/ProfileMenu.vue";

export default {
  name: "AccountPage",

  middleware: ["searchRequestReset", "authGuard"],

  components: {
    Header,
    Search,
    Statistics,
    Footer,
    ProfileMenu,
  },

  mounted() {
    const pageActive = this.users.find((el) => el.isActive === true);

    if (pageActive) {
      this.$router.push(pageActive.routerName);
    } else {
      this.$router.push({ path: "/" });
    }
  },

  computed: {
    ...mapGetters({
      users: "profileMenuStore/users",
    }),
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

.account {
  margin-top: 4.1111rem;
  margin-bottom: 5.5556rem;
}

.account__container {
  padding: 0 48.9996px;
}

.account__main {
  overflow-x: auto;
  max-width: 1102px;
  width: 100%;
  padding: 2.2222rem 2.1111rem;
  background: rgba(255, 119, 0, 0.15);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

@media (max-width: 480px) {
  .account {
    margin-bottom: 60px;
  }

  .account__main {
    padding: 27px 0px 15px 10px;
  }

  .account__container {
    padding: 0;
  }
}

@media (max-width: 320px) {
}
</style>
