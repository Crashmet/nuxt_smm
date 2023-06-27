<template>
  <div class="login-page">
    <Header />
    <main>
      <section class="vh-100" style="background-color: #9a616d">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col col-xl-10">
              <div class="card" style="border-radius: 1rem">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                      style="border-radius: 1rem 0 0 1rem"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <span class="h1 fw-bold mb-0">SMM Planeta .</span>
                        </div>

                        <h5
                          class="fw-normal mb-3 pb-3"
                          style="letter-spacing: 1px"
                        >
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            v-model="username"
                          />
                          <label class="form-label" for="form2Example17"
                            >Username</label
                          >

                          <template v-if="validatorUsername.length">
                            <p class="login__validation">
                              {{ validatorUsername }}
                            </p>
                          </template>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                            v-model="password"
                          />
                          <label class="form-label" for="form2Example27"
                            >Password</label
                          >

                          <template
                            v-if="
                              validatorPassword.length || nonFieldErrors.length
                            "
                          >
                            <p class="login__validation">
                              {{ validatorPassword }} {{ nonFieldErrors }}
                            </p>
                          </template>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="button"
                            @click.prevent="handlerSubmit()"
                          >
                            Login
                          </button>
                        </div>

                        <a class="small text-muted" href="#!"
                          >Forgot password?</a
                        >
                        <p class="mb-5 pb-lg-2" style="color: #393f81">
                          Don't have an account?
                          <nuxt-link to="/register" style="color: #393f81"
                            >Register here</nuxt-link
                          >
                        </p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "LoginPage",

  middleware: ["searchRequestReset", "authDone"],

  data() {
    return {
      username: "Cat12",
      password: "shamil123",

      validatorUsername: "",
      validatorPassword: "",
      nonFieldErrors: "",
    };
  },

  components: {
    Header,
    Footer,
  },

  computed: {
    ...mapGetters({
      validatorResponse: "authStore/validatorResponse",
    }),
  },

  methods: {
    ...mapActions({
      onLogin: "authStore/onLogin",
    }),

    handlerSubmit() {
      const loginData = {
        username: this.username,
        password: this.password,
      };

      this.onLogin(loginData);

      this.resetFormPassword();
    },

    resetFormPassword() {
      this.password = "";
    },

    resetValidatorMassages() {
      this.validatorUsername = "";
      this.validatorPassword = "";
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

        if (el[0] === "username") {
          this.validatorUsername = massage;
        } else if (el[0] === "password") {
          this.validatorPassword = massage;
        } else if (el[0] === "non_field_errors") {
          this.nonFieldErrors = massage;
        }
      }
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

.login__validation {
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: var(--bs-orange);
}
</style>
