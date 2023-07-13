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
/* **** HEADER **** */

.header {
  margin-bottom: 2.5rem;
}

.menu-bg-wrap {
  background-color: var(--bs-base-color);
  padding: 20px 30px;
  position: relative;
  float: left;
  width: 100%;
  border-radius: 7px;
  -webkit-box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.1);
}

.site-nav {
  padding-top: 20px;
  padding-bottom: 20px;
  /* position: absolute; */
  /* top: 0; */
  z-index: 9;
  width: 100%;
}
.site-nav h1,
.site-nav .h1 {
  margin: 0;
  padding: 0;
  font-size: 24px;
}
.site-nav .site-navigation .site-menu {
  margin-bottom: 0;
}
.site-nav .site-navigation .site-menu > li {
  display: inline-block;
}
.site-nav .site-navigation .site-menu > li > a {
  font-size: 14px;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}
.site-nav .site-navigation .site-menu > li > a:hover {
  color: #fff;
}
.site-nav .site-navigation .site-menu > li.cta-button a {
  padding: 6px 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #000;
  border-radius: 30px;
}
.site-nav .site-navigation .site-menu > li.cta-button a:hover {
  color: #000;
  background: #00204a;
  border-color: #00204a;
}
.site-nav .site-navigation .site-menu > li.active > a {
  color: #fff;
}
.site-nav .site-navigation .site-menu .has-children {
  position: relative;
}
.site-nav .site-navigation .site-menu .has-children > a {
  position: relative;
  padding-right: 20px;
}
.site-nav .site-navigation .site-menu .has-children > a:before {
  position: absolute;
  content: "\e313";
  font-size: 14px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: "icomoon";
}
.site-nav .site-navigation .site-menu .has-children .dropdown {
  visibility: hidden;
  opacity: 0;
  top: 100%;
  z-index: 999;
  position: absolute;
  text-align: left;
  -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  margin-top: 20px;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s;
}
.site-nav .site-navigation .site-menu .has-children .dropdown.arrow-top {
  position: absolute;
}
.site-nav .site-navigation .site-menu .has-children .dropdown.arrow-top:before {
  display: none;
  bottom: 100%;
  left: 20%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.site-nav .site-navigation .site-menu .has-children .dropdown.arrow-top:before {
  display: none;
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}
.site-nav .site-navigation .site-menu .has-children .dropdown a {
  font-size: 14px;
  text-transform: none;
  letter-spacing: normal;
  -webkit-transition: 0s all;
  -o-transition: 0s all;
  transition: 0s all;
  color: #000;
}
.site-nav .site-navigation .site-menu .has-children .dropdown .active a {
  color: #00204a;
}
.site-nav .site-navigation .site-menu .has-children .dropdown > li {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 180px;
}
.site-nav .site-navigation .site-menu .has-children .dropdown > li > a {
  padding: 5px 20px;
  display: block;
}
.site-nav .site-navigation .site-menu .has-children .dropdown > li > a:hover {
  color: #00204a;
}
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > a:before {
  content: "\e315";
  right: 20px;
}
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > .dropdown,
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > ul {
  left: 100%;
  top: 0;
}
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > .dropdown
  li
  a:hover,
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > ul
  li
  a:hover {
  color: #00204a;
}
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:hover
  > a,
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:active
  > a,
.site-nav
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:focus
  > a {
  color: #00204a;
}
.site-nav .site-navigation .site-menu .has-children:hover > a,
.site-nav .site-navigation .site-menu .has-children:focus > a,
.site-nav .site-navigation .site-menu .has-children:active > a {
  color: #fff;
}
.site-nav .site-navigation .site-menu .has-children:hover,
.site-nav .site-navigation .site-menu .has-children:focus,
.site-nav .site-navigation .site-menu .has-children:active {
  cursor: pointer;
}
.site-nav .site-navigation .site-menu .has-children:hover > .dropdown,
.site-nav .site-navigation .site-menu .has-children:focus > .dropdown,
.site-nav .site-navigation .site-menu .has-children:active > .dropdown {
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
  margin-top: 0px;
  visibility: visible;
  opacity: 1;
}

.btn-menu {
  font-size: 14px;
  padding: 10px 15px;
  display: inline-block;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  transition: color 0.3s ease;
}

.btn-menu:hover {
  color: #fff;
  transition: color 0.3s ease;
}

/* **** LOGO **** */

.logo {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}
.logo:hover {
  color: #fff;
}

.logo-dot {
  color: var(--bs-orange);
}

/* **** MOBILE MENU **** */
.site-mobile-menu .btn-menu {
  padding-left: 20px;
  font-size: 14px;
  padding: 5px 20px;
  display: block;
  position: relative;
  color: #000;
  background-color: transparent;
}

.site-mobile-menu-close {
  display: block;
  position: relative;
  height: 30px;
  width: 30px;
  z-index: 99;
  cursor: pointer;
  top: -20px;
}
.site-mobile-menu-close > span {
  cursor: pointer;
  display: block;
  position: absolute;
  height: 30px;
  width: 30px;
}
.site-mobile-menu-close > span:before,
.site-mobile-menu-close > span:after {
  position: absolute;
  content: "";
  width: 2px;
  height: 30px;
  background: #000;
}
.site-mobile-menu-close > span:before {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.site-mobile-menu-close > span:after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.site-mobile-menu {
  width: 300px;
  position: fixed;
  right: 0;
  z-index: 2000;
  padding-top: 20px;
  background: #fff;
  height: calc(100vh);
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
  -webkit-transition: 0.8s all cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 0.8s all cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.8s all cubic-bezier(0.23, 1, 0.32, 1);
}
.offcanvas-menu .site-mobile-menu {
  -webkit-box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
.site-mobile-menu .site-mobile-menu-header {
  width: 100%;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close {
  float: right;
  margin-top: 8px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span {
  font-size: 30px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 0px;
  line-height: 1;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo {
  float: left;
  margin-top: 10px;
  margin-left: 0px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a {
  display: inline-block;
  text-transform: uppercase;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a img {
  max-width: 70px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a:hover {
  text-decoration: none;
}
.site-mobile-menu .site-mobile-menu-body {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding: 0 20px 20px 20px;
  height: calc(100vh - 52px);
  padding-bottom: 150px;
}
.site-mobile-menu .site-nav-wrap {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}
.site-mobile-menu .site-nav-wrap a {
  padding: 5px 20px;
  display: block;
  position: relative;
  color: #000;
}
.site-mobile-menu .site-nav-wrap a:hover {
  color: #00204a;
}
.site-mobile-menu .site-nav-wrap li {
  position: relative;
  display: block;
}
.site-mobile-menu .site-nav-wrap li.active > a {
  color: #00204a;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 20;
  width: 36px;
  height: 36px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #f8f9fa;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:before {
  font-size: 14px;
  z-index: 20;
  font-family: "icomoon";
  content: "\e313";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(-180deg);
  -ms-transform: translate(-50%, -50%) rotate(-180deg);
  transform: translate(-50%, -50%) rotate(-180deg);
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse.collapsed:before {
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.site-mobile-menu .site-nav-wrap > li {
  display: block;
  position: relative;
  float: left;
  width: 100%;
}
.site-mobile-menu .site-nav-wrap > li > a {
  padding-left: 20px;
  font-size: 14px;
}
.site-mobile-menu .site-nav-wrap > li > ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.site-mobile-menu .site-nav-wrap > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > a {
  padding-left: 40px;
  font-size: 14px;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul {
  padding: 0;
  margin: 0;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li > a {
  font-size: 14px;
  padding-left: 60px;
}

/* Burger */
.burger {
  width: 28px;
  height: 32px;
  cursor: pointer;
  position: relative;
}
.burger.light:before,
.burger.light span,
.burger.light:after {
  background: #fff;
}

.burger:before,
.burger span,
.burger:after {
  width: 100%;
  height: 2px;
  display: block;
  background: #000;
  border-radius: 2px;
  position: absolute;
  opacity: 1;
}

.burger:before,
.burger:after {
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  content: "";
}

.burger:before {
  top: 4px;
}

.burger span {
  top: 15px;
}

.burger:after {
  top: 26px;
}

/* Hover */
.burger:hover:before {
  top: 7px;
}

.burger:hover:after {
  top: 23px;
}

/* Click */
.burger.active span {
  opacity: 0;
}

.burger.active:before,
.burger.active:after {
  top: 40%;
}

.burger.active:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=5);
  /*for IE*/
}

.burger.active:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-5);
  /*for IE*/
}

.burger:focus {
  outline: none;
}
</style>
