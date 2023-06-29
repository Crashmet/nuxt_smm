<template>
  <div>
    <div
      class="blogger-profile__body body"
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
          v-model="bloggerData.email"
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
          v-model="bloggerData.first_name"
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
          v-model="bloggerData.first_name"
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
          v-model="bloggerData.last_name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Instagram"
        label-for="input-instagram"
      >
        <b-form-input
          id="input-instagram"
          disabled
          placeholder="nickname."
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="4"
        label="Tiktok"
        label-for="input-tiktok"
      >
        <b-form-input
          id="input-tiktok"
          disabled
          placeholder="nickname."
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
    <change-blogger-profile-data v-else-if="isOpenModalChangeData" />
    <change-blogger-profile-password v-else-if="isOpenModalChangePassword" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import changeBloggerProfileData from "~/components/modal/changeBloggerProfileData.vue";
import changeBloggerProfilePassword from "~/components/modal/changeBloggerProfilePassword.vue";

export default {
  name: "BloggerProfile",

  components: { changeBloggerProfileData, changeBloggerProfilePassword },

  mounted() {
    this.addBloggerData();
  },

  computed: {
    ...mapGetters({
      bloggerData: "bloggerProfileStore/bloggerData",
      isOpenModalChangeData: "bloggerProfileStore/isOpenModalChangeData",
      isOpenModalChangePassword:
        "bloggerProfileStore/isOpenModalChangePassword",
    }),
  },

  methods: {
    ...mapActions({
      addBloggerData: "bloggerProfileStore/addBloggerData",
      changeDataModalStatus: "bloggerProfileStore/changeDataModalStatus",
      changePasswordModalStatus:
        "bloggerProfileStore/changePasswordModalStatus",
    }),
  },
};
</script>

<style scoped></style>
