<template>
  <div class="search-result-view">
    <Header />
    <main>
      <Search />
      <search-result />
      <Statistics />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Search from '../components/section/Search.vue';
import SearchResult from '../components/section/SearchResult.vue';
import Statistics from '../components/section/Statistics.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'SearchResultView',
  components: {
    Header,
    Search,
    SearchResult,
    Statistics,
    Footer,
  },
};
</script>
