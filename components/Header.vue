<template>
  <header>
    <div class="container header__container">
      <div class="header__row">
        <div class="header__row_left">
          <nuxt-link class="header-left__logo" to="/">
            <h2 class="header-left-logo__title_left">SMM</h2>
            <h2 class="header-left-logo__title_right">Planeta</h2></nuxt-link
          >
          <p class="header-left__desc">более 50000 блогеров</p>
        </div>

        <div v-if="access_token === null">
          <div class="header__row_right">
            <ul class="header-right__list_left">
              <li class="header-right__item">
                <nuxt-link class="header-right__link" to="/"
                  >Контакты</nuxt-link
                >
              </li>

              <li class="header-right__item">
                <nuxt-link class="header-right__link" to="register"
                  >Зарегистрироваться</nuxt-link
                >
              </li>
            </ul>

            <nuxt-link to="login" class="header-right__button_left">
              <span class="header-right-button__text">Войти</span>
            </nuxt-link>

            <button
              class="header-right__menu"
              @click="isActiveMenu = !isActiveMenu"
            >
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="3" fill="black"></rect>
                <rect y="10" width="30" height="3" fill="black"></rect>
                <rect y="20" width="30" height="3" fill="black"></rect>
              </svg>
            </button>

            <div
              class="header-absolute__menu"
              :style="isActiveMenu ? 'display:block' : ''"
            >
              <ul class="header-absolute__list">
                <li class="header-absolute__item">
                  <button
                    class="header-absolute__btn"
                    @click="isActiveMenu = !isActiveMenu"
                  >
                    <svg
                      width="23"
                      height="25"
                      viewBox="0 0 23 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z"
                        fill="#333333"
                      ></path>
                      <path
                        d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z"
                        fill="#333333"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li class="header-absolute__item">
                  <nuxt-link class="header-absolute__link" to="/"
                    >Контакты</nuxt-link
                  >
                </li>

                <li class="header-absolute__item">
                  <nuxt-link class="header-absolute__link" to="/register"
                    >Зарегистрироваться</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="header__row_right">
            <ul class="header-right__list_left">
              <li class="header-right__item">
                <nuxt-link class="header-right__link" to="/"
                  >Контакты</nuxt-link
                >
              </li>

              <li class="header-right__item">
                <button @click="handlerLogout()" class="header-right__link">
                  Выйти из аккаунта
                </button>
              </li>
            </ul>

            <button
              class="header-right__menu"
              @click="isActiveMenu = !isActiveMenu"
            >
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="30" height="3" fill="black"></rect>
                <rect y="10" width="30" height="3" fill="black"></rect>
                <rect y="20" width="30" height="3" fill="black"></rect>
              </svg>
            </button>

            <div
              class="header-absolute__menu"
              :style="isActiveMenu ? 'display:block' : ''"
            >
              <ul class="header-absolute__list">
                <li class="header-absolute__item">
                  <button
                    class="header-absolute__btn"
                    @click="isActiveMenu = !isActiveMenu"
                  >
                    <svg
                      width="23"
                      height="25"
                      viewBox="0 0 23 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z"
                        fill="#333333"
                      ></path>
                      <path
                        d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z"
                        fill="#333333"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li class="header-absolute__item">
                  <nuxt-link class="header-absolute__link" to="/"
                    >Контакты</nuxt-link
                  >
                </li>

                <li class="header-absolute__item">
                  <button
                    @click="handlerLogout()"
                    class="header-absolute__link"
                  >
                    Выйти из аккаунта
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  mounted() {
    const token = localStorage.getItem("access_token") || null;

    if (token !== null) {
      this.setAccessToken(token);
    }

    this.setSearchRequest("");
  },

  computed: {
    ...mapGetters({
      users: "headerProfileStore/users",
      access_token: "authStore/access_token",
    }),

    lastPageAccount() {
      const pageActive = this.users.find((el) => el.isActive === true);

      return pageActive.routerName;
    },
  },

  methods: {
    ...mapActions({
      setAccessToken: "authStore/setAccessToken",
      onLogout: "authStore/onLogout",
      setSearchRequest: "searchStore/setSearchRequest",
    }),

    handlerLogout() {
      this.$router.push({ path: "/" });

      this.onLogout();
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

.header__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 60px;
}

.header__row_left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-left__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 1rem;
}

.header-left-logo__title_left {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}

.header-left-logo__title_right {
  font-size: 1.6667rem;
  line-height: 1.9444rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
  -webkit-transition: text-shadow 0.3s ease-in;
  -o-transition: text-shadow 0.3s ease-in;
  transition: text-shadow 0.3s ease-in;
}

.header-left__logo:hover > .header-left-logo__title_right,
.header-left__logo:active > .header-left-logo__title_right {
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.header-left__desc {
  padding-top: 0.1111rem;
  font-weight: 500;
  font-size: 1rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.header__row_right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-right__list_left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.header-right__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 1.5556rem;
}

.header-right__link {
  font-size: 1rem;
  color: #0d0d0d;
  background-color: transparent;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.header-right__link:hover,
.header-right__link:active {
  color: #ff3600;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.header-right__button_left {
  padding: 0.5rem 1.8889rem 0.5556rem;
  text-align: center;
  border-radius: 20px;
  background: rgba(255, 54, 0, 0.8);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.header-right__button_left:hover,
.header-right__button_left:active {
  background: rgba(255, 54, 0, 0.91);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.header-right-button__text {
  font-weight: 700;
  font-size: 1rem;
  /* line-height: 1rem; */
  color: #ffffff;
}

.header-right__menu {
  display: none;
  background-color: transparent;
  align-items: center;
  margin-left: 15px;
}

.header-absolute__menu {
  display: none;
  position: absolute;
  z-index: 10;
  right: 0px;
  top: 0px;
  padding: 1.4rem 2rem 2.2rem;
  background: #ffffff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.2);
  border-radius: 20px 0px 20px 20px;
  transform: translateX(101%);
  transition: transform 0.4s ease-in-out;
}

.header-absolute__list {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.header-absolute__item {
  margin-bottom: 0.5556rem;
}

.header-absolute__link {
  font-size: 1rem;
  color: #0d0d0d;
  background-color: transparent;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.header-absolute__link:hover,
.header-absolute__link:active {
  color: #ff3600;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.header-absolute__btn {
  background-color: transparent;
  align-items: center;
  margin-bottom: 0.6667rem;
}

@media (max-width: 960px) {
  .header__row_left {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
  }

  .header-left__desc {
    padding-top: 0;
  }
}

@media (max-width: 768px) {
  .header-right__list_left {
    display: none;
  }

  .header-right__menu {
    display: flex;
  }

  .header-absolute__menu {
    transform: translateX(0%);
    transition: transform 0.4s ease-in-out;
  }
}

@media (max-width: 480px) {
  .header-right__button_left {
    padding: 3px 17px 3.5px;
  }

  .header-right-button__text {
    font-size: 14px;
  }
}

@media (max-width: 320px) {
  .header-left__logo {
    margin-right: 0;
  }
}
</style>
