<template>
  <header class="header">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <nav class="site-nav">
      <div class="container">
        <div class="menu-bg-wrap">
          <div class="site-navigation">
            <nuxt-link class="logo m-0 float-start" to="/">
              SMM Planeta <span class="logo-dot">.</span>
            </nuxt-link>

            <ul
              class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li><nuxt-link to="/"> Home </nuxt-link></li>
              <!-- <li class="has-children">
                <a>Properties</a>
                <ul class="dropdown">
                  <li><a>Buy Property</a></li>
                  <li><a>Sell Property</a></li>
                  <li class="has-children">
                    <a>Dropdown</a>
                    <ul class="dropdown">
                      <li><a>Sub Menu One</a></li>
                      <li><a>Sub Menu Two</a></li>
                      <li><a>Sub Menu Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li> -->
              <li><nuxt-link to="/about">About</nuxt-link></li>
              <li><nuxt-link to="/contacts">Contact Us</nuxt-link></li>
              <template v-if="!sessionid">
                <li>
                  <nuxt-link to="/register">Register</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/login">Login</nuxt-link>
                </li>
              </template>
              <template v-else>
                <li>
                  <a @click="handlerLogout()">Log out</a>
                </li>
              </template>
            </ul>

            <a
              class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",

  data() {
    return {
      isActiveMenu: false,
    };
  },

  computed: {
    ...mapGetters({
      users: "headerProfileStore/users",
      sessionid: "sessionid",
    }),
  },

  methods: {
    ...mapActions({
      onLogout: "authStore/onLogout",
    }),

    handlerLogout() {
      this.onLogout();
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 40px;
}

.logo-dot {
  color: var(--bs-orange);
}
</style>
