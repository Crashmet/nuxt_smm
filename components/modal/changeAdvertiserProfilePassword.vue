<template>
  <div>
    <h4 class="mb-3">Edit Password</h4>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Old password:"
        label-for="input-oldPassword"
        description="Enter your old password."
      >
        <b-form-input
          type="password"
          id="input-oldPassword"
          v-model="old_password"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorOldPassword.length > 0">
        <p class="modal__validation">{{ validatorOldPassword }}</p>
      </template>
    </div>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="New password:"
        label-for="input-newPassword"
        description="Enter your new password."
      >
        <b-form-input
          type="password"
          id="input-newPassword"
          v-model="new_password"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorPassword.length > 0">
        <p class="modal__validation">{{ validatorPassword }}</p>
      </template>
    </div>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Repeat new password:"
        label-for="input-rNPassword"
        description="Repeat your new password."
      >
        <b-form-input
          type="password"
          id="input-rNPassword"
          v-model="new_password_confirm"
        ></b-form-input>
      </b-form-group>

      <template
        v-if="validatorPassword2.length > 0 || nonFieldErrors.length > 0"
      >
        <p class="modal__validation">
          {{ validatorPassword2 }} {{ nonFieldErrors }}
        </p>
      </template>
    </div>

    <b-button-group class="pt-1 mt-4">
      <b-button
        class="btn btn-dark mr-5 btn_back rounded"
        type="button"
        @click.prevent="changePasswordModalStatus(false)"
      >
        Назад
      </b-button>
      <b-button
        class="btn btn-dark btn_change rounded"
        type="button"
        @click.prevent="handlerSubmitSettings()"
      >
        Изменить
      </b-button>
    </b-button-group>
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
      status: "statusMassageModalStore/status",
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
.btn_change:hover,
.btn_change:active {
  background: var(--bs-secondary);
}

.btn_back:hover,
.btn_back:active {
  background: var(--bs-warning);
}

/* *** VALIDATION *** */

.modal__validation {
  font-size: 0.8889rem;
  margin-bottom: 10px;
  color: var(--bs-orange);
  text-align: center;
}
</style>
