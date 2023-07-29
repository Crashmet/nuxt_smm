<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card" id="chat3" style="border-radius: 15px">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                <div class="p-3">
                  <div class="input-group rounded mb-3">
                    <button
                      type="button"
                      class="btn text-muted bg-transparent mr-1 rounded"
                      @click.prevent="handlerClickContacts()"
                    >
                      <i
                        class="fa fa-address-book-o"
                        style="font-size: 20px"
                      ></i>
                    </button>

                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span
                      class="input-group-text border-0 bg-transparent"
                      id="search-addon"
                    >
                      <i class="fa fa-search"></i>
                    </span>
                  </div>

                  <vue-custom-scrollbar>
                    <div style="position: relative; height: 400px">
                      <div v-if="isUserList" class="contacts-list">
                        <ul
                          v-if="userList.length > 0"
                          class="list-unstyled mb-0"
                        >
                          <li
                            class="p-2 border-bottom"
                            v-for="item in userList"
                            :key="item.pk"
                          >
                            <a
                              href="#!"
                              class="d-flex justify-content-between"
                              @click.prevent="handlerClickUser(item)"
                            >
                              <div class="d-flex flex-row">
                                <div>
                                  <span
                                    class="badge bg-success badge-dot"
                                  ></span>
                                </div>
                                <div class="pt-1">
                                  <p class="fw-bold mb-0">
                                    {{ item.username }}
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>

                        <div v-else>
                          <p class="ml-4">Ошибка</p>
                        </div>
                      </div>

                      <div v-else>
                        <ul
                          v-if="dialogsList.length > 0"
                          class="list-unstyled mb-0"
                        >
                          <li
                            class="p-2 border-bottom"
                            v-for="item in userList"
                            :key="item.pk"
                          >
                            <a
                              href="#!"
                              class="d-flex justify-content-between"
                              @click.prevent="handlerClickUserContact(item)"
                            >
                              <div class="d-flex flex-row">
                                <div>
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                    alt="avatar"
                                    class="d-flex align-self-center me-3"
                                    width="60"
                                  />
                                  <span
                                    class="badge bg-success badge-dot"
                                  ></span>
                                </div>
                                <div class="pt-1">
                                  <p class="fw-bold mb-0">
                                    {{ item.username }}
                                  </p>
                                  <p class="small text-muted">
                                    Hello, Are you there?
                                  </p>
                                </div>
                              </div>
                              <!-- <div class="pt-1">
                                <p class="small text-muted mb-1">Just now</p>
                                <span
                                  class="badge bg-danger rounded-pill float-end text-white"
                                  >3</span
                                >
                              </div> -->
                            </a>
                          </li>
                        </ul>

                        <div v-else>
                          <p class="ml-4">Список диалогов пуст</p>
                        </div>
                      </div>
                    </div>
                  </vue-custom-scrollbar>
                </div>
              </div>

              <div v-if="isOpenChat" class="col-md-6 col-lg-7 col-xl-8 bg-chat">
                <vue-custom-scrollbar v-if="messagesList.length > 0">
                  <div
                    class="pt-3 pe-3"
                    style="position: relative; height: 400px"
                  >
                    <div class="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                      <div>
                        <p
                          class="small p-2 ms-3 mb-1 rounded-3"
                          style="background-color: #f5f6f7"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p
                          class="small ms-3 mb-3 rounded-3 text-muted float-end"
                        >
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row justify-content-end">
                      <div>
                        <p
                          class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                        >
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                        <p class="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                    </div>

                    <div class="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                      <div>
                        <p
                          class="small p-2 ms-3 mb-1 rounded-3"
                          style="background-color: #f5f6f7"
                        >
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p
                          class="small ms-3 mb-3 rounded-3 text-muted float-end"
                        >
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row justify-content-end">
                      <div>
                        <p
                          class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                        >
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                        <p class="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                    </div>

                    <div class="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                      <div>
                        <p
                          class="small p-2 ms-3 mb-1 rounded-3"
                          style="background-color: #f5f6f7"
                        >
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                        <p
                          class="small ms-3 mb-3 rounded-3 text-muted float-end"
                        >
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row justify-content-end">
                      <div>
                        <p
                          class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                        >
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt.
                        </p>
                        <p class="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                    </div>

                    <div class="d-flex flex-row justify-content-start">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                      <div>
                        <p
                          class="small p-2 ms-3 mb-1 rounded-3"
                          style="background-color: #f5f6f7"
                        >
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam aliquam quaerat voluptatem.
                        </p>
                        <p
                          class="small ms-3 mb-3 rounded-3 text-muted float-end"
                        >
                          12:00 PM | Aug 13
                        </p>
                      </div>
                    </div>

                    <div class="d-flex flex-row justify-content-end">
                      <div>
                        <p
                          class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                        >
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur?
                        </p>
                        <p class="small me-3 mb-3 rounded-3 text-muted">
                          12:00 PM | Aug 13
                        </p>
                      </div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1"
                        style="width: 45px; height: 100%"
                      />
                    </div>
                  </div>
                </vue-custom-scrollbar>

                <div
                  v-else
                  class="pt-3 pe-3"
                  style="position: relative; height: 400px"
                >
                  <div class="d-flex flex-row justify-content-end mb-4">
                    <div class="">
                      <p
                        class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                    <b-skeleton type="avatar"></b-skeleton>
                  </div>

                  <div class="d-flex flex-row justify-content-start mb-4">
                    <b-skeleton type="avatar"></b-skeleton>
                    <div>
                      <p
                        class="small p-2 ms-3 mb-1 rounded-3"
                        style="background-color: #f5f6f7"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                  </div>

                  <div class="d-flex flex-row justify-content-end mb-4">
                    <div class="">
                      <p
                        class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                    <b-skeleton type="avatar"></b-skeleton>
                  </div>

                  <div class="d-flex flex-row justify-content-start mb-4">
                    <b-skeleton type="avatar"></b-skeleton>
                    <div>
                      <p
                        class="small p-2 ms-3 mb-1 rounded-3"
                        style="background-color: #f5f6f7"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                  </div>

                  <div class="d-flex flex-row justify-content-end mb-4">
                    <div class="">
                      <p
                        class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                    <b-skeleton type="avatar"></b-skeleton>
                  </div>

                  <div class="d-flex flex-row justify-content-start mb-4">
                    <b-skeleton type="avatar"></b-skeleton>
                    <div>
                      <p
                        class="small p-2 ms-3 mb-1 rounded-3"
                        style="background-color: #f5f6f7"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                  </div>

                  <div class="d-flex flex-row justify-content-end mb-4">
                    <div class="">
                      <p
                        class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary"
                      >
                        <b-skeleton
                          animation="wave"
                          class="skeleton-chat"
                        ></b-skeleton>
                      </p>
                    </div>
                    <b-skeleton type="avatar"></b-skeleton>
                  </div>
                </div>

                <div
                  class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"
                >
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="exampleFormControlInput2"
                    placeholder="Type message"
                  />
                  <a class="ms-1 text-muted" href="#!"
                    ><i class="fa fa-paperclip" style="font-size: 20px"></i
                  ></a>

                  <a class="ms-3" href="#!"
                    ><i
                      class="fa fa-paper-plane"
                      style="font-size: 20px; color: #0d6efd"
                    ></i
                  ></a>
                </div>
              </div>

              <div v-else class="col-md-6 col-lg-7 col-xl-8 bg-chat"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "BloggerChat",

  components: {
    vueCustomScrollbar,
  },

  data() {
    return {
      isUserList: false,
      isOpenChat: false,
    };
  },

  mounted() {
    this.getDialogsList();
  },

  computed: {
    ...mapGetters({
      userList: "chat/userList",
      dialogsList: "chat/dialogsList",

      messagesList: "chat/messagesList",
    }),
  },

  methods: {
    ...mapActions({
      getUserList: "chat/getUserList",
      getDialogsList: "chat/getDialogsList",

      getMessagesList: "chat/getMessagesList",
    }),

    handlerClickContacts() {
      this.isUserList = !this.isUserList;

      this.getUserList();
    },

    handlerClickUser(item) {
      this.isUserList = false;
      this.isOpenChat = true;

      this.getMessagesList(item.pk);
    },

    handlerClickUserContact(item) {
      this.isUserList = false;
      this.isOpenChat = true;

      this.getMessagesList(item.pk);
    },
  },
};
</script>

<style scoped>
#chat3 .form-control {
  border-color: transparent;
}

#chat3 .form-control:focus {
  border-color: transparent;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.badge-dot {
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 2.9rem;
  margin-top: -0.75rem;
}

.skeleton-chat {
  width: 670px;
}

@media (max-width: 1400px) {
  .skeleton-chat {
    width: 570px;
  }
}

@media (max-width: 1200px) {
  .skeleton-chat {
    width: 390px;
  }
}

@media (max-width: 990px) {
  .skeleton-chat {
    width: 195px;
  }
}

@media (max-width: 767px) {
  .skeleton-chat {
    width: 305px;
  }
}

@media (max-width: 540px) {
  .skeleton-chat {
    width: 200px;
  }
}

@media (max-width: 420px) {
  .skeleton-chat {
    width: 150px;
  }
}

@media (max-width: 370px) {
  .skeleton-chat {
    width: 120px;
  }
}

@media (max-width: 340px) {
  .skeleton-chat {
    width: 90px;
  }
}
</style>
