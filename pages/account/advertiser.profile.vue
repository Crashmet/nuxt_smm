<template>
  <div class="advertiser-finance">
    <p class="advertiser-finance__link">Изменить профиль</p>

    <div class="advertiser-finance__body body">
      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Рекламодатель</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">ИНН</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Адрес</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Телефон</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">E-mail</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Website</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Сменить пароль</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Рекламодатель</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertiserFinance',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.advertiser-finance__link {
  margin-bottom: 1.6667rem;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.body__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.body__row:not(:last-child) {
  margin-bottom: 0.8889rem;
}

.body__cell-label {
  max-width: 9.2222rem;
  width: 100%;
}

.body__input {
  padding-left: 0.6111rem;
  max-width: 9.8333rem;
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

.body__input:hover,
.body__input:active {
  border: 1.5px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

@media (max-width: 1175px) {
  .body__row:not(:last-child) {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .bloger-profile__link {
    margin-bottom: 9px;
  }

  .body__row:not(:last-child) {
    margin-bottom: 13px;
  }

  .body__input {
    max-width: 88px;
    width: 100%;
    border-radius: 5px;
  }
}
</style>
