<template>
  <div>
    <template v-if="isResponseOk">
      <div class="d-flex justify-content-center align-items-center">
        <h4 class="mr-4">information about user</h4>

        <button
          class="header__btn_back btn btn-dark"
          @click="handlerClickBack()"
        >
          Вернуться
        </button>
      </div>

      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-4">
            <div class="card" style="border-radius: 15px">
              <div
                class="card-body d-flex flex-column align-items-center justify-content-center"
              >
                <div class="mt-3 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    class="rounded-circle img-fluid"
                    style="width: 120px"
                  />
                </div>
                <h4 class="mb-2">
                  {{ profileDataList.first_name }}
                  {{ profileDataList.last_name }}
                </h4>
                <p class="text-muted mb-4">
                  @{{ profileDataList.username }} <span class="mx-2">|</span>
                  <a href="#!">{{ profileDataList.email }}</a>
                </p>
                <div class="mb-4 pb-2">
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-floating"
                  >
                    <i class="fa fa-facebook-f fa-lg"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-floating"
                  >
                    <i class="fa fa-twitter fa-lg"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-floating"
                  >
                    <i class="fa fa-skype fa-lg"></i>
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-rounded btn-lg"
                >
                  Message now
                </button>
                <div
                  class="d-flex justify-content-between text-center mt-5 mb-2"
                >
                  <div>
                    <p class="mb-2 h5">8471</p>
                    <p class="text-muted mb-0">Wallets Balance</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-2 h5">8512</p>
                    <p class="text-muted mb-0">Income amounts</p>
                  </div>
                  <div>
                    <p class="mb-2 h5">4751</p>
                    <p class="text-muted mb-0">Total Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else> <h3 class="order__not-found">Ошибка!</h3></template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BloggerUserProfile",

  mounted() {
    this.getProfileDataList(this.username);
  },

  computed: {
    ...mapGetters({
      username: "profileCard/username",
      profileDataList: "profileCard/profileDataList",

      isLoading: "profileCard/isLoading",
      isResponseOk: "profileCard/isResponseOk",
    }),
  },

  methods: {
    ...mapActions({
      getProfileDataList: "profileCard/getProfileDataList",
    }),

    handlerClickBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
