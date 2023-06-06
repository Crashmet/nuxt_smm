<template>
  <div class="bloger-chat">
    <h5 class="chat__title">Чат</h5>

    <textarea name="massage" class="chat__textarea">блогер клиент</textarea>

    <ul class="chat__row">
      <li class="chat__item">
        <label class="chat__input-label" for="file-input-1"
          >Прикрепить файл</label
        >
        <input type="file" class="chat__input-file" id="file-input-1" />
      </li>

      <li class="chat__item">
        <button class="chat__button">Отправить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogerChat",
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.bloger-chat {
  margin-top: 2.5555rem;
  max-width: 392.0004px;
  margin-left: 2px;
}

.chat__title {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  color: #0d0d0d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.chat__textarea {
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

.chat__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: flex-end;
  -ms-flex-pack: flex-end;
  justify-content: flex-end;
}

.chat__input-label {
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

.chat__input-file {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.chat__button {
  padding: 4px 16px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1667rem;
  background: #f09e56;
  border: 1px solid rgba(240, 158, 86, 0.58);
  border-radius: 10px;
}

.chat__button:hover,
.chat__button:active {
  background: rgba(255, 54, 0, 0.7);
}

@media (max-width: 480px) {
  .chat__chat {
    max-width: 279px;
    margin-left: 2px;
  }

  .chat__title {
    margin-bottom: 10px;
    font-size: 14.0004px;
    line-height: 16px;
    color: #0d0d0d;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .chat__textarea {
    margin-bottom: 7px;
    padding: 11px 13px;
    height: 82px;
    width: 100%;
  }

  .chat__button {
    padding: 2px 13px;
  }
}
</style>
