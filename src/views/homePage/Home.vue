<template>
  <div>
    <!-- <h2>首页</h2> -->
    <Header></Header>
    <!-- <div>{{ getHeaderTitle }}</div>
    <div>{{ getMenus }}</div>
    <div>{{ getMenuShow }}</div>
    <div>{{ getLoadingShow }}</div>
    <div>{{ getNews }}</div>
    <button @click="btnClick">触发事件</button> -->
    <router-view />
  </div>
</template>
<script>
import Header from '../../components/header/Header.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {};
  },
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
  methods: {
    // btnClick() {
    //   this.$store.commit('update_title', '皮卡丘');
    //   this.$store.commit('update_menuShow');
    //   this.$store.commit('update_loadingShow');
    //   this.$store.commit('update_news');
    // }
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus" scoped></style>