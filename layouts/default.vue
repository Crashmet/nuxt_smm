<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  mounted() {
    const token = localStorage.getItem("access_token") || null;

    if (token !== null) {
      this.setAccessToken(token);
    }

    // console.log(token);
  },

  methods: {
    ...mapActions({
      setAccessToken: "authStore/setAccessToken",
    }),
  },
};
</script>

<style src="@/assets/styles/allBaseStyle.css" />
<style src="@/assets/styles/normalize.css" />
<style src="@/assets/styles/fonts/fonts.css" />
