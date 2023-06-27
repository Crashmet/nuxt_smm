<template>
  <div class="profile-menu">
    <div class="profile-menu__block bg-dark" v-if="users[0].isActive">
      <div class="profile-menu__row">
        <nav class="profile-menu__nav">
          <button
            class="profile-menu__btn"
            v-for="setting in bloggerMenu"
            :key="setting.name"
            @click="handlerClickBloggerMenu(setting.name, setting.routerName)"
          >
            <p
              class="profile-menu__text"
              :class="setting.isActive ? 'profile-menu__text_active' : ''"
            >
              {{ setting.name }}
            </p>
          </button>
        </nav>

        <h3 class="profile-menu__title">Blogger Menu</h3>
      </div>
    </div>

    <div class="profile-menu__block bg-dark" v-else>
      <div class="profile-menu__row">
        <nav class="profile-menu__nav">
          <button
            class="profile-menu__btn"
            v-for="setting in advertiserMenu"
            :key="setting.name"
            @click="
              handlerClickAdvertiserMenu(setting.name, setting.routerName)
            "
          >
            <p
              class="profile-menu__text"
              :class="setting.isActive ? 'profile-menu__text_active' : ''"
            >
              {{ setting.name }}
            </p>
          </button>
        </nav>

        <h3 class="profile-menu__title">Advertiser menu</h3>
      </div>
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
      bloggerMenu: "profileMenuStore/bloggerMenu",
      advertiserMenu: "profileMenuStore/advertiserMenu",
    }),
  },

  methods: {
    ...mapActions({
      setUserStatus: "profileMenuStore/setUserStatus",
      setBloggerMenuStatus: "profileMenuStore/setBloggerMenuStatus",
      setBloggerMenuRouter: "profileMenuStore/setBloggerMenuRouter",
      setAdvertiserMenuStatus: "profileMenuStore/setAdvertiserMenuStatus",
      setAdvertiserMenuRouter: "profileMenuStore/setAdvertiserMenuRouter",
    }),

    handlerClickBloggerMenu(name, routerName) {
      this.setBloggerMenuStatus(name);
      this.setBloggerMenuRouter(routerName);
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
  padding: 18px 30px;
}

.profile-menu__title {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.profile-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile-menu__nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.profile-menu__btn {
  background-color: transparent;
}

.profile-menu__btn:not(:last-child) {
  margin-right: 2.8571rem;
}

.profile-menu__btn:hover,
.profile-menu__btn:active {
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.profile-menu__text {
  color: #fff;
}

.profile-menu__btn:hover > .profile-menu__text {
  color: var(--bs-orange);
  -webkit-transition: color 0.3s ease;
  -o-transition: color 0.3s ease;
  transition: color 0.3s ease;
}

.profile-menu__text_active {
  color: var(--bs-orange);
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
