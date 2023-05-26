<template>
  <div class="inspection">
    <ul class="inspection-menu__row">
      <li class="inspection-menu__cell">
        <span class="inspection-menu__text inspection-menu__text_active"
          >Компания №1</span
        >
      </li>
      <li class="inspection-menu__cell">
        <span class="inspection-menu__text">Название компании</span>
      </li>
      <li class="inspection-menu__cell">
        <span class="inspection-menu__text">Дата</span>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th scope="col">Соцсеть</th>
          <th scope="col">Блогер</th>
          <th scope="col">Тематика</th>
          <th scope="col">Подписчики</th>
          <th scope="col">Кол-во постов</th>
          <th scope="col">Кол-во лайков</th>
          <th scope="col">Бюджет</th>
          <th scope="col">Преобладающая эмоция</th>
          <th scope="col">Цена за подписчика, руб</th>
          <th scope="col">Ссылка на пост</th>
          <th scope="col">Принять все</th>
          <th scope="col">Чат с блогером</th>
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
          <td>200</td>
          <td>радость (30%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Instagram</th>
          <td>Аня 2</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>грусть (20%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Tiktok</th>
          <td>Аня 3</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>радость (30%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Instagram</th>
          <td>Аня 4</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>грусть (20%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Tiktok</th>
          <td>Аня 5</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>радость (30%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Instagram</th>
          <td>Аня 6</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>грусть (20%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Tiktok</th>
          <td>Аня 7</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>радость (30%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Instagram</th>
          <td>Аня 8</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>грусть (20%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>

        <tr>
          <th scope="row">Tiktok</th>
          <td>Аня 9</td>
          <td>еда</td>
          <td>100</td>
          <td>200</td>
          <td>200</td>
          <td>200</td>
          <td>радость (30%)</td>
          <td>1</td>
          <td>link 1</td>
          <td>кнопка</td>
          <td>
            <router-link class="table__chat-btn" to="chat"> чат </router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="inspection__footer">
      <ul class="footer__list">
        <li class="footer__sum-text">Итого</li>

        <li class="footer__sum-value">
          <input class="footer-sum__input" type="text" disable value="Сумма" />
        </li>
      </ul>
      <button class="footer__button">Принять</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertiserOrdersChat',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.inspection-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1.8889rem;
  margin-bottom: 1.1111rem;
  cursor: pointer;
}

.inspection-menu__cell:first-child {
  max-width: 9.2222rem;
  width: 100%;
}

.inspection-menu__cell:nth-child(2) {
  max-width: 10.7222rem;
  width: 100%;
}

.inspection-menu__cell:hover > .inspection-menu__text,
.inspection-menu__cell:active > .inspection-menu__text {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.inspection-menu__text_active {
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

table {
  table-layout: fixed;
  margin-bottom: 10px;
  width: 1041px;
  border: 1px solid rgba(13, 13, 13, 0.59);
  border-collapse: collapse;
}

thead tr th {
  background: #f09e565e;
  border: 2px solid rgba(13, 13, 13, 0.2);
}

thead th {
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1rem;
}

thead th:nth-child(1) {
  width: 9%;
}

thead th:nth-child(2) {
  width: 6%;
}

thead th:nth-child(3) {
  width: 9%;
}

thead th:nth-child(4) {
  width: 9%;
}

thead th:nth-child(5) {
  width: 7%;
}

thead th:nth-child(6) {
  width: 8%;
}

thead th:nth-child(7) {
  width: 7%;
}

thead th:nth-child(8) {
  width: 13%;
}

thead th:nth-child(9) {
  width: 9%;
}

thead th:nth-child(10) {
  width: 10%;
}

thead th:nth-child(11) {
  width: 6%;
}

th,
td {
  height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  text-align: center;
  border: 2px solid rgba(13, 13, 13, 0.59);
}

.inspection__footer {
  margin-left: 2px;
}

.footer__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 1.75rem;
}

.footer__sum-text {
  max-width: 500px;
  width: 100%;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3125rem;
}

.footer-sum__input {
  max-width: 4.875rem;
  padding: 0.25rem 0.5625rem;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.125rem;
  text-align: center;
  background-color: transparent;
}

.footer__button {
  padding: 4px 16px;
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

.table__chat-btn {
  font-size: 1rem;
  line-height: 1.1875rem;
  background-color: transparent;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

@media (max-width: 480px) {
  .inspection-menu__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 14px;
    margin-bottom: 9px;
  }

  thead {
    height: 44px;
  }

  table {
    width: 900px;
    margin-right: 25px;
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

  .left-head__cell {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }
}
</style>
