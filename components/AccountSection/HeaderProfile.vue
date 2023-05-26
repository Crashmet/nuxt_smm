<template>
  <div class="header-profile">
    <ul class="header-profile__row">
      <li
        class="header-profile__cell"
        v-for="user in users"
        :key="user.name"
        @click="handlerClickUser(user.name, user.routerName)"
      >
        <span
          class="header-profile__text"
          :class="user.isActive ? 'header-profile__text_active' : ''"
          >{{ user.name }}</span
        >
      </li>
    </ul>

    <ul class="header-profile__row" v-if="users[0].isActive">
      <li
        class="header-profile__cell"
        v-for="setting in blogerMenu"
        :key="setting.name"
        @click="handlerClickBlogerMenu(setting.name, setting.routerName)"
      >
        <span
          class="header-profile__text"
          :class="setting.isActive ? 'header-profile__text_active' : ''"
          >{{ setting.name }}</span
        >
      </li>
    </ul>

    <ul class="header-profile__row" v-else>
      <li
        class="header-profile__cell"
        v-for="setting in advertiserMenu"
        :key="setting"
        @click="handlerClickAdvertiserMenu(setting.name, setting.routerName)"
      >
        <span
          class="header-profile__text"
          :class="setting.isActive ? 'header-profile__text_active' : ''"
          >{{ setting.name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderProfile",

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      users: "headerProfileStore/users",
      blogerMenu: "headerProfileStore/blogerMenu",
      advertiserMenu: "headerProfileStore/advertiserMenu",
    }),
  },

  methods: {
    ...mapActions({
      setUserStatus: "headerProfileStore/setUserStatus",
      setBlogerMenuStatus: "headerProfileStore/setBlogerMenuStatus",
      setBlogerMenuRouter: "headerProfileStore/setBlogerMenuRouter",
      setAdvertiserMenuStatus: "headerProfileStore/setAdvertiserMenuStatus",
      setAdvertiserMenuRouter: "headerProfileStore/setAdvertiserMenuRouter",
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

.header-profile__cell:hover > .header-profile__text,
.header-profile__cell:active > .header-profile__text {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.header-profile {
  cursor: pointer;
}

.header-profile__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.2778rem;
}

.header-profile__cell:first-child {
  max-width: 9.2222rem;
  width: 100%;
}

.header-profile__cell:nth-child(2) {
  max-width: 10.7222rem;
  width: 100%;
}

.header-profile__text_active {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

@media (max-width: 480px) {
  .header-profile__cell:nth-child(2) {
    max-width: 108px;
    width: 100%;
  }
}
</style>
