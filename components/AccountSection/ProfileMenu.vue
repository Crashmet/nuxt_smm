<template>
  <div class="profile-menu">
    <ul class="profile-menu__row">
      <li
        class="profile-menu__cell"
        v-for="user in users"
        :key="user.name"
        @click="handlerClickUser(user.name, user.routerName)"
      >
        <span
          class="profile-menu__text"
          :class="user.isActive ? 'profile-menu__text_active' : ''"
          >{{ user.name }}</span
        >
      </li>
    </ul>

    <ul class="profile-menu__row" v-if="users[0].isActive">
      <li
        class="profile-menu__cell"
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

    <ul class="profile-menu__row" v-else>
      <li
        class="profile-menu__cell"
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
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProfileMenu",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
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

    handlerClickUser(name, routerName) {
      this.setUserStatus(name);
      this.$router.push(routerName);
    },

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

.profile-menu__cell:hover > .profile-menu__text,
.profile-menu__cell:active > .profile-menu__text {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.profile-menu {
  cursor: pointer;
}

.profile-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.2778rem;
}

.profile-menu__cell:first-child {
  max-width: 9.2222rem;
  width: 100%;
}

.profile-menu__cell:nth-child(2) {
  max-width: 10.7222rem;
  width: 100%;
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

@media (max-width: 480px) {
  .profile-menu__cell:nth-child(2) {
    max-width: 108px;
    width: 100%;
  }
}
</style>
