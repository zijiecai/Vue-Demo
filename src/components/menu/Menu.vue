<template>
  <div class="menu">
    <div class="menu-list" :class="{ 'menu-show': menuShow }">
      <div class="menu-info">
        <img :src="avatar" class="menu-avatar" alt="用户头像" />
        <div class="menu-user">
          <div class="menu-option">
            <span>昵称：</span>
            <span class="user-nickname"> {{ user.nickname }}</span>
          </div>
          <div class="menu-option">
            <span class="user-github" @click="toGithub">to my github</span>
          </div>
        </div>
      </div>
      <div class="menu-theme">
        <div v-for="menu in menus" :key="menu.title">
          <router-link class="iconfont item" :to="menu.title">
            <div class="menu-icon">
              <i class="iconfont" :class="'icon-' + menu.title"></i>
            </div>
            <span class="menu-text">{{ menu.name }}</span>
            <div class="menu-new" v-show="menu.title === 'day' && news > 0">
              <span>6</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

// 用户信息
const user = {
  nickname: '皮卡丘',
  githubAddress: 'https://github.com/zijiecai'
};

export default {
  name: 'Menu',
  data() {
    return {
      avatar:
        'https://7975-yuncloud-123-1301997245.tcb.qcloud.la/issueUserImage/pkq.jpg?sign=7b69e757c0a8e2178483e9f2beb65291&t=1623830950',
      user
    };
  },
  computed: {
    ...mapState(['menus', 'menuShow', 'news'])
  },
  methods: {
    // 跳转我的github地址
    toGithub() {
      window.open(user.githubAddress);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/css/index'

.menu
  .menu-list
    position fixed
    top 0
    bottom 0
    flex 0 0 250px
    left -250px
    width 250px
    background-color #22262a
    color #313131
    transition all 0.3s ease
    z-index 99
    .menu-info
      width 100%
      height 220px
      background-color #262d30
      .menu-avatar
        width 40%
        border-radius 50%
        margin 20px 75px
      .menu-user
        font-size 18px
        color #fff
        text-align center
        .menu-option
          line-height 34px
        .user-nickname
          font-weight 600
        .user-github
          text-decoration underline
          cursor pointer
          &:hover
            color #cd84f1
    &.menu-show
      transform translateX(250px)
    .menu-theme
      margin 0
      padding 0
      overflow hidden
      .item
        display block
        font-size 16px
        padding 10px
        text-align left
        text-indent 1px
        line-height 15px
        color #a6adb3
        font-weight 700
        border-1px(#40474a)
        &last-child
          margin-bottom 50px
        &before
          color #2c3e50
        .menu-icon
          display inline-block
          width 34px
          height 34px
          background-color #383c40
          border-radius 50%
          vertical-align top
          text-align center
          .iconfont
            color #808e9b
            border-radius 50%
            font-size 22px
            line-height 34px
        &.active
          color #a55eea
          .menu-icon
            background-color #a55eea
            .iconfont
              color #fff
        .menu-text
          display inline-block
          font-size 16px
          line-height 34px
          vertical-align top
          margin-left 10px
          font-weight 700
        .menu-new
          display inline-block
          width 30px
          height 30px
          background-color #d81229
          border-radius 50%
          vertical-align top
          text-align center
          float right
          span
            color #fff
            font-size 16px
            line-height 30px
            font-weight 500
</style>