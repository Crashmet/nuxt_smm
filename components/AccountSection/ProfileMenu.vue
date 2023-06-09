<template>
  <div class="profile-menu">
    <div class="profile-menu__block" v-if="users[0].isActive">
      <h3 class="profile-menu__title">Пользовательское меню блогера</h3>

      <nav class="profile-menu__row">
        <button
          class="profile-menu__btn"
          v-for="setting in blogerMenu"
          :key="setting.name"
          @click="handlerClickBlogerMenu(setting.name, setting.routerName)"
        >
          <span
            class="profile-menu__text"
            :class="setting.isActive ? 'profile-menu__text_active' : ''"
            >{{ setting.name }}</span
          >
        </button>
      </nav>
    </div>

    <div class="profile-menu__block" v-else>
      <h3 class="profile-menu__title">Пользовательское меню рекламодателя</h3>

      <!-- hz -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileMenu",

  data() {
    return {};
  },

  mounted() {
    this.setUserStatus(this.role);
  },

  computed: {
    ...mapGetters({
      role: "role",
      users: "profileMenuStore/users",
      blogerMenu: "profileMenuStore/blogerMenu",
      advertiserMenu: "profileMenuStore/advertiserMenu",
    }),
  },

  methods: {
    ...mapActions({
      setUserStatus: "profileMenuStore/setUserStatus",
      setBlogerMenuStatus: "profileMenuStore/setBlogerMenuStatus",
      setBlogerMenuRouter: "profileMenuStore/setBlogerMenuRouter",
      setAdvertiserMenuStatus: "profileMenuStore/setAdvertiserMenuStatus",
      setAdvertiserMenuRouter: "profileMenuStore/setAdvertiserMenuRouter",
    }),

    handlerClickBlogerMenu(name, routerName) {
      this.setBlogerMenuStatus(name);
      this.setBlogerMenuRouter(routerName);
      this.$router.push(routerName);
    },

    handlerClickAdvertiserMenu(name, routerName) {
      this.setAdvertiserMenuStatus(name);
      this.setAdvertiserMenuRouter(routerName);
      this.$router.push(routerName);
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

.profile-menu__block {
  margin-bottom: 1.6667rem;
}

.profile-menu__title {
  margin-bottom: 1.3889rem;
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: rgba(255, 54, 0, 0.8);
  /* text-shadow: 1px 1px 1px #d3792b; */
}

.profile-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.9444rem;
}

.profile-menu__btn {
  margin-bottom: 0.5556rem;
  padding: 0.3333rem 0.7778rem;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.profile-menu__btn:not(:last-child) {
  margin-right: 4.4444rem;
}

.profile-menu__btn:hover,
.profile-menu__btn:active {
  border: 1.5px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.profile-menu__text {
  color: rgba(13, 13, 13, 0.61);
}

.profile-menu__btn:hover > .profile-menu__text,
.profile-menu__btn:active > .profile-menu__text {
  color: #ff3600;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.profile-menu__text_active {
  color: #ff3600;
  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  text-decoration-line: underline;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

@media (max-width: 700px) {
  .profile-menu__btn:not(:last-child) {
    margin-right: 30px;
  }
}

@media (max-width: 540px) {
  .profile-menu__btn {
    padding: 4px 10px;
  }

  .profile-menu__btn:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
