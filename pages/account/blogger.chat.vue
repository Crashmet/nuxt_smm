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

              <div v-if="isOpenChat" class="col-md-6 col-lg-7 col-xl-8">
                <div>
                  <div
                    v-if="isLoadingMessagesList"
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

                  <vue-custom-scrollbar class="chat" v-else>
                    <div
                      v-if="isResponseMessagesList && messagesList.length > 0"
                      style="position: relative; height: 400px"
                      class="d-flex flex-column-reverse"
                    >
                      <div class="d-flex flex-row justify-content-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 1"
                          style="width: 45px; height: 50%"
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
                          style="width: 45px; height: 50%"
                        />
                      </div>
                    </div>

                    <div
                      v-else-if="isResponseMessagesList"
                      style="position: relative; height: 400px"
                      class="d-flex flex-row justify-content-center align-items-end"
                    >
                      <p class="text-center">Сообщений пока нет</p>
                    </div>

                    <div
                      v-else
                      style="position: relative; height: 400px"
                      class="d-flex flex-row justify-content-center align-items-end"
                    >
                      <p class="text-center">Ошибка соединения</p>
                    </div>
                  </vue-custom-scrollbar>

                  <div
                    v-show="isResponseMessagesList"
                    class="text-muted d-flex justify-content-start align-items-center pt-3 mt-2"
                  >
                    <button class="btn text-muted bg-transparent mr-1 rounded">
                      <i class="fa fa-paperclip" style="font-size: 20px"></i>
                    </button>

                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="exampleFormControlInput2"
                      placeholder="Type message"
                      v-model.lazy="message"
                    />

                    <button
                      class="btn text-muted bg-transparent rounded"
                      @click="handlerClickSendMessage()"
                    >
                      <i
                        class="fa fa-paper-plane"
                        style="font-size: 20px; color: #0d6efd"
                      >
                      </i>
                    </button>
                    <a class="ms-3" href="#!"></a>
                  </div>
                </div>
              </div>

              <div v-else class="col-md-6 col-lg-7 col-xl-8">
                <div class="bg-chat-img"></div>
              </div>
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

      message: "",
    };
  },

  mounted() {
    this.getDialogsList();
  },

  unmounted() {
    this.finishWebSocket();
  },

  computed: {
    ...mapGetters({
      userList: "chat/userList",
      dialogsList: "chat/dialogsList",

      messagesList: "chat/messagesList",
      isLoadingMessagesList: "chat/isLoadingMessagesList",
      isResponseMessagesList: "chat/isResponseMessagesList",

      isWsConnected: "chat/isWsConnected",
    }),
  },

  methods: {
    ...mapActions({
      getUserList: "chat/getUserList",
      getDialogsList: "chat/getDialogsList",

      getMessagesList: "chat/getMessagesList",

      startWebSocketChat: "chat/startWebSocketChat",

      sendToWebSocket: "chat/sendToWebSocket",

      finishWebSocket: "chat/finishWebSocket",
    }),

    handlerClickSendMessage() {
      if (this.isWsConnected) {
        this.sendToWebSocket(this.message);

        this.message = "";
      }
    },

    handlerClickContacts() {
      this.isUserList = !this.isUserList;

      this.getUserList();
    },

    handlerClickUser(item) {
      this.isUserList = false;
      this.isOpenChat = true;

      this.getMessagesList(item.pk);

      this.startWebSocketChat();
    },

    handlerClickUserContact(item) {
      this.isUserList = false;
      this.isOpenChat = true;

      this.getMessagesList(item.pk);

      this.startWebSocketChat();
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

.bg-chat-img {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding-left: 15px;
}

.bg-chat-img:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.6;
  background-image: url("@/static/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
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
    width: 190px;
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
