<template>
  <transition name="fade">
    <div class="detail" v-show="isShow">
      <!-- 这里包裹的这一层div有必要，否则better-scroll不起作用，将头部与内容整合到一个div中 -->
      <div>
        <div class="header">
          <div class="bar-nav" @click="hide">
            <div class="back">
              <span class="iconfont icon-back"></span>
            </div>
          </div>
          <div class="title">每日推荐~</div>
        </div>
        <Day :data="detailData" ref="day" class="day"></Day>
      </div>
    </div>
  </transition>
</template>
<script>
import BScroll from 'better-scroll';
import Day from '../day/Day';

export default {
  name: 'Detail',
  props: {
    detailData: {
      type: Object
    }
  },
  data() {
    return {
      isShow: false,
      scroll: null
    };
  },
  methods: {
    // 显示
    show() {
      this.isShow = true;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$el, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
        this.$refs.day.clearStyle();
      });
      // 隐藏浏览器默认垂直滚动条
      // document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    },
    // 隐藏
    hide() {
      this.isShow = false;
      // 显示浏览器默认垂直滚动条
      // document.getElementsByTagName('body')[0].style.overflowY = 'visible';
    }
  },
  components: {
    Day
  }
};
</script>
<style lang="stylus" scoped>
.detail
  position fixed
  top 0
  left 0
  right 0
  z-index 30
  width 100%
  height 100%
  background-color #fff
  &.fade-enter-active, &.fade-leave-active
    transition all 0.3s linear
    transform translate3d(0, 0, 0)
  &.fade-enter, &.fade-leave-active
    opacity 0
    transform translate3d(100%, 0, 0)
  .header
    min-height 50px
    padding 0 38px 0 20px
    line-height 50px
    color #fff
    font-size 18px
    background-color #cd84f1
    text-align center
    .back
      cursor pointer
      line-height 50px
      float left !important
      .iconfont
        font-size 22px
    .title
      font-size 20px
      font-weight 600
      align-items center
  .day
    padding 10px 20px
</style>