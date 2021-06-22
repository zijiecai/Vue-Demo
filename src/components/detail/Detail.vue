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
@import './Detail'
</style>