<template>
  <div>
    <div
      v-if="!isOpenModalChangeData && !isOpenModalChangePassword"
      class="container py-4"
    >
      <div class="row d-flex">
        <div>
          <div class="card mb-3" style="border-radius: 10px">
            <div class="row g-0">
              <div
                class="col-md-4 gradient-custom d-flex flex-column align-items-center justify-content-center text-white"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  class="img-fluid my-5"
                  style="width: 120px"
                />
                <h4>{{ bloggerData.username }}</h4>
                <h5>
                  {{ bloggerData.first_name }} {{ bloggerData.last_name }}
                </h5>
                <p>Blogger</p>
                <button
                  class="my-4 bg-transparent border-0"
                  type="button"
                  @click.prevent="changeDataModalStatus(true)"
                >
                  <i class="fa fa-edit" style="font-size: 22px"></i>
                </button>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h5>Information</h5>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Email</h6>
                      <p class="text-muted">{{ bloggerData.email }}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Phone</h6>
                      <p class="text-muted">+123 456 789</p>
                    </div>
                  </div>
                  <h6>Projects</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Recent</h6>
                      <p class="text-muted">Lorem ipsum</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Most Viewed</h6>
                      <p class="text-muted">Dolor sit amet</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <a href="#!"
                      ><i
                        class="fa fa-facebook-f fa-lg me-3"
                        style="font-size: 20px"
                      ></i
                    ></a>
                    <a href="#!"
                      ><i
                        class="fa fa-twitter fa-lg me-3"
                        style="font-size: 20px"
                      ></i
                    ></a>
                    <a href="#!"
                      ><i
                        class="fa fa-instagram fa-lg"
                        style="font-size: 20px"
                      ></i
                    ></a>
                  </div>

                  <button
                    class="mt-5 btn btn-dark rounded"
                    type="button"
                    @click.prevent="changePasswordModalStatus(true)"
                  >
                    Изменить пароль
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #f6d365;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right bottom,
    rgba(246, 211, 101, 1),
    rgba(253, 160, 133, 1)
  );
}
</style>
