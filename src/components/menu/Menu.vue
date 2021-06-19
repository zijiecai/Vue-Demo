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
        <div
          v-for="menu in menus"
          :key="menu.title"
          @click="updateTitle(menu.name, menu.title)"
        >
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
    },
    // 更新头部标题
    updateTitle(name, title) {
      this.$store.commit('update_title', name);
      this.$store.commit('update_menuShow');
      if (title === 'day') {
        this.$store.commit('update_news');
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import './menu'
</style>