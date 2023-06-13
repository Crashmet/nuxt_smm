<template>
  <div class="modal">
    <h3 class="modal__title">Новый заказ</h3>
    <button class="modal__btn-close" @click="changeAddOrderModalStatus(false)">
      <svg
        class="btn-close__svg"
        width="16"
        height="16"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.641389 2.92264C0.28716 2.56841 0.287159 1.99409 0.641388 1.63986C0.995617 1.28563 1.56993 1.28563 1.92416 1.63986L15.3584 15.0742C15.7127 15.4284 15.7127 16.0027 15.3584 16.3569C15.0042 16.7112 14.4299 16.7112 14.0757 16.3569L0.641389 2.92264Z"
          fill="#0d0d0d"
        ></path>
        <path
          d="M14.0774 1.64139C14.4316 1.28716 15.0059 1.28716 15.3601 1.64139C15.7144 1.99562 15.7144 2.56994 15.3601 2.92417L1.92586 16.3585C1.57163 16.7127 0.997315 16.7127 0.643086 16.3585C0.288857 16.0042 0.288857 15.4299 0.643086 15.0757L14.0774 1.64139Z"
          fill="#0d0d0d"
        ></path>
      </svg>
    </button>
    <ul class="modal__row">
      <li class="modal__cell modal__cell-label">
        <span class="modal__label">Заказчик</span>
      </li>

      <li class="modal__cell">
        <input type="text" class="modal__input" v-model="client" />
      </li>
    </ul>

    <ul class="modal__row">
      <li class="modal__cell modal__cell-label">
        <span class="modal__label">Задание</span>
      </li>

      <li class="modal__cell">
        <input type="text" class="modal__input" v-model="task" />
      </li>
    </ul>

    <ul class="modal__row">
      <li class="modal__cell modal__cell-label">
        <span class="modal__label">Соцсеть</span>
      </li>

      <li class="modal__cell">
        <input type="text" class="modal__input" v-model="network" />
      </li>
    </ul>

    <ul class="modal__row">
      <li class="modal__cell modal__cell-label">
        <span class="modal__label">Регион</span>
      </li>

      <li class="modal__cell">
        <input type="text" class="modal__input" v-model="region" />
      </li>
    </ul>

    <ul class="modal__row">
      <li class="modal__cell modal__cell-label">
        <span class="modal__label">Сумма</span>
      </li>

      <li class="modal__cell">
        <input type="text" class="modal__input" v-model="sum" />
      </li>
    </ul>

    <ul class="modal__row">
      <li class="modal__cell modal__cell-label">
        <span class="modal__label">Срок</span>
      </li>

      <li class="modal__cell">
        <input type="date" class="modal__input" v-model="date" />
      </li>
    </ul>

    <button class="cell-item__btn">Добавить</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BloggerNewOrderModal",

  data() {
    return {
      client: "",
      task: "",
      network: "",
      region: "",
      sum: "",
      date: "",
    };
  },

  computed: {},

  methods: {
    ...mapActions({
      changeAddOrderModalStatus: "bloggerOrdersStore/changeAddOrderModalStatus",
    }),
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 2%;
  padding: 1.25rem 3.125rem;
  max-width: 26.6806rem;
  width: 100%;
  background-color: #fff;
  border: 2px solid rgba(240, 158, 86, 0.58);
  border-radius: 20px;
}

.modal__title {
  font-size: 1.1111rem;
  margin-bottom: 1.1111rem;
  text-decoration-line: underline;
}

.modal__btn-close {
  position: absolute;
  right: 7%;
  top: 7%;
  background-color: transparent;
}

.btn-close__svg {
  width: 1rem;
  height: 1rem;
}

.modal__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.modal__row {
  margin-bottom: 0.8889rem;
}

.modal__cell-label {
  max-width: 8.3334rem;
  width: 100%;
}

.modal__input {
  padding-left: 0.6111rem;
  max-width: 350px;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.61);
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.modal__input:hover,
.modal__input:active {
  border: 1.5px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

/* ****** BTN SUBMIT ******  */

.cell-item__btn {
  margin-top: 1.2rem;
  padding: 5.9994px 7.9992px;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  color: #fff;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
}

@media (max-width: 480px) {
  .modal {
    background-color: #fff;
    padding: 25px 50px;
    border-radius: 20px;
  }
}
</style>
