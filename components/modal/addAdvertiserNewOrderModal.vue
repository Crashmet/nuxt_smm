<template>
  <div class="modal__section container">
    <h4 class="mb-3">Place a new order</h4>

    <div>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="3"
        label-cols-lg="2"
        content-cols-sm="5"
        content-cols-lg="4"
        label="Order name:"
        label-for="input-name"
        description="Enter your order name."
      >
        <b-form-input
          class="col-3 col-sm-12"
          id="input-name"
          v-model="name"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorName.length > 0">
        <p class="modal__validation">{{ validatorName }}</p>
      </template>
    </div>

    <div>
      <b-row sm="5" lg="4" class="mb-5">
        <b-col sm="3" lg="2">
          <label for="textarea-default">Order description:</label>
        </b-col>
        <b-col sm="5" lg="4" class="pl-2 pr-2">
          <b-form-textarea
            class="col-3 col-sm-12"
            id="textarea-default"
            v-model="description"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <template v-if="validatorDescription.length > 0">
        <p class="modal__validation">{{ validatorDescription }}</p>
      </template>
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
        description="Enter price."
      >
        <b-form-input
          type="number"
          id="input-price"
          class="col-3 col-sm-12"
          v-model="budget_per_subscriber"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorBadget.length > 0">
        <p class="modal__validation">{{ validatorBadget }}</p>
      </template>
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
        <b-form-input
          type="date"
          id="input-date"
          class="col-3 col-sm-12"
          v-model="end_date"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorDate.length > 0">
        <p class="modal__validation">{{ validatorDate }}</p>
      </template>
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
        description="Enter social network."
      >
        <b-form-select
          id="input-social"
          class="col-3 col-sm-12"
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

      <template v-if="validatorSocial.length > 0">
        <p class="modal__validation">{{ validatorSocial }}</p>
      </template>
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
        description="Enter region."
      >
        <b-form-select
          id="input-region"
          class="col-3 col-sm-12"
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

      <template v-if="validatorRegion.length > 0">
        <p class="modal__validation">{{ validatorRegion }}</p>
      </template>
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
        description="Enter number of subscribers."
      >
        <b-form-input
          type="number"
          id="input-min"
          class="col-3 col-sm-12"
          v-model="min_subscribers"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorMinSubscribers.length > 0">
        <p class="modal__validation">{{ validatorMinSubscribers }}</p>
      </template>
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
        description="Enter number of subscribers."
      >
        <b-form-input
          type="number"
          id="input-max"
          class="col-3 col-sm-12"
          v-model="max_subscribers"
        ></b-form-input>
      </b-form-group>

      <template v-if="validatorMaxSubscribers.length > 0">
        <p class="modal__validation">{{ validatorMaxSubscribers }}</p>
      </template>
    </div>

    <b-button-group class="pt-1 mt-4">
      <b-button
        class="btn btn-dark mr-5 btn_back rounded"
        type="button"
        @click.prevent="changeAddOrderModalStatus(false)"
      >
        Назад
      </b-button>
      <b-button
        class="btn btn-dark btn_change rounded"
        type="button"
        @click.prevent="handlerAddNewOrder()"
      >
        Разместить заказ
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdvertiserNewOrderModal",

  data() {
    return {
      name: "",
      description: "",
      budget_per_subscriber: null,
      end_date: null,
      social: [],
      region: "",
      min_subscribers: null,
      max_subscribers: null,

      validatorName: "",
      validatorDescription: "",
      validatorBadget: "",
      validatorDate: "",
      validatorSocial: "",
      validatorRegion: "",
      validatorMinSubscribers: "",
      validatorMaxSubscribers: "",
    };
  },

  computed: {
    ...mapGetters({
      socials: "socials",
      regions: "regions",
      validatorResponse: "advertiserOrdersStore/validatorResponse",
      isOpenModalAddOrder: "advertiserOrdersStore/isOpenModalAddOrder",
    }),
  },

  methods: {
    ...mapActions({
      changeAddOrderModalStatus:
        "advertiserOrdersStore/changeAddOrderModalStatus",
      advertiserNewOrderCreate:
        "advertiserOrdersStore/advertiserNewOrderCreate",
    }),

    handlerAddNewOrder() {
      const order = {
        name: this.name,
        description: this.description,
        budget_per_subscriber: this.budget_per_subscriber,
        end_date: this.end_date,
        social: this.social,
        region: this.region,
        min_subscribers: this.min_subscribers,
        max_subscribers: this.max_subscribers,
      };

      this.advertiserNewOrderCreate(order);
    },

    resetForm() {
      this.name = "";
      this.description = "";
      this.budget_per_subscriber = null;
      this.end_date = null;
      this.social = [];
      this.region = "";
      this.min_subscribers = null;
      this.max_subscribers = null;
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

    isOpenModalAddOrder() {
      if (this.isOpenModalAddOrder === false) {
        this.resetForm();
      }
    },
  },
};
</script>

<style scoped>
.modal__section {
  position: absolute;
  top: 0%;
  /* width: 100%; */
  background-color: transparent;
  border-radius: 20px;
}

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
