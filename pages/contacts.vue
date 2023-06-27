<template>
  <div class="contacts-page">
    <Header />

    <main>
      <div class="hero page-inner overlay">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-9 text-center mt-5">
              <h1 class="heading" data-aos="fade-up">Contact Us</h1>

              <nav
                aria-label="breadcrumb"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ol class="breadcrumb text-center justify-content-center">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li
                    class="breadcrumb-item active text-white-50"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="contact-info">
                <div class="address mt-2">
                  <i class="icon-room"></i>
                  <h4 class="mb-2">Location:</h4>
                  <p>
                    ул. Авиамоторная, д.59, помещение 21.2,<br />
                    Москва, Россия
                  </p>
                </div>

                <div class="open-hours mt-4">
                  <i class="icon-clock-o"></i>
                  <h4 class="mb-2">Open Hours:</h4>
                  <p>
                    Monday-Friday:<br />
                    10:00 AM - 23:00 PM
                  </p>
                </div>

                <div class="email mt-4">
                  <i class="icon-envelope"></i>
                  <h4 class="mb-2">Email:</h4>
                  <p>info@smmplaneta.ru</p>
                </div>

                <div class="phone mt-4">
                  <i class="icon-phone"></i>
                  <h4 class="mb-2">Call:</h4>
                  <p>+7 495 646 83 35</p>
                </div>
              </div>
            </div>
            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <form action="#">
                <div class="row">
                  <div class="col-6 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <input
                      type="submit"
                      value="Send Message"
                      class="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactsPage",

  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.hero {
  background-image: url("@/static/img/hero-bg-abstract.jpg");
  z-index: -1;
}
</style>
