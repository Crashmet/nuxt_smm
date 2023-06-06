<template>
  <div class="advertiser-oreders-home home">
    <nuxt-link class="home__link" to="order">
      Разместить новый заказ
    </nuxt-link>

    <table>
      <thead>
        <tr>
          <th scope="col">Название компании</th>
          <th scope="col">Бюджет</th>
          <th scope="col">Дата</th>
          <th scope="col">Соцсеть</th>
          <th scope="col">Статус исполнения</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Заказ 1</th>
          <td>100</td>
          <td>01.12.2022</td>
          <td>Tiktok</td>
          <td>100%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 2</th>
          <td>200</td>
          <td>01.12.2022</td>
          <td>Instagram</td>
          <td>90%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 3</th>
          <td>300</td>
          <td>01.12.2022</td>
          <td>Tiktok+Instagram</td>
          <td>80%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 4</th>
          <td>400</td>
          <td>01.12.2022</td>
          <td>Tiktok</td>
          <td>70%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 5</th>
          <td>500</td>
          <td>01.12.2022</td>
          <td>Instagram</td>
          <td>60%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 6</th>
          <td>600</td>
          <td>01.12.2022</td>
          <td>Tiktok+Instagram</td>
          <td>50%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 7</th>
          <td>700</td>
          <td>01.12.2022</td>
          <td>Tiktok</td>
          <td>40%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 8</th>
          <td>800</td>
          <td>01.12.2022</td>
          <td>Tiktok+Instagram</td>
          <td>30%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 9</th>
          <td>900</td>
          <td>01.12.2022</td>
          <td>Instagram</td>
          <td>20%</td>
        </tr>

        <tr>
          <th scope="row">Заказ 10</th>
          <td>1000</td>
          <td>01.12.2022</td>
          <td>Tiktok</td>
          <td>10%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdvertiserOrdersHome",
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/
.home__link {
  display: block;
  max-width: 7.7778rem;
  font-size: 1rem;
  line-height: 1.1667rem;
  text-decoration-line: underline;
  margin-bottom: 1.6667rem;
}

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
</style>
