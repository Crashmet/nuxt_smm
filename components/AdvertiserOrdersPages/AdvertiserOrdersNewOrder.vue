<template>
  <div class="new-order">
    <router-link class="new-order__link" to="home"
      >Разместить новый заказ</router-link
    >

    <div class="new-order__body body">
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
        <li class="body__cell body__cell-label body-footer__label">
          <span class="body__label footer__label"></span>
        </li>

        <li class="body__cell body__cell-input body-footer__button">
          <button class="footer__button">Разместить заказ</button>
        </li>

        <li class="body__cell body-footer__link">
          <router-link to="select">
            <p class="footer__link">Разместить заказ</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertiserOrdersNewOrder',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.new-order__link {
  display: block;
  margin-bottom: 0.8333rem;
  max-width: 7.7778rem;
  font-size: 1rem;
  line-height: 1.1667rem;
  text-decoration-line: underline;
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
  margin-bottom: 16.0002px;
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

.body-footer__button {
  margin-right: 20px;
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

.footer__button:hover,
.footer__button:active {
  background: rgba(255, 54, 0, 0.8);
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
  .body-footer__label {
    width: 0;
  }
}

@media (max-width: 480px) {
  .new-order__link {
    margin-bottom: 18px;
  }

  .body__row:not(:last-child) {
    margin-bottom: 15px;
  }

  .body__input {
    max-width: 88px;
    width: 100%;
    border-radius: 5px;
  }

  .body__input_textarea {
    height: 90px;
  }

  .body-footer__button {
    max-width: 138px;
    margin-right: 26px;
  }

  .footer__button {
    background: rgba(255, 54, 0, 0.7);
    font-weight: 700;
  }
}
</style>
