<template>
  <div class="account-page">
    <Header />
    <main>
      <Search />

      <section class="account">
        <div class="account__container container">
          <div class="account__main">
            <profile-menu />

            <div class="account__section">
              <b-toast> </b-toast>
              <nuxt-child />
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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
      status: "statusMassageModalStore/status",
    }),
  },

  methods: {
    toast(title = "", desc = "", variant = null) {
      this.$bvToast.toast(`${desc}`, {
        title: `${title}`,
        variant: variant,
        solid: true,
        autoHideDelay: 3000,
        appendToast: false,
      });
    },
  },

  watch: {
    status() {
      if (this.status[this.status.length - 1] === "error") {
        this.toast("Ошибка!", "Изменения не сохранены!", "danger");
      } else if (this.status[this.status.length - 1] === "success") {
        this.toast("Успех!", "Изменения прошли успешно!", "success");
      }
    },
  },
};
</script>

<style scoped>
.account {
  margin-top: 4.1111rem;
  margin-bottom: 5.5556rem;
  position: relative;
}

.account__main {
  width: 100%;

  background-color: #efefefce;

  border-radius: 10px;
}
.account__section {
  overflow-x: auto;

  min-height: 400px;

  padding: 30px 40px;
}

@media (max-width: 480px) {
  .account {
    margin-bottom: 60px;
  }

  .account__container {
    padding: 0;
  }
}

@media (max-width: 320px) {
}
</style>
