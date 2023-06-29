<template>
  <div>
    <div
      class="advertiser-profile__body body"
      v-if="!isOpenModalChangeData && !isOpenModalChangePassword"
    >
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="E-mail"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          disabled
          v-model="advertiserData.email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Имя"
        label-for="input-firstName"
      >
        <b-form-input
          id="input-firstName"
          disabled
          v-model="advertiserData.first_name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Имя"
        label-for="input-firstName"
      >
        <b-form-input
          id="input-firstName"
          disabled
          v-model="advertiserData.first_name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Фамилия"
        label-for="input-lastName"
      >
        <b-form-input
          id="input-lastName"
          disabled
          v-model="advertiserData.last_name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Website"
        label-for="input-website"
      >
        <b-form-input
          id="input-website"
          disabled
          placeholder="..."
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="ИНН"
        label-for="input-inn"
      >
        <b-form-input id="input-inn" disabled placeholder="..."></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Адрес"
        label-for="input-adress"
      >
        <b-form-input
          id="input-adress"
          disabled
          placeholder="..."
        ></b-form-input>
      </b-form-group>

      <b-button-group class="pt-1 mt-4">
        <b-button
          class="btn btn-dark mr-5 rounded"
          type="button"
          @click.prevent="changeDataModalStatus(true)"
        >
          Изменить профиль
        </b-button>
        <b-button
          class="btn btn-dark rounded"
          type="button"
          @click.prevent="changePasswordModalStatus(true)"
        >
          Изменить пароль
        </b-button>
      </b-button-group>
    </div>
    <change-advertiser-profile-data v-else-if="isOpenModalChangeData" />
    <change-advertiser-profile-password v-else-if="isOpenModalChangePassword" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import changeAdvertiserProfileData from "~/components/modal/changeAdvertiserProfileData.vue";
import changeAdvertiserProfilePassword from "~/components/modal/changeAdvertiserProfilePassword.vue";

export default {
  name: "AdvertiserProfile",

  components: { changeAdvertiserProfileData, changeAdvertiserProfilePassword },

  mounted() {
    this.addAdvertiserData();
  },

  computed: {
    ...mapGetters({
      advertiserData: "advertiserProfileStore/advertiserData",
      isOpenModalChangeData: "advertiserProfileStore/isOpenModalChangeData",
      isOpenModalChangePassword:
        "advertiserProfileStore/isOpenModalChangePassword",
    }),
  },

  methods: {
    ...mapActions({
      addAdvertiserData: "advertiserProfileStore/addAdvertiserData",
      changeDataModalStatus: "advertiserProfileStore/changeDataModalStatus",
      changePasswordModalStatus:
        "advertiserProfileStore/changePasswordModalStatus",
    }),
  },
};
</script>

<style scoped></style>
