<template>
  <div class="header">
    <!-- 左侧菜单栏弹出时的遮罩层 -->
    <div class="page-cover" v-show="menuShow" @click="toggleMenuShow"></div>
    <div
      class="top-toolBar"
      :class="{ 'toolBar-show': menuShow }"
      @click="toggleMenuShow"
    >
      <div class="icon-left">
        <span class="iconfont icon-menu01-01"></span>
      </div>
      <div class="title">{{ getTitle }}</div>
    </div>
    <Menu :isShow="menuShow"></Menu>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import Menu from '../menu/Menu.vue';

export default {
  name: 'Header',
  data() {
    return {};
  },
  computed: {
    ...mapState(['menus', 'menuShow']),
    ...mapGetters(['getHeaderTitle']),
    // 获取标题文字 -> 根据路由，实现实时切换与刷新的标题更新
    // 不使用vuex，解决页面刷新造成的状态丢失
    getTitle() {
      const menus = this.menus;
      return menus.find((menu) => {
        return menu.title === this.$route.name;
      }).name;
    }
  },
  methods: {
    // 左侧菜单显示切换处理函数
    toggleMenuShow() {
      this.$store.commit('update_menuShow');
    }
  },
  components: {
    Menu
  }
};
</script>
<style lang="stylus" scoped>
@import './head'
</style>