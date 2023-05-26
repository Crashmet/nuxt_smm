<template>
  <footer class="footer">
    <div class="container footer__container">
      <ul class="footer__list">
        <li class="foooter__item">
          <ul class="footer-info footer-info__list">
            <li class="footer-info__item footer-info__item_logo">
              <router-link class="footer-info__logo" to="/">
                <h2 class="footer-info-logo__title_left">SMM</h2>
                <h2 class="footer-info-logo__title_right">
                  Planeta
                </h2></router-link
              >
              <p class="footer-info-logo__desc">более 50000 блогеров</p>
            </li>

            <li class="footer-info__item">
              <a href="" class="footer-info__desc">Информация</a>
            </li>

            <li class="footer-info__item">
              <a href="" class="footer-info__desc">Данные организации</a>
            </li>

            <li class="footer-info__item">
              <a href="" class="footer-info__desc">Данные об оплате</a>
            </li>

            <li class="footer-info__item">
              <a href="" class="footer-info__desc">Условия использования</a>
            </li>

            <li class="footer-info__item">
              <a href="" class="footer-info__desc"
                >Политика обработки персональных данных</a
              >
            </li>

            <li class="footer-info__item">
              <a href="" class="footer-info__desc"
                >Оферта о заключении оказания услуг</a
              >
            </li>
          </ul>
        </li>

        <li class="foooter__item">
          <div class="footer-contacts">
            <h4 class="footer-contacts__title">Связь с нами</h4>

            <a
              target="_blank"
              href="https://yandex.ru/maps/213/moscow/house/aviamotornaya_ulitsa_59/Z04YcQVhQUAPQFtvfXt1cH5lYw==/?ll=37.721857%2C55.741267&z=16"
              class="footer-contacts__adress footer-contacts__link"
            >
              Адрес: ул. Авиамоторная, д.59, помещение 21.2, Москва, Россия
            </a>

            <a href="tel:+74956468335" class="footer-contacts__link"
              >Телефон:+7 495 646 83 35</a
            >

            <a href="mailto:info@smmplaneta.ru" class="footer-contacts__link"
              >Email:info@smmplaneta.ru</a
            >
          </div>
        </li>

        <li class="foooter__item">
          <div class="footer-subscribe">
            <h3 class="footer-subscribe__title">Подписка</h3>
            <div class="footer-subscribe__label">
              Получайте специальные предложения и новости сервиса
            </div>
            <form action="#" autocomplete="" class="footer-subscribe__form">
              <input
                type="email"
                name="email"
                placeholder="mail@example.com"
                class="footer-subscribe__input"
              />
              <button class="footer-subscribe__btn">
                <span class="footer-subscribe__btn-arrow"></span>
              </button>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.footer {
  margin-top: 2.7778rem;
}

.footer__container {
  padding: 0 2.5556rem;
}

.footer__list {
  background-color: #4c4c4c4b;
  padding: 2.2222rem 2.1111rem;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.footer-info {
  max-width: 15rem;
  width: 100%;
  margin-right: 12rem;
}

.footer-info__item:not(:last-child) {
  margin-bottom: 0.5rem;
}

.footer-info__item:first-child {
  margin-bottom: 1.1111rem;
}

.footer-info__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer-info-logo__title_left {
  font-size: 1.4em;
  line-height: 1.4rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}
.footer-info-logo__title_right {
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
  -webkit-transition: text-shadow 0.3s ease-in;
  -o-transition: text-shadow 0.3s ease-in;
  transition: text-shadow 0.3s ease-in;
}

.footer-info__logo:hover > .footer-info-logo__title_right,
.footer-info__logo:active > .footer-info-logo__title_right {
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.footer-info-logo__desc {
  padding-top: 0.1111rem;
  font-weight: 500;
  font-size: 0.8rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.footer-info__desc {
  font-size: 0.8889rem;
  color: #0d0d0d;
  -webkit-transition: color 0.3s ease-in;
  -o-transition: color 0.3s ease-in;
  transition: color 0.3s ease-in;
}

.footer-info__desc:hover,
.footer-info__desc:active {
  color: #ff3600;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.footer-contacts {
  margin-top: 1.3rem;
  max-width: 20rem;
  margin-right: 2.7778rem;
}

.footer-contacts__title {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.footer-contacts__link {
  display: inline-block;
  margin-bottom: 9px;
  font-size: 0.8889rem;
  color: #0d0d0d;
  -webkit-transition: color 0.3s ease-in;
  -o-transition: color 0.3s ease-in;
  transition: color 0.3s ease-in;
}

.footer-contacts__link:hover,
.footer-contacts__link:active {
  color: #ff3600;
  -webkit-transition: color 0.2s ease-in;
  -o-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;
}

.footer-contacts__adress {
  margin-bottom: 1.4445rem;
  font-size: 0.8889rem;
}

.footer-subscribe {
  margin-top: 1.3rem;
  max-width: 20rem;
}
.footer-subscribe__title {
  font-weight: 500;
  font-size: 1rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
}

.footer-subscribe__label {
  font-size: 0.8889rem;
  color: #0d0d0d;
  margin-bottom: 1.7778rem;
}

.footer-subscribe__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  border-radius: 16px;
  background: #ffffff;
  -webkit-filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  filter: drop-shadow(5px 5px 7px rgba(255, 54, 0, 0.43));
  -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.25);
}
.footer-subscribe__input {
  padding-left: 0.6667rem;
  width: 100%;
  height: 2.2rem;
  border: none;
  border-radius: 16.0002px;
  background: #ffffff;
  font-size: 0.8889rem;
  line-height: 1.1667rem;
}

.footer-subscribe__btn {
  right: 0;
  bottom: 0;
  padding: 10.0008px 1.6667rem 10.0008px;
  background: rgba(255, 54, 0, 0.8);
  border-radius: 16.0002px;
  -webkit-transition: background 0.2s ease-in;
  -o-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
  font-weight: 700;
  font-size: 0.8889rem;
  line-height: 1.1667rem;
  text-align: center;
  color: #ffffff;
}

.footer-subscribe__btn:hover,
.footer-subscribe__btn:active {
  background: rgba(255, 54, 0, 0.91);
}

.footer-subscribe__btn-arrow {
  display: inline-block;
  width: 0.6667rem;
  height: 0.6667rem;
  border-top: 0.2222rem solid #ffffff;
  border-right: 0.2222rem solid #ffffff;
  transform: rotate(45deg);
}

@media (max-width: 1000px) {
  .footer-info {
    margin-right: 10rem;
  }
}

@media (max-width: 888px) {
  .footer-subscribe {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer {
    margin-top: 23px;
    margin-bottom: 23px;
  }

  .footer__container {
    padding: 0 20px;
  }

  .footer-info {
    max-width: 10rem;
    width: 100%;
    margin-right: 6rem;
  }
}

@media (max-width: 320px) {
  .footer__container {
    padding: 0;
  }

  .footer-info {
    margin-right: 3rem;
  }
}
</style>
