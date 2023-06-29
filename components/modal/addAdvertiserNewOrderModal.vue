<template>
  <div class="modal__section">
    <h3 class="modal__title">Разместить новый заказ</h3>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Название заказа</span>
        </li>

        <li class="modal__cell">
          <input type="text" class="modal__input" v-model="name" />
        </li>
      </ul>

      <template v-if="validatorName.length > 0">
        <p class="modal__validation">{{ validatorName }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row modal__row_textarea">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Описание заказа</span>
        </li>

        <li class="modal__cell">
          <textarea
            name="massage"
            class="modal__input modal__input_textarea"
            v-model="description"
          >
          </textarea>
        </li>
      </ul>

      <template v-if="validatorDescription.length > 0">
        <p class="modal__validation">{{ validatorDescription }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Цена за одного подписчика</span>
        </li>

        <li class="modal__cell">
          <input
            type="number"
            class="modal__input"
            v-model="budget_per_subscriber"
          />
        </li>
      </ul>

      <template v-if="validatorBadget.length > 0">
        <p class="modal__validation">{{ validatorBadget }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Дата</span>
        </li>

        <li class="modal__cell">
          <input type="date" class="modal__input" v-model="end_date" />
        </li>
      </ul>

      <template v-if="validatorDate.length > 0">
        <p class="modal__validation">{{ validatorDate }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Соцсеть</span>
        </li>

        <li class="modal__cell">
          <select class="modal__input" v-model="social">
            <option
              v-for="item in socials"
              v-bind:value="[item.id]"
              :key="item.id"
            >
              {{ item.selectName }}
            </option>
          </select>
        </li>
      </ul>

      <template v-if="validatorSocial.length > 0">
        <p class="modal__validation">{{ validatorSocial }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Регион</span>
        </li>

        <li class="modal__cell">
          <select class="modal__input" v-model="region">
            <option
              v-for="item in regions"
              v-bind:value="item.id"
              :key="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </li>
      </ul>

      <template v-if="validatorRegion.length > 0">
        <p class="modal__validation">{{ validatorRegion }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Минимальное число подписчиков</span>
        </li>

        <li class="modal__cell">
          <input type="number" class="modal__input" v-model="min_subscribers" />
        </li>
      </ul>

      <template v-if="validatorMinSubscribers.length > 0">
        <p class="modal__validation">{{ validatorMinSubscribers }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label">Максимальное число подписчиков</span>
        </li>

        <li class="modal__cell">
          <input type="number" class="modal__input" v-model="max_subscribers" />
        </li>
      </ul>

      <template v-if="validatorMaxSubscribers.length > 0">
        <p class="modal__validation">{{ validatorMaxSubscribers }}</p>
      </template>
    </div>

    <div class="modal__block">
      <ul class="modal__row">
        <li class="modal__cell modal__cell-label">
          <span class="modal__label"
            ><button
              class="cell-item__btn cell-item__btn_back"
              @click="changeAddOrderModalStatus(false)"
            >
              Назад
            </button></span
          >
        </li>

        <li class="modal__cell">
          <button class="cell-item__btn" @click.prevent="handlerAddNewOrder()">
            Разместить заказ
          </button>
        </li>
      </ul>
    </div>
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
  max-width: 36.1111rem;
  width: 100%;
  background-color: transparent;
  border-radius: 20px;
}

.modal__title {
  font-size: 1.1111rem;
  margin-bottom: 1.1111rem;
  text-decoration-line: underline;
}

.modal__btn-close {
  position: absolute;
  right: 5%;
  top: 4%;
  background-color: transparent;
}

.btn-close__svg {
  width: 1rem;
  height: 1rem;
}

.modal__block {
  margin-bottom: 0.8889rem;
}

.modal__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.modal__cell {
  width: 100%;
}

.modal__cell-label {
  margin-right: 1.1111rem;
  width: 60%;
}

.modal__label {
  font-size: 0.875rem;
}

.modal__input {
  padding-left: 0.6111rem;
  max-width: 16.6667rem;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: var(--bs-gray-600);
  border: 1px solid var(--bs-gray-600);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.modal__input:hover,
.modal__input:active {
  -webkit-transition: outline 0.1s ease;
  -o-transition: outline 0.1s ease;
  transition: outline 0.1s ease;
  outline: 1.5px solid var(--bs-secondary);
}

.modal__row_textarea {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
}

.modal__input_textarea {
  max-width: 16.6667rem;
  padding: 5px 10px;
  height: 8.0555rem;
}

/* ****** BTN SUBMIT ******  */

.cell-item__btn {
  margin-top: 1.2rem;
  padding: 5.9994px 7.9992px;
  max-width: 16.6667rem;
  width: 100%;
  min-height: 1.6667rem;
  font-weight: 600;
  color: #fff;
  background: var(--bs-gray-600);
  border-radius: 10px;
}

.cell-item__btn:hover,
.cell-item__btn:active {
  background: var(--bs-secondary);
}

.cell-item__btn_back:hover,
.cell-item__btn_back:active {
  background: var(--bs-warning);
}

/* *** VALIDATION *** */

.modal__validation {
  font-size: 0.8889rem;
  margin-left: 1.1111rem;
  margin-top: 0.3889rem;
  color: var(--bs-orange);
}

@media (max-width: 480px) {
  .modal {
    padding: 25px 50px;
    border-radius: 20px;
  }
}
</style>
