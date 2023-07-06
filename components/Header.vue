<template>
  <header class="header" :class="[isActiveModalMenu ? 'offcanvas-menu' : '']">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span
            class="icofont-close js-menu-toggle"
            @click.prevent="setStatusModalMenu(!isActiveModalMenu)"
            :class="[isActiveModalMenu ? 'active' : '']"
          ></span>
        </div>
      </div>
      <div class="site-mobile-menu-body">
        <ul
          class="site-nav-wrap js-clone-nav d-lg-inline-block text-start site-menu float-end"
        >
          <li>
            <button class="btn-menu" @click="handlerClickHome()">Home</button>
          </li>

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
          <li>
            <button class="btn-menu" @click="handlerClickAbout()">About</button>
          </li>
          <li>
            <button class="btn-menu" @click="handlerClickContacts()">
              Contact Us
            </button>
          </li>
          <template v-if="!sessionid">
            <li>
              <button class="btn-menu" @click="handlerClickRegister()">
                Register
              </button>
            </li>
            <li>
              <button class="btn-menu" @click="handlerClickLogin()">
                Login
              </button>
            </li>
          </template>
          <template v-else>
            <li>
              <button class="btn-menu" @click.prevent="handlerLogout()">
                Log out
              </button>
            </li>
          </template>
        </ul>
      </div>
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
                  <button class="btn-menu" @click.prevent="handlerLogout()">
                    Log out
                  </button>
                </li>
              </template>
            </ul>

            <a
              class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
              @click.prevent="setStatusModalMenu(!isActiveModalMenu)"
              :class="[isActiveModalMenu ? 'active' : '']"
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
    return {};
  },

  computed: {
    ...mapGetters({
      users: "headerProfileStore/users",
      sessionid: "sessionid",
      isActiveModalMenu: "isActiveModalMenu",
    }),
  },

  methods: {
    ...mapActions({
      onLogout: "authStore/onLogout",
      setStatusModalMenu: "setStatusModalMenu",
    }),

    handlerClickHome() {
      this.setStatusModalMenu(false);
      this.$router.push({ path: "/" });
    },

    handlerClickAbout() {
      this.setStatusModalMenu(false);
      this.$router.push({ path: "/about" });
    },

    handlerClickContacts() {
      this.setStatusModalMenu(false);
      this.$router.push({ path: "/contacts" });
    },

    handlerClickRegister() {
      this.setStatusModalMenu(false);
      this.$router.push({ path: "/register" });
    },

    handlerClickLogin() {
      this.setStatusModalMenu(false);
      this.$router.push({ path: "/login" });
    },

    handlerLogout() {
      this.setStatusModalMenu(false);
      this.onLogout();
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 2.5rem;
}

.logo-dot {
  color: var(--bs-orange);
}

.btn-menu {
  font-size: 14px;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
}

.site-mobile-menu .btn-menu {
  padding-left: 20px;
  font-size: 14px;
  padding: 5px 20px;
  display: block;
  position: relative;
  color: #000;
  background-color: transparent;
}
</style>
