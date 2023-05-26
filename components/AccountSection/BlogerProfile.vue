<template>
  <div class="bloger-profile">
    <p class="bloger-profile__link">Изменить профиль</p>

    <div class="bloger-profile__body body">
      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">E-mail</span>
        </li>

        <li class="body__cell">
          <input type="email" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Имя</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Фамилия</span>
        </li>

        <li class="body__cell">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row body__row_long">
        <li class="body__cell body__cell-label">
          <span class="body__label">Instagram</span>
        </li>

        <li class="body__cell">
          <ul class="body__cell-list">
            <li class="body__cell-item">
              <input
                type="text"
                class="body__input cell-item__input"
                placeholder="nickname"
              />
            </li>

            <li class="body__cell-item">
              <input
                type="text"
                placeholder="цена за пост"
                class="cell-item__input_price"
              />
            </li>

            <li class="body__cell-item">
              <button class="cell-item__btn">
                Разрешить доступ к статистике
              </button>
            </li>

            <li class="body__cell-item body__cell-item__link">
              <a href="#" class="cell-item__link">
                Описать порядок работы api
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="body__row body__row_long">
        <li class="body__cell body__cell-label">
          <span class="body__label">Tiktok</span>
        </li>

        <li class="body__cell">
          <ul class="body__cell-list">
            <li class="body__cell-item">
              <input
                type="text"
                class="body__input cell-item__input"
                placeholder="nickname"
              />
            </li>

            <li class="body__cell-item">
              <input
                type="text"
                placeholder="цена за пост"
                class="cell-item__input_price"
              />
            </li>

            <li class="body__cell-item">
              <button class="cell-item__btn">
                Разрешить доступ к статистике
              </button>
            </li>

            <li class="body__cell-item body__cell-item__link">
              <a href="#" class="cell-item__link">
                Описать порядок работы api
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Сменить пароль</span>
        </li>

        <li class="body__cell">
          <input type="password" class="body__input" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogerProfile',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.bloger-profile__link {
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

.body__cell-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.body__cell-item:not(:last-child) {
  margin-right: 0.9rem;
}

.cell-item__input_price {
  max-width: 6.9444rem;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.61);
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  text-align: center;
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.cell-item__input_price:hover,
.cell-item__input_price:active {
  border: 1.5px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

.cell-item__btn {
  padding: 6px 8px;
  max-width: 350px;
  width: 100%;
  min-height: 1.6667rem;
  font-size: 0.7778rem;
  line-height: 0.8889rem;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
}

.body__cell-item__link {
  text-align: center;
  max-width: 216px;
}

.cell-item__link {
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
}

@media (max-width: 1175px) {
  .body__row_long {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
  }
  .body__row:not(:last-child) {
    margin-bottom: 15px;
  }

  .body__cell-item {
    margin-bottom: 9px;
  }
}

@media (max-width: 480px) {
  .bloger-profile__link {
    margin-bottom: 9px;
  }

  .body__row:not(:last-child) {
    margin-bottom: 13px;
  }

  .body__cell-item:not(:last-child) {
    margin-right: 6px;
  }

  .body__input,
  .cell-item__input_price {
    max-width: 88px;
    width: 100%;
    border-radius: 5px;
  }

  .cell-item__btn {
    border-radius: 5px;
    padding: 4px 4px;
    max-width: 104px;
    width: 100%;
  }

  .body__cell-item__link {
    max-width: 87px;
    width: 100%;
  }
}
</style>
