<template>
  <div class="profile-menu">
    <div class="profile-menu__row bg-dark" v-if="users[0].isActive">
      <b-nav tabs class="col-12 col-lg-6">
        <b-nav-item
          class="col-12 col-sm-6 col-lg-3"
          :active="setting.isActive ? true : false"
          v-for="setting in bloggerMenu"
          :key="setting.name"
          @click="handlerClickBloggerMenu(setting.name, setting.routerName)"
        >
          <p
            :class="setting.isActive ? 'profile-menu__link_active' : ''"
            class="profile-menu__link"
          >
            {{ setting.name }}
          </p>
        </b-nav-item>
      </b-nav>

      <h3 class="profile-menu__title col-12 col-lg-3">Blogger Menu</h3>
    </div>

    <div class="profile-menu__row bg-dark" v-else>
      <b-nav tabs class="col-12 col-lg-6">
        <b-nav-item
          class="col-12 col-sm-6 col-lg-3"
          :active="setting.isActive ? true : false"
          v-for="setting in advertiserMenu"
          :key="setting.name"
          @click="handlerClickAdvertiserMenu(setting.name, setting.routerName)"
        >
          <p
            :class="setting.isActive ? 'profile-menu__link_active' : ''"
            class="profile-menu__link"
          >
            {{ setting.name }}
          </p>
        </b-nav-item>
      </b-nav>

      <h3 class="profile-menu__title col-12 col-lg-3">Advertiser menu</h3>
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
.profile-menu__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 30px;
  border-radius: 5px;
}

.profile-menu__link {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}

.profile-menu__link_active {
  color: black;
}

.profile-menu__title {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-align: right;
}

@media (max-width: 992px) {
  .profile-menu__row {
    flex-direction: column-reverse;
  }

  .profile-menu__title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
