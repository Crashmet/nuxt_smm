<template>
  <div class="modal__section">
    <h3 class="modal__title">Изменить профиль</h3>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Username</span>
        </li>

        <li class="modal__cell">
          <input type="text" class="modal__input" v-model="username" />
        </li>
      </ul>
      <template v-if="validatorUsername.length > 0">
        <p class="modal__validation">{{ validatorUsername }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Имя</span>
        </li>

        <li class="modal__cell">
          <input type="text" class="modal__input" v-model="first_name" />
        </li>
      </ul>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Фамилия</span>
        </li>

        <li class="modal__cell">
          <input type="text" class="modal__input" v-model="last_name" />
        </li>
      </ul>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">E-mail</span>
        </li>

        <li class="modal__cell">
          <input type="email" class="modal__input" v-model="email" />
        </li>
      </ul>

      <template v-if="validatorEmail.length > 0">
        <p class="modal__validation">{{ validatorEmail }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Role</span>
        </li>

        <div class="modal__item-radio">
          <div class="item-radio">
            <input
              v-model="role"
              id="blogger-radio-input"
              value="blogger"
              type="radio"
              name="redirecttarget"
              class="item-radio__input"
              checked
            />
            <label for="blogger-radio-input" class="item-radio__label"
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
      </ul>

      <template v-if="validatorRole.length > 0">
        <p class="modal__validation">{{ validatorRole }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label"
            ><button
              class="cell-item__btn cell-item__btn_back"
              @click="changeDataModalStatus(false)"
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
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      role: "",

      validatorUsername: "",
      validatorEmail: "",
      validatorRole: "",
    };
  },

  mounted() {
    this.username = this.advertiserData.username;
    this.first_name = this.advertiserData.first_name;
    this.last_name = this.advertiserData.last_name;
    this.email = this.advertiserData.email;
    this.role = this.advertiserData.role;
  },

  computed: {
    ...mapGetters({
      advertiserData: "advertiserProfileStore/advertiserData",
      validatorResponse: "advertiserProfileStore/validatorResponse",
    }),
  },

  methods: {
    ...mapActions({
      changeAdvertiserData: "advertiserProfileStore/changeAdvertiserData",
      changeDataModalStatus: "advertiserProfileStore/changeDataModalStatus",
    }),

    handlerSubmitSettings() {
      const advertiserData = {
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        role: this.role,
      };

      this.changeAdvertiserData(advertiserData);
    },

    resetValidatorMassages() {
      this.validatorUsername = "";
      this.validatorEmail = "";
      this.validatorRole = "";
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
        } else if (el[0] === "email") {
          this.validatorEmail = massage;
        } else if (el[0] === "role") {
          this.validatorRole = massage;
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
.modal__section {
  position: relative;
  max-width: 25.0139rem;
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
  width: 80%;
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

/* *** RADIO ***  */

.modal__item-radio {
  display: flex;
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
  top: 3px;
  height: 17px;
  width: 17px;
  border: 2px solid var(--bs-gray-600);
  background: transparent;
}

.item-radio__label:after {
  height: 8px;
  width: 8px;
  left: 4.5px;
  top: 7.5px;
  background-color: transparent;
}

.item-radio__input:checked + .item-radio__label:before {
  border-width: 0.1389rem;
}

.item-radio__input:checked + .item-radio__label:after {
  background-color: var(--bs-gray-600);
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
  color: var(--bs-secondary);
}

@media (max-width: 480px) {
  .modal {
    padding: 25px 50px;
    border-radius: 20px;
  }
}
</style>
