<template>
  <div class="register-page">
    <Header />
    <main>
      <section class="h-100 bg-dark">
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col">
              <div
                class="card card-registration my-4"
                :class="isRegistered ? 'blur' : ''"
              >
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      class="img-fluid"
                      style="
                        border-top-left-radius: 0.25rem;
                        border-bottom-left-radius: 0.25rem;
                      "
                    />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <span class="h1 fw-bold mb-1"
                        >SMM Planeta . Registration form</span
                      >

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              class="form-control form-control-lg"
                              v-model="first_name"
                            />
                            <label class="form-label" for="form3Example1m"
                              >First name</label
                            >
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1n"
                              class="form-control form-control-lg"
                              v-model="last_name"
                            />
                            <label class="form-label" for="form3Example1n"
                              >Last name</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          class="form-control form-control-lg"
                          v-model.trim="username"
                        />
                        <label class="form-label" for="form3Example8"
                          >Username</label
                        >

                        <template v-if="validatorUsername.length > 0">
                          <p class="register__validation">
                            {{ validatorUsername }}
                          </p>
                        </template>
                      </div>

                      <div
                        class="d-md-flex justify-content-start align-items-center mb-4 py-2"
                      >
                        <h6 class="mb-0 me-4">Role:</h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="redirecttarget"
                            id="blogger-radio-input"
                            value="blogger"
                            v-model="role"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="blogger-radio-input"
                            >Blogger</label
                          >
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="redirecttarget"
                            id="advertiser-radio-input"
                            value="advertiser"
                            v-model="role"
                          />
                          <label
                            class="form-check-label"
                            for="advertiser-radio-input"
                            >Advertiser</label
                          >
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example9"
                          class="form-control form-control-lg"
                          v-model="email"
                        />
                        <label class="form-label" for="form3Example9"
                          >E-mail</label
                        >

                        <template v-if="validatorEmail.length > 0">
                          <p class="register__validation">
                            {{ validatorEmail }}
                          </p>
                        </template>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example90"
                          class="form-control form-control-lg"
                          v-model="password"
                        />
                        <label class="form-label" for="form3Example90"
                          >Password</label
                        >

                        <template v-if="validatorPassword.length > 0">
                          <p class="register__validation">
                            {{ validatorPassword }}
                          </p>
                        </template>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example99"
                          class="form-control form-control-lg"
                          v-model="password2"
                        />
                        <label class="form-label" for="form3Example99"
                          >Repeat password</label
                        >

                        <template
                          v-if="
                            validatorPassword2.length > 0 ||
                            nonFieldErrors.length > 0
                          "
                        >
                          <p class="register__validation">
                            {{ validatorPassword2 }} {{ nonFieldErrors }}
                          </p>
                        </template>
                      </div>

                      <div class="d-flex justify-content-end pt-3">
                        <button
                          type="button"
                          class="btn btn-light btn-lg"
                          @click.prevent="resetForm()"
                        >
                          Reset all
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-lg ms-2"
                          @click.prevent="handlerSubmit()"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="register-modal" v-show="isRegistered">
            <h3 class="register-modal__title">
              Registration completed successfully!
            </h3>
            <button
              class="register-modal__btn-close"
              @click="handlerClickCloseModal()"
            >
              <svg
                class="btn-close__svg"
                width="16"
                height="16"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.641389 2.92264C0.28716 2.56841 0.287159 1.99409 0.641388 1.63986C0.995617 1.28563 1.56993 1.28563 1.92416 1.63986L15.3584 15.0742C15.7127 15.4284 15.7127 16.0027 15.3584 16.3569C15.0042 16.7112 14.4299 16.7112 14.0757 16.3569L0.641389 2.92264Z"
                  fill="#0d0d0d"
                ></path>
                <path
                  d="M14.0774 1.64139C14.4316 1.28716 15.0059 1.28716 15.3601 1.64139C15.7144 1.99562 15.7144 2.56994 15.3601 2.92417L1.92586 16.3585C1.57163 16.7127 0.997315 16.7127 0.643086 16.3585C0.288857 16.0042 0.288857 15.4299 0.643086 15.0757L14.0774 1.64139Z"
                  fill="#0d0d0d"
                ></path>
              </svg>
            </button>
            <button
              class="register-modal__btn-home"
              @click="handlerClickHome()"
            >
              <p class="btn-home__text">Go to home</p>
            </button>
          </div>
        </div>
      </section>

      <!-- <Register /> -->
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "RegisterPage",

  middleware: ["searchRequestReset", "authDone"],

  components: {
    Header,
    Footer,
  },

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
      isRegistered: "registerStore/isRegistered",
    }),
  },

  methods: {
    ...mapActions({
      onRegistration: "registerStore/onRegistration",
      setRegisterStatus: "registerStore/setRegisterStatus",
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

    resetForm() {
      this.username = "";
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.password = "";
      this.password2 = "";
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

    handlerClickCloseModal() {
      this.setRegisterStatus(false);
    },

    handlerClickHome() {
      this.setRegisterStatus(false);
      this.$router.push({ path: "/" });
    },
  },

  watch: {
    validatorResponse() {
      this.resetValidatorMassages();
      this.addValidatorMassages();
    },

    isRegistered() {
      if (this.isRegistered === true) {
        this.resetForm();
      }
    },
  },
};
</script>

<style scoped>
/* **** VALIDATION ****  */

.register__validation {
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: var(--bs-orange);
}

/* ******** MODAL ******* */

.register-modal {
  position: absolute;
  top: 20%;
  right: 10%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.6667rem 3.8889rem;
  border-radius: 1.1111rem;
  background: #ffffff;

  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}

.register-modal__btn-close {
  position: absolute;
  right: 5%;
  top: 10%;
  background-color: #fff;
}

.btn-close__svg {
  width: 1rem;
  height: 1rem;
}

.register-modal__title {
  margin-bottom: 1.625rem;
  font-weight: 500;
  font-size: 1.3333rem;
  color: #0d0d0d;
}

.register-modal__btn-home {
  padding: 0.5rem 1.8889rem 0.5556rem;
  border-radius: 20px;
  background: var(--bs-secondary);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.register-modal__btn-home:hover,
.register-modal__btn-home:active {
  background: var(--bs-success);
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}

.btn-home__text {
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
}

@media (max-width: 480px) {
  .register-modal {
    position: absolute;
    top: 30%;
    right: 0%;
    padding: 18px 40px;
  }

  .register-modal__btn-home {
    padding: 3px 17px 3.5px;
  }

  .btn-home__text {
    font-size: 14px;
  }
}

.blur {
  filter: blur(15px);
}
</style>
