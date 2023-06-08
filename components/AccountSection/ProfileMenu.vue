<template>
  <div class="profile-menu">
    <div class="profile-menu__block" v-if="users[0].isActive">
      <h3 class="profile-menu__title">Пользовательское меню блогера</h3>

      <ul class="profile-menu__row">
        <li
          class="profile-menu__cell profile-menu__cell_active"
          v-for="setting in blogerMenu"
          :key="setting.name"
          @click="handlerClickBlogerMenu(setting.name, setting.routerName)"
        >
          <span
            class="profile-menu__text"
            :class="setting.isActive ? 'profile-menu__text_active' : ''"
            >{{ setting.name }}</span
          >
        </li>
      </ul>
    </div>

    <div class="profile-menu__block" v-else>
      <h3 class="profile-menu__title">Пользовательское меню рекламодателя</h3>
      <!-- <ul class="profile-menu__row" v-else>
      <li
        class="profile-menu__cell profile-menu__cell_active"
        v-for="setting in advertiserMenu"
        :key="setting.name"
        @click="handlerClickAdvertiserMenu(setting.name, setting.routerName)"
      >
        <span
          class="profile-menu__text"
          :class="setting.isActive ? 'profile-menu__text_active' : ''"
          >{{ setting.name }}</span
        >
      </li>
    </ul> -->
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

.profile-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.7778rem;
}

.profile-menu__block {
  margin-bottom: 1.6667rem;
}

.profile-menu__title {
  margin-bottom: 1.3889rem;
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #d12f03;
  /* text-shadow: 4px 1px 6px #d3792b; */
}

.profile-menu__text_active {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.profile-menu__cell:first-child {
  max-width: 9.2222rem;
  width: 100%;
}

.profile-menu__cell:nth-child(2) {
  max-width: 10.7222rem;
  width: 100%;
}

.profile-menu__cell:nth-child(3) {
  max-width: 8rem;
  width: 100%;
}

.profile-menu__cell_active {
  cursor: pointer;
}

.profile-menu__cell_active:hover > .profile-menu__text,
.profile-menu__cell_active:active > .profile-menu__text {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

@media (max-width: 480px) {
  .profile-menu__cell:nth-child(1) {
    max-width: 80px;
    width: 100%;
  }
}
</style>
