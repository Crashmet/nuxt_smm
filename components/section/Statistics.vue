<template>
  <section class="statistics">
    <div class="statistics__container container">
      <ul class="statistics__list">
        <li class="statistics__item">
          <p class="statistics-item__top">Охват</p>
          <p class="statistics-item__bottom">81 358 879</p>
        </li>
        <li class="statistics__item">
          <p class="statistics-item__top">Блогеров</p>
          <p class="statistics-item__bottom">542</p>
        </li>
        <li class="statistics__item">
          <p class="statistics-item__top">Постов</p>
          <p class="statistics-item__bottom">7 236</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statistics',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.statistics {
  padding-bottom: 50px;
}

.statistics__container {
  padding: 0 4.4444rem;
}

.statistics__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.statistics__item {
  font-size: 1rem;
  line-height: 1.1667rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.statistics__item:not(:last-child) {
  margin-right: 3.8889rem;
}

.statistics-item__top {
  margin-bottom: 0.5rem;
}

@media (max-width: 640px) {
  .statistics__item:not(:last-child) {
    margin-right: 20px;
  }
}

@media (max-width: 320px) {
  .statistics__container {
    padding: 0;
  }
}
</style>
