<template>
  <section class="home">
    <div class="home__container container">
      <div class="home__logo">
        <div class="home-logo__title">
          <h1 class="home-logo__title_left">SMM</h1>
          <h1 class="home-logo__title_right">Planeta</h1>
        </div>
        <h3 class="home-logo__desc">решения и возможности</h3>
      </div>

      <ul class="home-check__list">
        <li class="home-check__item">Поиск автора</li>
        <li class="home-check__item">Открытие сообщества</li>
        <li class="home-check__item">Захват контента</li>
        <li class="home-check__item">Адаптация и подбор персонала</li>
        <li class="home-check__item">Управляй этим</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.home {
  margin-top: 8.3333rem;
  margin-bottom: 30px;
}

.home__container {
  position: relative;
  padding: 0 4.2778rem;
}

.home__container::before {
  content: '';
  position: absolute;
  z-index: -10;
  width: 785px;
  height: 765px;
  top: -152px;
  right: -195px;
  border-radius: 50%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(5.73%, rgba(255, 118, 0, 0.83)),
    color-stop(69.27%, rgba(255, 54, 0, 0.53))
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 118, 0, 0.83) 5.73%,
    rgba(255, 54, 0, 0.53) 69.27%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 118, 0, 0.83) 5.73%,
    rgba(255, 54, 0, 0.53) 69.27%
  );
  -webkit-filter: blur(50px);
  filter: blur(50px);
}

.home__container::after {
  content: '';
  position: absolute;
  z-index: -9;
  width: 522px;
  height: 612px;
  top: -67px;
  right: 18px;
  background-image: url('../../assets/image/hand-mobile.png');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: contain;
  -webkit-filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
}

.home__logo {
  margin-bottom: 4rem;
  cursor: default;
}

.home-logo__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.home-logo__title_left {
  font-weight: 400;
  font-size: 2.2222rem;
  line-height: 2.6111rem;
  color: #af2500;
  text-shadow: 4px 1px 6px #d3792b;
}

.home-logo__title_right {
  font-weight: 400;
  font-size: 2.2222rem;
  line-height: 2.6111rem;
  color: #af2500;
  text-shadow: 4px 1px 6px rgba(13, 13, 13, 0.5);
  -webkit-transition: text-shadow 0.4s ease-in;
  -o-transition: text-shadow 0.4s ease-in;
  transition: text-shadow 0.4s ease-in;
}

.home-logo__title:hover > .home-logo__title_right,
.home-logo__title:active > .home-logo__title_right {
  text-shadow: 4px 1px 6px #d3792b;
  -webkit-transition: text-shadow 0.2s ease-in;
  -o-transition: text-shadow 0.2s ease-in;
  transition: text-shadow 0.2s ease-in;
}

.home-logo__desc {
  font-weight: 400;
  font-size: 1.3333rem;
  line-height: 1.5556rem;
  color: #0d0d0d;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}

.home-check__list {
  margin-bottom: 4.7778rem;
}

.home-check__item {
  position: relative;
  padding-left: 3.2422222rem;
  min-height: 1.6667rem;
  font-size: 1rem;
  line-height: 1.6667rem;
  color: #0d0d0d;
}

.home-check__item:not(:last-child) {
  margin-bottom: 1.1111rem;
}

.home-check__item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 1.6667rem;
  height: 1.6667rem;
  background: url('../../assets/image/checkmark.svg') 0 0 / contain no-repeat;
}

@media (max-width: 960px) {
  .home__container::before {
    width: 600px;
    height: 600px;
    top: -125px;
    right: -155px;
  }

  .home__container::after {
    width: 400px;
    height: 500px;
    top: -17px;
    right: 0;
  }
}

@media (max-width: 780px) {
  .home {
    margin-top: 53px;
  }
  .home__container::before {
    width: 500px;
    height: 500px;
    top: -05px;
    right: -120px;
  }

  .home__container::after {
    width: 300px;
    height: 400px;
    top: 50px;
    right: -30px;
  }
}

@media (max-width: 600px) {
  .home__container::before {
    width: 450px;
    height: 450px;
    top: -05px;
    right: -120px;
  }

  .home__container::after {
    width: 250px;
    height: 350px;
    top: 50px;
    right: -30px;
  }

  .home-check__list {
    margin-bottom: 87px;
    max-width: 165px;
  }

  .home-check__item {
    padding-left: 24px;
    min-height: 15px;
    line-height: 15px;
  }

  .home-check__item:not(:last-child) {
    margin-bottom: 10px;
  }

  .home-check__item::before {
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 440px) {
  .home__container::before {
    width: 217px;
    height: 305px;
    right: -55px;
    top: -15px;
  }

  .home__container::after {
    width: 205px;
    height: 230px;
    right: -52px;
    top: 3px;
  }

  .home__logo {
    margin-bottom: 22px;
  }

  .home-logo__title_left {
    font-size: 20px;
    line-height: 23px;
  }

  .home-logo__title_right {
    font-size: 20px;
    line-height: 23px;
  }

  .home-logo__desc {
    font-size: 14px;
    line-height: 16px;
  }
}

@media (max-width: 320px) {
  .home__container {
    padding: 0;
  }
}
</style>
