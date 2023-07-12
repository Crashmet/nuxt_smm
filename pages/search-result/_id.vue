<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7">
          <div class="img-property-slide-wrap">
            <div class="img-property-slide">
              <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h2 class="heading">
            {{ bloggerData.social_network?.name }}: {{ bloggerData.nickname }}
          </h2>
          <p class="meta">Подписчики: {{ bloggerData.subscribers }}</p>
          <p class="text-black-50">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            laborum quo quos omnis sed magnam id, ducimus saepe, debitis error
            earum, iste dicta odio est sint dolorem magni animi tenetur.
          </p>
          <p class="text-black-50">
            Perferendis eligendi reprehenderit, assumenda molestias nisi eius
            iste reiciendis porro tenetur in, repudiandae amet libero.
            Doloremque, reprehenderit cupiditate error laudantium qui, esse quam
            debitis, eum cumque perferendis, illum harum expedita.
          </p>
          <p>
            Цена за пост:
            {{ bloggerData.price_for_post ? bloggerData.price_for_post : 0 }}
            руб.
          </p>
          <p>
            Цена за сторис:
            {{
              bloggerData.price_for_stories ? bloggerData.price_for_stories : 0
            }}
            руб.
          </p>
          <p>
            Цена за рилс:
            {{ bloggerData.price_for_reels ? bloggerData.price_for_reels : 0 }}
            руб.
          </p>
          <div class="row mt-4">
            <button class="col-4 btn btn-secondary">Выбрать</button>
            <button class="col-4 btn btn-warning" @click="handlerClickBack">
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SearchResult",

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  // async asyncData({ $axios, store }) {
  // console.log(process.client);

  //   const activePage = store.state.searchStore.activePage;

  //   await store.dispatch("searchStore/addSearchResult", {
  //     ordering: "",
  //     activePage,
  //     pageSize: 12,
  //     searchInput: "",
  //   });

  //   const searchResult = store.state.searchStore.searchResult;

  //   const count = store.state.searchStore.count;

  //   return {
  //     count,
  //     searchResult,
  //   };
  // },

  // data() {
  //   return {
  //     pageSize: null,

  //     ordering: "",
  //   };
  // },

  computed: {
    ...mapGetters({
      bloggerData: "bloggerCardStore/bloggerData",
    }),
  },

  methods: {
    handlerClickBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.property-slider-wrap,
.img-property-slide-wrap {
  position: relative;
}
.property-slider-wrap .tns-outer .tns-inner,
.img-property-slide-wrap .tns-outer .tns-inner {
  padding-bottom: 100px;
}
.property-slider-wrap .tns-nav,
.img-property-slide-wrap .tns-nav {
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 40px;
  z-index: 2;
}
.property-slider-wrap .tns-nav button,
.img-property-slide-wrap .tns-nav button {
  background: none;
  border: none;
  display: inline-block;
  margin: 2px;
  position: relative;
}
.property-slider-wrap .tns-nav button:active,
.property-slider-wrap .tns-nav button:focus,
.img-property-slide-wrap .tns-nav button:active,
.img-property-slide-wrap .tns-nav button:focus {
  outline: none;
}
.property-slider-wrap .tns-nav button:before,
.img-property-slide-wrap .tns-nav button:before {
  position: absolute;
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  right: 0;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.property-slider-wrap .tns-nav button.tns-nav-active:before,
.img-property-slide-wrap .tns-nav button.tns-nav-active:before {
  background-color: #00204a;
}

.btn-secondary {
  margin-right: 10px;
}
</style>
