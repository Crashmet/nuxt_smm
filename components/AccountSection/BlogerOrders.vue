<template>
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
</template>

<script>
export default {
  name: 'AdvertiserOrders',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

table {
  table-layout: fixed;
  margin-top: 1.6667rem;
  width: 1024px;
  border: 1px solid rgba(13, 13, 13, 0.59);
  border-collapse: collapse;
}

thead tr th {
  background: #f09e565e;
  border: 2px solid rgba(13, 13, 13, 0.2);
}

thead th {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1667rem;
}

thead th:nth-child(1) {
  width: 16%;
}

thead th:nth-child(2) {
  width: 19%;
}

thead th:nth-child(3) {
  width: 9%;
}

thead th:nth-child(4) {
  width: 8%;
}

thead th:nth-child(5) {
  width: 7.5%;
}

thead th:nth-child(6) {
  width: 9%;
}

thead th:nth-child(7) {
  width: 12%;
}

th,
td {
  height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  text-align: center;
  border: 2px solid rgba(13, 13, 13, 0.59);
}

@media (max-width: 480px) {
  table {
    width: 800px;
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
