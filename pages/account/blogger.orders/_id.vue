<template>
  <div class="order">
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
            disabled
            v-model="name"
          ></b-form-input>
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
              disabled
              v-model="description"
            ></b-form-textarea>
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
            disabled
            v-model="budget_per_subscriber"
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
            disabled
            v-model="end_date"
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
          label="Social network:"
          label-for="input-social"
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
            disabled
            v-model="social"
          >
            <b-form-select-option
              v-for="item in socials"
              :value="[item.id]"
              :key="item.id"
              >{{ item.selectName }}</b-form-select-option
            ></b-form-select
          >
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
            disabled
            v-model="region"
          >
            <b-form-select-option
              v-for="item in regions"
              :value="item.id"
              :key="item.id"
              >{{ item.name }}</b-form-select-option
            ></b-form-select
          >
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
            disabled
            v-model="min_subscribers"
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
          label="Max number of subscribers:"
          label-for="input-max"
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
            disabled
            v-model="max_subscribers"
          ></b-form-input>
        </b-form-group>
      </div>

      <b-row sm="4" class="pt-1 mt-4">
        <b-col sm="3" lg="2">
          <b-button
            class="btn btn-dark btn_back rounded mb-3"
            type="button"
            @click.prevent="setStatusOrder({ id: orderId, status: 'canceled' })"
          >
            Отклонить
          </b-button>
        </b-col>
        <b-col sm="3" lg="2"
          >>
          <b-button
            sm="5"
            lg="4"
            class="btn btn-dark btn_change rounded mb-3"
            type="button"
            @click.prevent="setStatusOrder({ id: orderId, status: 'accepted' })"
          >
            Принять
          </b-button>
        </b-col>
      </b-row>
    </template>

    <template v-else> <h3 class="order__not-found">Ошибка!</h3></template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BloggerIdOrder",

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
    };
  },

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  mounted() {
    this.getOrderList(this.orderId);
    this.setOrderList();
  },

  computed: {
    ...mapGetters({
      socials: "socials",
      regions: "regions",

      orderId: "bloggerSettingsOrderStore/orderId",
      orderList: "bloggerSettingsOrderStore/orderList",

      isLoading: "bloggerSettingsOrderStore/isLoading",
      isResponseOk: "bloggerSettingsOrderStore/isResponseOk",
    }),
  },

  methods: {
    ...mapActions({
      setOrderId: "bloggerSettingsOrderStore/setOrderId",
      getOrderList: "bloggerSettingsOrderStore/getOrderList",
      setStatusOrder: "bloggerSettingsOrderStore/setStatusOrder",
    }),

    handlerClickBack() {
      this.$router.go(-1);
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
  },

  watch: {
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

.btn_change:hover,
.btn_change:active {
  background: var(--bs-secondary);
}

.btn_back:hover,
.btn_back:active {
  background: var(--bs-warning);
}

.textarea__col {
  padding-left: 11.5px;
  padding-right: 5px;
}

/* *** VALIDATION *** */

.modal__validation {
  font-size: 0.8889rem;
  margin-bottom: 10px;
  color: var(--bs-orange);
  text-align: center;
}
</style>
