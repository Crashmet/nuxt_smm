<template>
  <section class="register">
    <div class="register__container container">
      <div class="register__body" :class="entryStatus === 201 ? 'blur' : ''">
        <h2 class="register__title">Регистрация</h2>

        <form class="register__form">
          <div class="register-form__list">
            <div class="register-form__item">
              <input
                v-model="username"
                type="text"
                class="register__input"
                placeholder="Username"
              />

              <template v-if="validatorUsername.length">
                <p class="register__validation">{{ validatorUsername }}</p>
              </template>
            </div>

            <div class="register-form__item">
              <input
                v-model="first_name"
                type="text"
                class="register__input"
                placeholder="Имя"
              />
            </div>

            <div class="register-form__item">
              <input
                v-model="last_name"
                type="text"
                class="register__input"
                placeholder="Фамилия"
              />
            </div>

            <div class="register-form__item register-form__item-radio">
              <div class="item-radio">
                <input
                  v-model="role"
                  id="bloger-radio-input"
                  value="blogger"
                  type="radio"
                  name="redirecttarget"
                  class="item-radio__input"
                  checked
                />
                <label for="bloger-radio-input" class="item-radio__label"
                  >Блогер</label
                >
              </div>

              <div class="item-radio">
                <input
                  v-model="role"
                  id="advertiser-radio-input"
                  value="advertiser"
                  type="radio"
                  name="redirecttarget"
                  class="item-radio__input"
                />
                <label for="advertiser-radio-input" class="item-radio__label"
                  >Рекламодатель</label
                >
              </div>
            </div>

            <div class="register-form__item">
              <input
                v-model="email"
                type="email"
                class="register__input register__input_email"
                placeholder="E-mail"
              />

              <template v-if="validatorEmail.length">
                <p class="register__validation">{{ validatorEmail }}</p>
              </template>
            </div>

            <div class="register-form__item">
              <input
                v-model="password"
                type="password"
                class="register__input register__input_pass-1"
                placeholder="Пароль 1"
              />

              <template v-if="validatorPassword.length">
                <p class="register__validation">{{ validatorPassword }}</p>
              </template>
            </div>

            <div class="register-form__item">
              <input
                v-model="password2"
                type="password"
                class="register__input register__input_pass-2"
                placeholder="Пароль 2"
              />

              <template
                v-if="validatorPassword2.length || nonFieldErrors.length"
              >
                <p class="register__validation">
                  {{ validatorPassword2 }} {{ nonFieldErrors }}
                </p>
              </template>
            </div>
          </div>

          <button
            @click.prevent="handlerSubmit"
            type="submit"
            class="register__submit-btn"
          >
            <span class="submit-btn__text">Зарегистрироваться </span>
          </button>
        </form>
      </div>

      <div class="register-modal" v-show="entryStatus === 201">
        <h3 class="register-modal__title">Регистрация прошла успешно!</h3>
        <button class="register-modal__btn" @click="handlerClickHome()">
          <p class="register-modal__btn-text">На главную</p>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",

  data() {
    return {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      role: "blogger",

      validatorUsername: "",
      validatorPassword: "",
      validatorPassword2: "",
      validatorEmail: "",
      nonFieldErrors: "",
    };
  },

  computed: {
    ...mapGetters({
      validatorResponse: "registerStore/validatorResponse",
      entryStatus: "registerStore/entryStatus",
    }),
  },

  methods: {
    ...mapActions({
      onRegistration: "registerStore/onRegistration",
    }),

    handlerSubmit() {
      const registerData = {
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        password: this.password,
        password2: this.password2,
        username: this.username,
        role: this.role,
      };

      this.onRegistration(registerData);

      this.resetFormPassword();
    },

    resetFormPassword() {
      this.password = "";
      this.password2 = "";
    },

    resetValidatorMassages() {
      this.validatorUsername = "";
      this.validatorPassword = "";
      this.validatorPassword2 = "";
      this.validatorEmail = "";
      this.nonFieldErrors = "";
    },

    addValidatorMassages() {
      for (let el of Object.entries(this.validatorResponse)) {
        let massage = "";

        if (Array.isArray(el[1])) {
          massage = el[1].reduce((acc, el) => acc + " " + el);
        } else {
          massage = el[1];
        }

        if (el[0] === "email") {
          this.validatorEmail = massage;
        } else if (el[0] === "password") {
          this.validatorPassword = massage;
        } else if (el[0] === "password2") {
          this.validatorPassword2 = massage;
        } else if (el[0] === "username") {
          this.validatorUsername = massage;
        } else if (el[0] === "detail") {
          this.nonFieldErrors = massage;
        }
      }
    },

    handlerClickHome() {
      this.$router.push({ path: "/" });
    },
  },

  watch: {
    validatorResponse() {
      this.resetValidatorMassages();
      this.addValidatorMassages();
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

.register {
  margin-top: 4.2222rem;
  margin-bottom: 5.3333rem;
}

.register__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.register__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 20rem;
  width: 100%;
}

.register__title {
  margin-bottom: 2.4445rem;
  font-weight: 700;
  font-size: 1.7778rem;
  line-height: 2.1111rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.register__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
  width: 100%;
}

.register-form__list {
  width: 100%;
}

.register-form__item {
  margin-bottom: 1.1111rem;
  width: 100%;
}

.register-form__item:last-child {
  margin-bottom: 1.6667rem;
}

.register__input {
  padding: 6px 30px;
  width: 100%;
  height: 33px;
  background: #ffffff;
  border: 1px solid rgba(255, 54, 0, 0.7);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.register__validation {
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: rgba(255, 54, 0, 1);
}

.register__submit-btn {
  padding: 7px 34px;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 20px;
}

.register__submit-btn:hover,
.register__submit-btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.submit-btn__text {
  font-weight: 700;
  text-align: center;
  color: #ffffff;
}

.register__aside {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.register__restore-pass {
  text-decoration: underline;
  -webkit-text-decoration-color: #0d0d0d;
  text-decoration-color: #0d0d0d;
}

/* *** RADIO ***  */
.register-form__item-radio {
  display: flex;
  margin-left: 10px;
}

.item-radio:not(:last-child) {
  margin-right: 20px;
}

.item-radio__input {
  position: absolute;
  overflow: hidden;
  visibility: hidden;
  top: -9999px;
  left: -9999px;
  height: 1px;
  width: 1px;
  opacity: 0;
}

.item-radio__label {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 0.8889rem;
  margin: 0;
  padding: 0 0 0 1.3889rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.item-radio__label:after,
.item-radio__label:before {
  position: absolute;
  content: "";
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.item-radio__label:before {
  left: 0;
  top: 0.1667rem;
  height: 1rem;
  width: 1rem;
  border: 0.1111rem solid rgba(255, 54, 0, 0.7);
  background: #fff;
}

.item-radio__label:after {
  height: 0.4722rem;
  width: 0.4722rem;
  left: 0.2667rem;
  top: 0.4167rem;
  background-color: transparent;
}

.item-radio__input:checked + .item-radio__label:before {
  border-width: 0.1389rem;
}

.item-radio__input:checked + .item-radio__label:after {
  background-color: rgba(255, 54, 0, 0.7);
}

/* ******** MODAL ******* */

.register-modal {
  position: absolute;
  top: 37%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.6667rem 2.2222rem;
  border-radius: 1.1111rem;
  background: #ffffff;
  -webkit-filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

.register-modal__title {
  margin-bottom: 1.1rem;
  font-weight: 500;
  font-size: 1.3333rem;
  color: #0d0d0d;
}

.register-modal__btn {
  padding: 0.5rem 1.8889rem 0.5556rem;
  border-radius: 20px;
  background: rgba(255, 54, 0, 0.8);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.register-modal__btn:hover,
.register-modal__btn:active {
  background: rgba(255, 54, 0, 0.91);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.register-modal__btn-text {
  font-weight: 500;
  font-size: 1rem;
  /* line-height: 1rem; */
  color: #ffffff;
}

@media (max-width: 480px) {
  .item-radio__label:before {
    top: 1.5px;
  }

  .register-modal {
    position: absolute;
    top: 30%;
  }

  .register-modal__btn {
    padding: 3px 17px 3.5px;
  }

  .register-modal__btn-text {
    font-size: 14px;
  }
}

@media (max-width: 440px) {
  .register {
    margin-top: 55px;
    margin-bottom: 50px;
  }

  .register__body {
    max-width: 221px;
  }

  .register__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 23 px;
  }

  .register-form__item {
    margin-bottom: 8px;
  }

  .register-form__item:last-child {
    margin-bottom: 16px;
  }

  .register__input {
    height: 30px;
    padding: 4px 30px 7px;
  }

  .register__submit-btn {
    padding: 9px 15px;
  }

  .submit-btn__text {
    font-size: 14px;
    line-height: 16px;
  }
}

.blur {
  filter: blur(15px);
}
</style>
