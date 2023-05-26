<template>
  <section class="admin">
    <div class="admin__container container">
      <div class="admin__main">
        <h5 class="admin__title">Статистика</h5>
        <table>
          <thead>
            <tr>
              <th scope="col">Рекламодатели</th>
              <th scope="col">Блогеры</th>
              <th scope="col">Финансы</th>
              <th scope="col">Чат</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdvertiserOrdersHome',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.admin {
  margin-top: 4.1111rem;
  margin-bottom: 5.5556rem;
}

.admin__container {
  padding: 0 48.9996px;
}

.admin__main {
  overflow-x: auto;
  max-width: 1102px;
  width: 100%;
  padding: 30.9996px 2.1111rem;
  background: rgba(255, 119, 0, 0.15);
  -webkit-box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.admin__title {
  margin-bottom: 1.5556rem;
  font-weight: 700;
  color: #0d0d0d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

table {
  table-layout: fixed;
  width: 33.6667rem;
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
  width: 31%;
}

thead th:nth-child(2) {
  width: 25.5%;
}

thead th:nth-child(3) {
  width: 18%;
}

th,
td {
  height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  text-align: center;
  border: 2px solid rgba(13, 13, 13, 0.59);
}

@media (max-width: 720px) {
  table {
    width: 27.7778rem;
  }
}

@media (max-width: 640px) {
  table {
    width: 23.5rem;
  }
}

@media (max-width: 480px) {
  .admin {
    margin-bottom: 60px;
  }

  .admin__main {
    padding: 27px 0px 15px 10px;
  }

  .admin__container {
    padding: 0;
  }

  table {
    width: 300px;
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

@media (max-width: 320px) {
}
</style>
