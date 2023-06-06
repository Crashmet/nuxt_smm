<template>
  <div class="select">
    <advertiser-orders-menu />

    <div class="select__table_row">
      <div class="select__table_left">
        <table class="table-left">
          <thead class="table-left__head">
            <tr>
              <th class="left-head__cell" scope="col">выбрать всех</th>
            </tr>
          </thead>

          <tbody class="table-left__body">
            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>

            <tr>
              <th class="left-body__cell left-body__cell_active" scope="row">
                <input class="left-body__check" type="checkbox" checked />
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="select__table_right">
        <table class="table-right">
          <thead>
            <tr>
              <th scope="col">Соцсеть</th>
              <th scope="col">Блогер</th>
              <th scope="col">Тематика</th>
              <th scope="col">Подписчики</th>
              <th scope="col">Кол-во постов</th>
              <th scope="col">Кол-во лайков</th>
              <th scope="col">Преобладающая эмоция</th>
              <th scope="col">Цена за пост, руб</th>
              <th scope="col">Цена за подписчика, руб</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tiktok</th>
              <td>Аня 1</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>радость (30%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Instagram</th>
              <td>Аня 2</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>грусть (20%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Tiktok</th>
              <td>Аня 3</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>радость (30%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Instagram</th>
              <td>Аня 4</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>грусть (20%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Tiktok</th>
              <td>Аня 5</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>радость (30%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Instagram</th>
              <td>Аня 6</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>грусть (20%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Tiktok</th>
              <td>Аня 7</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>радость (30%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Instagram</th>
              <td>Аня 8</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>грусть (20%)</td>
              <td>100</td>
              <td>1</td>
            </tr>

            <tr>
              <th scope="row">Tiktok</th>
              <td>Аня 9</td>
              <td>еда</td>
              <td>100</td>
              <td>200</td>
              <td>200</td>
              <td>радость (30%)</td>
              <td>100</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <ul class="table-right__footer">
          <li class="right-footer__sum">
            <label class="sum__label" for="input-sum">Сумма заказа</label>

            <input
              class="sum__input"
              type="text"
              id="input-sum"
              disable
              value="40 000 руб."
            />
          </li>

          <li class="right-footer__button">
            <button class="footer__button">Заказать</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AdvertiserOrdersMenu from "@/components/AccountSection/AdvertiserOrdersMenu.vue";

export default {
  name: "AdvertiserOrdersSelect",

  components: {
    AdvertiserOrdersMenu,
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

.select__table_row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

table {
  table-layout: fixed;
  width: 1014px;
  border-collapse: collapse;
}

thead {
  height: 90px;
}

thead tr th {
  text-align: left;
  border: none;
}

thead th {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.0556rem;
}

thead th:nth-child(1) {
  width: 11.5%;
}

thead th:nth-child(2) {
  width: 10%;
}

thead th:nth-child(3) {
  width: 10.5%;
}

thead th:nth-child(4) {
  width: 11%;
}

thead th:nth-child(5) {
  width: 9%;
}

thead th:nth-child(6) {
  width: 9%;
}

thead th:nth-child(7) {
  width: 15.5%;
}

thead th:nth-child(8) {
  width: 12%;
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

.table-left {
  max-width: 5.5556rem;
  border: none;
}

.left-head__cell {
  line-height: 0.8889rem;
  text-align: center;
  border: none;
  background: none;
}

.left-body__cell {
  border: none;
  position: relative;
}

.left-body__check {
  opacity: 0;
}

.left-body__cell::after {
  content: "";
  position: absolute;
  width: 1.1111rem;
  height: 1.1111rem;
  left: 40%;
  top: 19%;
  border: 1px solid rgba(13, 13, 13, 0.59);
}

.left-body__cell_active::after {
  background-image: url("@/assets/image/check.svg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.table-right {
  margin-bottom: 1.1111rem;
}

.right-footer__sum {
  margin-bottom: 1.0556rem;
}

.sum__label {
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  margin-right: 0.8333rem;
}

.sum__input {
  width: 8.6667rem;
  height: 1.6667rem;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  text-align: center;
  color: #000000;
  background-color: transparent;
}

.footer__button {
  padding: 4px 12px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
}

.footer__button:hover,
.footer__button:active {
  background: rgba(255, 54, 0, 0.7);
}

@media (max-width: 480px) {
  thead {
    height: 44px;
  }

  table {
    width: 700px;
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

  .table-left {
    max-width: 55px;
    border: none;
  }

  .left-head__cell {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }

  .table-right {
    margin-right: 15px;
  }
}
</style>
