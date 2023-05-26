<template>
  <div class="admin-view">
    <Header />
    <main>
      <Search />
      <Admin />
      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '../components/section/Search.vue';
import Admin from '../components/section/Admin.vue';
import Statistics from '../components/section/Statistics.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AdminView',
  components: {
    Header,
    Search,
    Admin,
    Statistics,
    Footer,
  },
};
</script>
