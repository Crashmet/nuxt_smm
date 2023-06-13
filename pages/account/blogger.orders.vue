<template>
  <div class="orders_container">
    <div :class="isOpenModalAddOrder ? 'blur' : ''">
      <button
        class="orders-change__btn"
        @click="changeAddOrderModalStatus(true)"
      >
        <span class="orders-change__text">Разместить новый заказ</span>
      </button>

      <table>
        <thead>
          <tr>
            <th scope="col">Заказчик</th>
            <th scope="col">Задание</th>
            <th scope="col">Соцсеть</th>
            <th scope="col">Регион</th>
            <th scope="col">Сумма</th>
            <th scope="col">Срок</th>
            <th scope="col">Статус</th>
            <th scope="col">Чат</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Компания 1</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 2</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 3</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 4</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 5</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 6</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 7</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 8</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 9</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>

          <tr>
            <th scope="row">Компания 10</th>
            <td>разместить фото и текст</td>
            <td>Instagram</td>
            <td>Москва</td>
            <td>100</td>
            <td>01.03.2022</td>
            <td>взять в работу</td>
            <td>обсудить с заказчиком</td>
          </tr>
        </tbody>
      </table>
    </div>

    <add-blogger-new-order-modal v-show="isOpenModalAddOrder" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addBloggerNewOrderModal from "~/components/modal/addBloggerNewOrderModal.vue";

export default {
  name: "BloggerOrders",

  components: { addBloggerNewOrderModal },

  computed: {
    ...mapGetters({
      isOpenModalAddOrder: "bloggerOrdersStore/isOpenModalAddOrder",
    }),
  },

  methods: {
    ...mapActions({
      changeAddOrderModalStatus: "bloggerOrdersStore/changeAddOrderModalStatus",
    }),
  },
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/
.orders_container {
  margin-top: 2.5rem;
  position: relative;
}

.orders-change__btn {
  margin-left: 0.5556rem;
  padding: 6px 10.0008px;
  background: #f09e56;
  border: 1.5px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.orders-change__btn:hover,
.orders-change__btn:active {
  border: 1.5px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.orders-change__text {
  font-size: 1rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.9);
}

.orders-change__btn:hover > .orders-change__text,
.orders-change__btn:active > .orders-change__text {
  color: #ff3600;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

/* **** table **** */

table {
  margin-top: 1.8rem;
  width: 56.9444rem;
  table-layout: fixed;
  border-collapse: collapse;
}

thead tr th {
  text-align: left;
  border: none;
}

thead th {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1667rem;
}

thead th:nth-child(1) {
  width: 12%;
}

thead th:nth-child(2) {
  width: 23%;
}

thead th:nth-child(3) {
  width: 10%;
}

thead th:nth-child(4) {
  width: 8%;
}

thead th:nth-child(5) {
  width: 7.5%;
}

thead th:nth-child(6) {
  width: 10%;
}

thead th:nth-child(7) {
  width: 15%;
}

th,
td:nth-child(5) {
  text-align: center;
}

tbody tr {
  border-bottom: 1px solid rgba(240, 158, 86, 0.58);
}

tbody tr:hover {
  background: #f09e565e;
}

th,
td {
  padding: 0.7778rem 0.8333rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  border: none;
}

@media (max-width: 480px) {
  table {
    width: 850px;
  }

  thead th {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
  }

  th,
  td {
    font-size: 12px;
    line-height: 14px;
  }
}

.blur {
  filter: blur(15px);
}
</style>
