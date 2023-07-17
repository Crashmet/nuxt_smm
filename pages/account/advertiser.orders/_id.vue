<template>
  <div class="order">
    <!-- исправить v-if на оратное значение (! - убрать) -->
    <template v-if="isResponseOk">
      <div class="order__header">
        <h4 class="mb-3">information about order</h4>

        <button
          class="header__btn_back btn btn-dark"
          @click="handlerClickBack()"
        >
          Вернуться
        </button>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="ID:"
          label-for="input-id"
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-input
            v-else
            class="col-sm-12"
            id="input-id"
            disabled
            v-model="id"
          ></b-form-input>
        </b-form-group>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Order name:"
          label-for="input-name"
          description="Update your order name."
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-input
            v-else
            class="col-sm-12"
            id="input-name"
            v-model="name"
          ></b-form-input>

          <template v-if="validatorName.length > 0">
            <p class="modal__validation">{{ validatorName }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-row sm="5" lg="4" class="mb-5">
          <b-col sm="3" lg="2">
            <label for="textarea-default">Order description:</label>
          </b-col>
          <b-col sm="5" lg="4" class="textarea__col">
            <b-skeleton
              v-if="isLoading"
              class="col-sm-12"
              type="input"
            ></b-skeleton>

            <b-form-textarea
              v-else
              class="col-sm-12"
              id="textarea-default"
              v-model="description"
            ></b-form-textarea>

            <template v-if="validatorDescription.length > 0">
              <p class="modal__validation">{{ validatorDescription }}</p>
            </template>
          </b-col>
        </b-row>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Price per subscriber:"
          label-for="input-price"
          description="Update price."
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-input
            v-else
            type="number"
            id="input-price"
            class="col-sm-12"
            v-model="budget_per_subscriber"
          ></b-form-input>

          <template v-if="validatorBadget.length > 0">
            <p class="modal__validation">{{ validatorBadget }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Date:"
          label-for="input-date"
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-input
            v-else
            type="date"
            id="input-date"
            class="col-sm-12"
            v-model="end_date"
          ></b-form-input>

          <template v-if="validatorDate.length > 0">
            <p class="modal__validation">{{ validatorDate }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Social network:"
          label-for="input-social"
          description="Update social network."
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-select
            v-else
            id="input-social"
            class="col-sm-12"
            v-model="social"
          >
            <b-form-select-option
              v-for="item in socials"
              :value="[item.id]"
              :key="item.id"
              >{{ item.selectName }}</b-form-select-option
            ></b-form-select
          >

          <template v-if="validatorSocial.length > 0">
            <p class="modal__validation">{{ validatorSocial }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Region:"
          label-for="input-region"
          description="Update region."
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-select
            v-else
            id="input-region"
            class="col-sm-12"
            v-model="region"
          >
            <b-form-select-option
              v-for="item in regions"
              :value="item.id"
              :key="item.id"
              >{{ item.name }}</b-form-select-option
            ></b-form-select
          >

          <template v-if="validatorRegion.length > 0">
            <p class="modal__validation">{{ validatorRegion }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Min number of subscribers:"
          label-for="input-min"
          description="Update number of subscribers."
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-input
            v-else
            type="number"
            id="input-min"
            class="col-sm-12"
            v-model="min_subscribers"
          ></b-form-input>

          <template v-if="validatorMinSubscribers.length > 0">
            <p class="modal__validation">{{ validatorMinSubscribers }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="3"
          label-cols-lg="2"
          content-cols-sm="5"
          content-cols-lg="4"
          label="Max number of subscribers:"
          label-for="input-max"
          description="Update number of subscribers."
        >
          <b-skeleton
            v-if="isLoading"
            class="col-sm-12"
            type="input"
          ></b-skeleton>

          <b-form-input
            v-else
            type="number"
            id="input-max"
            class="col-sm-12"
            v-model="max_subscribers"
          ></b-form-input>

          <template v-if="validatorMaxSubscribers.length > 0">
            <p class="modal__validation">{{ validatorMaxSubscribers }}</p>
          </template>
        </b-form-group>
      </div>

      <div>
        <b-row sm="5" lg="4" class="mb-5">
          <b-col sm="3" lg="2">
            <label for="form-img-multiple">Img:</label>
          </b-col>
          <b-col sm="5" lg="4" class="pl-2 pr-2">
            <input
              class="form-control"
              type="file"
              id="form-img-multiple"
              multiple
            />
          </b-col>
        </b-row>
      </div>

      <div>
        <b-row sm="5" lg="4" class="mb-5">
          <b-col sm="3" lg="2">
            <label for="form-video-multiple">Video:</label>
          </b-col>
          <b-col sm="5" lg="4" class="pl-2 pr-2">
            <input
              class="form-control"
              type="file"
              id="form-video-multiple"
              multiple
            />
          </b-col>
        </b-row>
      </div>

      <div>
        <b-row sm="5" lg="4" class="mb-5">
          <b-col sm="3" lg="2">
            <label for="form-music-multiple">Music:</label>
          </b-col>
          <b-col sm="5" lg="4" class="pl-2 pr-2">
            <input
              class="form-control"
              type="file"
              id="form-music-multiple"
              multiple
            />
          </b-col>
        </b-row>
      </div>

      <b-row class="pt-1 mt-4">
        <b-col cols="12" md="3" lg="2">
          <b-button
            class="btn btn-dark btn_delete rounded mb-3 px-4"
            type="button"
            @click.prevent="isDeleteOrder = true"
          >
            Удалить
          </b-button>
        </b-col>
        <b-col cols="12" md="4" lg="3">
          <b-button
            class="btn btn-dark btn_change rounded mb-3 px-4"
            type="button"
            @click.prevent="handlerUpdateOrder()"
          >
            Изменить заказ
          </b-button>
        </b-col>
        <b-col cols="12" md="4" lg="3">
          <nuxt-link
            to="select"
            class="btn btn-dark btn_select rounded px-4"
            type="button"
          >
            Статус заказа
          </nuxt-link>
        </b-col>
      </b-row>

      <b-modal v-model="isDeleteOrder" id="bv-modal-example" hide-footer>
        <template #modal-title> Предупреждение! </template>
        <div class="d-block text-center">
          <h4 class="modal__title">Вы действительно хотите удалить заказ?</h4>
        </div>
        <b-button
          class="mt-3 modal-btn"
          variant="outline-danger"
          block
          @click.prevent="isDeleteOrder = false"
          >Нет</b-button
        >
        <b-button
          class="mt-2 modal-btn"
          variant="outline-warning"
          block
          @click.prevent="deleteOrder(orderId)"
          >Удалить</b-button
        >
      </b-modal>
    </template>

    <template v-else> <h3 class="order__not-found">Ошибка!</h3></template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdvertiserIdOrder",

  data() {
    return {
      id: null,
      name: "",
      description: "",
      budget_per_subscriber: null,
      end_date: null,
      social: [],
      region: "",
      min_subscribers: null,
      max_subscribers: null,
      img: [],
      video: [],
      music: [],

      validatorName: "",
      validatorDescription: "",
      validatorBadget: "",
      validatorDate: "",
      validatorSocial: "",
      validatorRegion: "",
      validatorMinSubscribers: "",
      validatorMaxSubscribers: "",

      isDeleteOrder: false,
    };
  },

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  mounted() {
    this.getOrderList(this.orderId);
  },

  computed: {
    ...mapGetters({
      socials: "socials",
      regions: "regions",

      orderId: "advertiserSettingsOrderStore/orderId",
      orderList: "advertiserSettingsOrderStore/orderList",

      validatorResponse: "advertiserSettingsOrderStore/validatorResponse",

      isLoading: "advertiserSettingsOrderStore/isLoading",
      isResponseOk: "advertiserSettingsOrderStore/isResponseOk",
    }),
  },

  methods: {
    ...mapActions({
      setOrderId: "advertiserSettingsOrderStore/setOrderId",
      getOrderList: "advertiserSettingsOrderStore/getOrderList",
      deleteOrder: "advertiserSettingsOrderStore/deleteOrder",
      updateOrderList: "advertiserSettingsOrderStore/updateOrderList",
    }),

    handlerClickBack() {
      this.$router.go(-1);
    },

    handlerUpdateOrder() {
      const order = {
        id: this.id,
        name: this.name,
        description: this.description,
        budget_per_subscriber: this.budget_per_subscriber,
        end_date: this.end_date,
        social: this.social,
        region: this.region,
        min_subscribers: this.min_subscribers,
        max_subscribers: this.max_subscribers,
      };

      this.updateOrderList(order);
    },

    setOrderList() {
      this.id = this.orderList.id;
      this.name = this.orderList.name;
      this.description = this.orderList.description;
      this.budget_per_subscriber = this.orderList.budget_per_subscriber;
      this.end_date = this.orderList.end_date;
      this.social = this.orderList.social;
      this.region = this.orderList.region;
      this.min_subscribers = this.orderList.min_subscribers;
      this.max_subscribers = this.orderList.max_subscribers;
    },

    resetValidatorMassages() {
      this.validatorName = "";
      this.validatorDescription = "";
      this.validatorBadget = "";
      this.validatorDate = "";
      this.validatorSocial = "";
      this.validatorRegion = "";
      this.validatorMinSubscribers = "";
      this.validatorMaxSubscribers = "";
    },

    addValidatorMassages() {
      for (let el of Object.entries(this.validatorResponse)) {
        let massage = "";

        if (Array.isArray(el[1])) {
          massage = el[1].reduce((acc, el) => acc + " " + el);
        } else {
          massage = el[1];
        }

        if (el[0] === "name") {
          this.validatorName = massage;
        } else if (el[0] === "description") {
          this.validatorDescription = massage;
        } else if (el[0] === "budget_per_subscriber") {
          this.validatorBadget = massage;
        } else if (el[0] === "end_date") {
          this.validatorDate = massage;
        } else if (el[0] === "social") {
          this.validatorSocial = massage;
        } else if (el[0] === "region") {
          this.validatorRegion = massage;
        } else if (el[0] === "min_subscribers") {
          this.validatorMinSubscribers = massage;
        } else if (el[0] === "max_subscribers") {
          this.validatorMaxSubscribers = massage;
        }
      }
    },
  },

  watch: {
    validatorResponse() {
      this.resetValidatorMassages();
      this.addValidatorMassages();
    },

    orderList() {
      this.setOrderList();
    },
  },
};
</script>

<style scoped>
.order__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.2222rem;
  max-width: 33.3333rem;
}

.textarea__col {
  padding-left: 7.5px;
  padding-right: 5px;
}

.btn_change:hover,
.btn_change:active {
  background: var(--bs-secondary);
}

.btn_delete:hover,
.btn_delete:active {
  background: var(--bs-danger);
}

.btn_select:hover,
.btn_select:active {
  background: var(--bs-info);
}

/* *** VALIDATION *** */

.modal__validation {
  font-size: 0.8889rem;
  margin-bottom: 10px;
  color: var(--bs-orange);
  text-align: center;
}
</style>
