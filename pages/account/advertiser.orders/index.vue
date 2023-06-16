<template>
  <div class="advertiser-oreders-home home">
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
            <th scope="col">Наименование</th>
            <th scope="col">Бюджет</th>
            <th scope="col">Дата</th>
            <th scope="col">Соцсеть</th>
            <th scope="col">Статус исполнения</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in advertiserOrdersList" :key="item.id">
            <th scope="row">{{ item.name }}</th>
            <td>{{ item.budget_per_subscriber }}</td>
            <td>{{ item.end_date }}</td>
            <td>{{ item.social[0].name }}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <add-advertiser-new-order-modal v-show="isOpenModalAddOrder" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addAdvertiserNewOrderModal from "~/components/modal/addAdvertiserNewOrderModal.vue";

export default {
  name: "AdvertiserOrdersHome",

  components: { addAdvertiserNewOrderModal },

  mounted() {
    this.getAdvertiserOrdersList();
  },

  computed: {
    ...mapGetters({
      isOpenModalAddOrder: "advertiserOrdersStore/isOpenModalAddOrder",
      advertiserOrdersList: "advertiserOrdersStore/advertiserOrdersList",
    }),
  },

  methods: {
    ...mapActions({
      changeAddOrderModalStatus:
        "advertiserOrdersStore/changeAddOrderModalStatus",
      getAdvertiserOrdersList: "advertiserOrdersStore/getAdvertiserOrdersList",
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
.home {
  margin-top: 2.5rem;
  position: relative;
  height: 50rem;
}

.orders-change__btn {
  margin-left: 0.5556rem;
  margin-bottom: 1.1111rem;
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
  table-layout: fixed;
  width: 888px;
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
  width: 22%;
}

thead th:nth-child(2) {
  width: 15%;
}

thead th:nth-child(3) {
  width: 19%;
}

thead th:nth-child(4) {
  width: 23%;
}

tbody th {
  text-align: left;
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
    width: 550px;
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
