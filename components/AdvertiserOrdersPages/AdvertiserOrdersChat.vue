<template>
  <div class="chat">
    <ul class="chat-menu__row">
      <li class="chat-menu__cell">
        <span class="chat-menu__text">Компания №1</span>
      </li>
      <li class="chat-menu__cell">
        <span class="chat-menu__text">Название компании</span>
      </li>
      <li class="chat-menu__cell">
        <span class="chat-menu__text">Дата</span>
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
          <th scope="col">Преобладающая эмоция</th>
          <th scope="col">Цена за подписчика, руб</th>
          <th scope="col">Ссылка на пост</th>
          <th scope="col">Принять все</th>
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
          <td>1</td>
          <td>link 1</td>
          <td class="chat_check__cell chat_check__cell_active">
            <input class="chat_check" type="checkbox" checked />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="chat__footer">
      <h5 class="footer__title">Чат</h5>

      <textarea name="massage" class="footer__textarea">блогер клиент</textarea>

      <ul class="footer__row">
        <li class="footer__item">
          <label class="footer__input-label" for="file-input-1"
            >Прикрепить файл</label
          >
          <input type="file" class="footer__input-file" id="file-input-1" />
        </li>

        <li class="footer__item">
          <button class="footer__button">Отправить</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertiserOrderschat',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.chat-menu__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1.8889rem;
  margin-bottom: 1.1111rem;
  cursor: pointer;
}

.chat-menu__cell:first-child {
  max-width: 9.2222rem;
  width: 100%;
}

.chat-menu__cell:nth-child(2) {
  max-width: 10.7222rem;
  width: 100%;
}

.chat-menu__cell:hover > .chat-menu__text,
.chat-menu__cell:active > .chat-menu__text {
  font-size: 1.1111rem;
  line-height: 1.2778rem;
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.chat-menu__text_active {
  color: #ff3600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

table {
  table-layout: fixed;
  margin-bottom: 1.3334rem;
  width: 1031px;
  border: 1px solid rgba(13, 13, 13, 0.59);
  border-collapse: collapse;
}

thead tr th {
  background: #f09e565e;
  border: 2px solid rgba(13, 13, 13, 0.2);
}

thead th {
  font-weight: 500;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
}

thead th:nth-child(1) {
  width: 10%;
}

thead th:nth-child(2) {
  width: 9%;
}

thead th:nth-child(3) {
  width: 9%;
}

thead th:nth-child(4) {
  width: 10%;
}

thead th:nth-child(5) {
  width: 8%;
}

thead th:nth-child(6) {
  width: 8%;
}

thead th:nth-child(7) {
  width: 14%;
}

thead th:nth-child(8) {
  width: 11%;
}

thead th:nth-child(9) {
  width: 10%;
}

th,
td {
  height: 1.6667rem;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  text-align: center;
  border: 2px solid rgba(13, 13, 13, 0.59);
}

.chat_check__cell {
  position: relative;
}

.chat_check {
  opacity: 0;
}

.chat_check__cell::after {
  content: '';
  position: absolute;
  width: 1.1111rem;
  height: 1.1111rem;
  left: 40%;
  top: 19%;
  border: 1px solid rgba(13, 13, 13, 0.59);
}

.chat_check__cell_active::after {
  background-image: url('../../assets/image/check.svg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
}

.chat__footer {
  max-width: 392.0004px;
  margin-left: 2px;
}

.footer__title {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  color: #0d0d0d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.footer__textarea {
  margin-bottom: 10px;
  padding: 13px 25px;
  height: 11.3333rem;
  width: 100%;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
  background-color: transparent;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  color: rgba(13, 13, 13, 0.61);
}

.footer__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
}

.footer__input-label {
  margin-right: 1.3889rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  font-size: 0.8889rem;
  line-height: 1.0556rem;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  color: #000000;
}

.footer__input-file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
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

@media (max-width: 480px) {
  .chat {
    padding-right: 15px;
  }
  .chat-menu__row {
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
    width: 850px;
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

  .chat__footer {
    max-width: 279px;
    margin-left: 2px;
  }

  .footer__title {
    margin-bottom: 10px;
    font-size: 14.0004px;
    line-height: 16px;
    color: #0d0d0d;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .footer__textarea {
    margin-bottom: 7px;
    padding: 11px 13px;
    height: 82px;
    width: 100%;
  }

  .footer__button {
    padding: 2px 13px;
  }
}
</style>
