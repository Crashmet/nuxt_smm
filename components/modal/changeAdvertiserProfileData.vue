<template>
  <div>
    <h4 class="mb-3">Edit Profile</h4>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Username:"
        label-for="input-username"
        description="Enter your new username."
      >
        <b-form-input id="input-username" v-model="username"></b-form-input>

        <template v-if="validatorUsername.length > 0">
          <p class="modal__validation">{{ validatorUsername }}</p>
        </template>
      </b-form-group>
    </div>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="First name:"
        label-for="input-firstName"
        description="Enter your new first name."
      >
        <b-form-input id="input-firstName" v-model="first_name"></b-form-input>
      </b-form-group>
    </div>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Last name:"
        label-for="input-lastName"
        description="Enter your new last name."
      >
        <b-form-input id="input-lastName" v-model="last_name"></b-form-input>
      </b-form-group>
    </div>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="E-mail:"
        label-for="input-email"
        description="Enter your new E-mail."
      >
        <b-form-input id="input-email" v-model="email"></b-form-input>

        <template v-if="validatorEmail.length > 0">
          <p class="modal__validation">{{ validatorEmail }}</p>
        </template>
      </b-form-group>
    </div>

    <b-row class="mb-4 py-2">
      <b-col cols="2" sm="4" lg="2">
        <p class="mb-2 p-0">Role:</p>
      </b-col>

      <b-col cols="12" sm="8" lg="6">
        <b-row class="pl-4">
          <b-col cols="5" class="form-check form-check-inline mb-0 me-4">
            <input
              class="form-check-input"
              type="radio"
              name="redirecttarget"
              id="blogger-radio-input"
              value="blogger"
              v-model="role"
            />
            <label class="form-check-label" for="blogger-radio-input"
              >Blogger</label
            >
          </b-col>

          <b-col cols="5" class="form-check form-check-inline mb-0 me-4">
            <input
              class="form-check-input"
              type="radio"
              name="redirecttarget"
              id="advertiser-radio-input"
              value="advertiser"
              v-model="role"
            />
            <label class="form-check-label" for="advertiser-radio-input"
              >Advertiser</label
            >
          </b-col>
        </b-row>

        <template v-if="validatorRole.length > 0">
          <p class="modal__validation">{{ validatorRole }}</p>
        </template>
      </b-col>
    </b-row>

    <b-row class="pt-1 mt-4">
      <b-col cols="0" md="4" lg="2"></b-col>
      <b-col cols="6" md="4" lg="2">
        <button
          class="btn btn-dark mr-5 btn_back rounded mb-3 px-4"
          type="button"
          @click.prevent="changeDataModalStatus(false)"
        >
          Назад
        </button>
      </b-col>
      <b-col cols="6" md="4" lg="3">
        <button
          class="btn btn-dark btn_change rounded mb-3 px-4"
          type="button"
          @click.prevent="handlerSubmitSettings()"
        >
          Изменить
        </button>
      </b-col>
    </b-row>
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
      role: "blogger",

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
