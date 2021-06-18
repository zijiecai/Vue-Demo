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
      <div class="title">{{ getHeaderTitle }}</div>
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
    ...mapState(['menuShow']),
    ...mapGetters(['getHeaderTitle'])
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
.header
  .page-cover
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-colo raba(0, 0, 0, 0.4)
    z-index 9
  .top-toolBar
    position fixed
    top 0
    right 0
    left 0
    z-index 10
    width 100%
    min-height 40px
    line-height 40px
    color #fff
    text-align center
    display table
    background-color #cd84f1
    padding 8px
    transition all 0.3s ease
    &.toolBar-show
      transform translateX(250px)
    .icon-left
      padding 0 10px
      font-size 30px
      color #ecf0f1
      font-weight 400
      z-index 2
      --webkit-box-sizing border-box
      box-sizing border-box
      display --webkit-box
      display --webkit-flex
      display flex
      -webkit-align-items center
      align-items center
      float left
      .iconfont
        font-size 30px
    .title
      min-height 50px
      position absolute
      right 100px
      left 100px
      text-align center
      font-size 24px
      font-weight 550
      width auto
      z-index 2
</style>