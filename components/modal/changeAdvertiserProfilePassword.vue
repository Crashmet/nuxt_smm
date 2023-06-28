<template>
  <div class="modal__section">
    <h3 class="modal__title">Изменить пароль</h3>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Старый пароль</span>
        </li>

        <li class="modal__cell">
          <input type="password" class="modal__input" v-model="old_password" />
        </li>
      </ul>

      <template v-if="validatorOldPassword.length > 0">
        <p class="modal__validation">{{ validatorOldPassword }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Новый пароль</span>
        </li>

        <li class="modal__cell">
          <input type="password" class="modal__input" v-model="new_password" />
        </li>
      </ul>

      <template v-if="validatorPassword.length > 0">
        <p class="modal__validation">{{ validatorPassword }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Повторите новый пароль</span>
        </li>

        <li class="modal__cell">
          <input
            type="password"
            class="modal__input"
            v-model="new_password_confirm"
          />
        </li>
      </ul>

      <template
        v-if="validatorPassword2.length > 0 || nonFieldErrors.length > 0"
      >
        <p class="modal__validation">
          {{ validatorPassword2 }} {{ nonFieldErrors }}
        </p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label"
            ><button
              class="cell-item__btn cell-item__btn_back"
              @click="changePasswordModalStatus(false)"
            >
              Назад
            </button></span
          >
        </li>

        <li class="modal__cell">
          <button
            class="cell-item__btn"
            @click.prevent="handlerSubmitSettings()"
          >
            Изменить
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdvertiserProfileDataModal",

  data() {
    return {
      old_password: "",
      new_password: "",
      new_password_confirm: "",

      validatorOldPassword: "",
      validatorPassword: "",
      validatorPassword2: "",
      nonFieldErrors: "",
    };
  },

  computed: {
    ...mapGetters({
      validatorResponse: "advertiserProfileStore/validatorResponse",
    }),
  },

  methods: {
    ...mapActions({
      changePasswordModalStatus:
        "advertiserProfileStore/changePasswordModalStatus",
      changeAdvertiserPassword:
        "advertiserProfileStore/changeAdvertiserPassword",
    }),

    handlerSubmitSettings() {
      const passwordData = {
        old_password: this.old_password,
        new_password: this.new_password,
        new_password_confirm: this.new_password_confirm,
      };

      this.changeAdvertiserPassword(passwordData);
    },

    resetFormPassword() {
      this.old_password = "";
      this.new_password = "";
      this.new_password_confirm = "";
    },

    resetValidatorMassages() {
      this.validatorOldPassword = "";
      this.validatorPassword = "";
      this.validatorPassword2 = "";
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

        if (el[0] === "old_password") {
          this.validatorOldPassword = massage;
        } else if (el[0] === "new_password") {
          this.validatorPassword = massage;
        } else if (el[0] === "new_password_confirm") {
          this.validatorPassword2 = massage;
        } else if (el[0] === "non_field_errors") {
          this.nonFieldErrors = massage;
        }
      }
    },
  },

  watch: {
    validatorResponse() {
      this.resetFormPassword();
      this.resetValidatorMassages();
      this.addValidatorMassages();
    },
  },
};
</script>

<style scoped>
.modal__section {
  position: relative;
  max-width: 33.3333rem;
  background-color: transparent;
  border-radius: 20px;
}

.modal__title {
  font-size: 1.1111rem;
  margin-bottom: 1.1111rem;
  text-decoration-line: underline;
}

.modal__block {
  margin-bottom: 0.8889rem;
}

.modal__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.modal__cell {
  width: 100%;
}

.modal__cell-label {
  margin-right: 1.1111rem;
  width: 90%;
}

.modal__label {
  font-size: 0.8889rem;
}

.modal__input {
  padding-left: 0.6111rem;
  max-width: 350px;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: var(--bs-gray-600);
  border: 1px solid var(--bs-gray-600);
  border-radius: 10px;
  background-color: transparent;
  /* -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease; */
}

.modal__input:hover,
.modal__input:active {
  -webkit-transition: outline 0.1s ease;
  -o-transition: outline 0.1s ease;
  transition: outline 0.1s ease;
  outline: 1.5px solid var(--bs-secondary);
}

/* ****** BTNs ******  */

.cell-item__btn {
  margin-top: 1.2rem;
  padding: 5.9994px 7.9992px;
  max-width: 16.6667rem;
  width: 100%;
  min-height: 1.6667rem;
  font-weight: 600;
  color: #fff;
  background: var(--bs-gray-600);
  border-radius: 10px;
}

.cell-item__btn:hover,
.cell-item__btn:active {
  background: var(--bs-secondary);
}

.cell-item__btn_back:hover,
.cell-item__btn_back:active {
  background: var(--bs-warning);
}

/* *** VALIDATION *** */

.modal__validation {
  font-size: 0.8889rem;
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: var(--bs-orange);
}

@media (max-width: 480px) {
  .modal {
    padding: 25px 50px;
    border-radius: 20px;
  }
}
</style>
