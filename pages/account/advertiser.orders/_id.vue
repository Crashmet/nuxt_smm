<template>
  <div class="order">
    <div class="order__header">
      <h3 class="header__title">Заказ</h3>

      <button class="header__btn_back" @click="handlerClickBack()">
        Вернуться
      </button>
    </div>

    <div class="order__body body">
      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">№ заказа</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="number" class="body__input" disabled value="1" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Компания</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Регион</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="text" class="body__input" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Срок исполнения</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="text" class="body__input" disabled value="01.03.2022" />
        </li>
      </ul>

      <ul class="body__row body__row_textarea">
        <li class="body__cell body__cell-label body__cell-label_top">
          <span class="body__label">Задание</span>
        </li>

        <li class="body__cell body__cell-input">
          <textarea name="massage" class="body__input body__input_textarea">
          </textarea>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Фото</span>
        </li>
        <li class="body__cell body__cell-input">
          <label class="body__input body__input-label" for="file-input-1"
            >загрузить</label
          >
          <input type="file" class="body__input-file" id="file-input-1" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Видео</span>
        </li>

        <li class="body__cell body__cell-input">
          <label class="body__input body__input-label" for="file-input-2"
            >загрузить</label
          >
          <input type="file" class="body__input-file" id="file-input-2" />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Соцсети</span>
        </li>

        <li class="body__cell body__cell-input">
          <button class="body__input">выбрать</button>
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Сумма, руб.</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="text" class="body__input" value="20 000" disabled />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Кол-во блогеров</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="text" class="body__input" value="10" disabled />
        </li>
      </ul>

      <ul class="body__row">
        <li class="body__cell body__cell-label">
          <span class="body__label">Охват</span>
        </li>

        <li class="body__cell body__cell-input">
          <input type="text" class="body__input" value="500" disabled />
        </li>
      </ul>

      <ul class="body__row body-footer">
        <li class="body__cell body__cell-label footer__cell">
          <!-- <div class="body__label footer__label"></div> -->
          <button class="footer__button footer__button_delete">
            Удалить заказ
          </button>
        </li>

        <li class="body__cell body__cell-input footer__cell">
          <button class="footer__button footer__button_add">
            Разместить заказ
          </button>
        </li>

        <li class="body__cell body-footer__link footer__cell">
          <nuxt-link to="select">
            <p class="footer__link">Выбрать блогеров</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvertiserIdOrder",

  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },

  methods: {
    handlerClickBack() {
      this.$router.go(-1);
    },
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

/* **** ORDER HEADER **** */

.order__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.2222rem;
  max-width: 33.3333rem;
}

.header__title {
  font-size: 1.2778rem;
  line-height: 1.1667rem;
  text-decoration-line: underline;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header__btn_back {
  padding: 0.2222rem 0.4444rem;
  border: 2px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  transition: border 0.3s ease;
}

.header__btn_back:hover,
.header__btn_back:active {
  color: #ff3600;
  border: 2px solid rgba(240, 158, 86, 0.94);
  -webkit-transition: border 0.3s ease;
  -o-transition: border 0.3s ease;
  transition: border 0.3s ease;
}

/* **** ORDER BODY **** */

.body__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.body__row:not(:last-child) {
  margin-bottom: 16.0002px;
}

.body__cell {
  margin-right: 1.1111rem;
}

.body__cell-input {
  max-width: 14.3333rem;
  width: 100%;
}

.body__cell-label {
  max-width: 9.2222rem;
  width: 100%;
}

.body__input {
  text-align: center;
  padding: 0 0.6111rem;
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

.body__row_textarea {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
}

.body__input_textarea {
  height: 8.0555rem;
}

.body__input-label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.body__input-file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

/* **** BODY FOOTER **** */

.body-footer {
  margin-top: 2.2223rem;
}
.footer__button {
  width: 100%;
  height: 1.6667rem;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1667rem;
}

.footer__button_delete:hover,
.footer__button_delete:active {
  background: rgba(255, 54, 0, 0.8);
}

.footer__button_add:hover,
.footer__button_add:active {
  background: rgba(61, 200, 36, 0.438);
}

.footer__link {
  font-size: 1rem;
  line-height: 1.1667rem;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 1175px) {
  .body__row:not(:last-child) {
    margin-bottom: 15px;
  }
}

@media (max-width: 770px) {
  .body-footer {
    flex-direction: column-reverse;
  }

  .footer__cell {
    margin-bottom: 0.5556rem;
  }
}

@media (max-width: 480px) {
  .order__link {
    margin-bottom: 18px;
  }

  .body__row:not(:last-child) {
    margin-bottom: 15px;
  }

  .body__input_textarea {
    height: 90px;
  }
}
</style>
