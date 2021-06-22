<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
</template>
<script>
import Header from '../../components/header/Header.vue';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'getHeaderTitle',
      'getMenus',
      'getMenuShow',
      'getLoadingShow',
      'getNews'
    ]),
    ...mapMutations([
      'update_title',
      'update_menuShow',
      'update_loadingShow',
      'update_news'
    ])
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus" scoped></style>