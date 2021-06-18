import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

// 菜单选项标题
const MENUS_TITLE = [
  {
    title: 'welfare',
    name: '福利'
  },
  {
    title: 'recommend',
    name: '推荐'
  },
  {
    title: 'android',
    name: '安卓'
  },
  {
    title: 'ios',
    name: 'IOS'
  },
  {
    title: 'web',
    name: '前端'
  },
  // 'welfare',
  // 'recommend',
  // 'android',
  // 'ios',
  // 'web'
]

// 创建一个对象state来保存应用启动周期的变量状态
const state = {
  // 头部标题
  headerTitle: '福利',
  // 菜单选项
  menus: MENUS_TITLE,
  // 控制菜单显示
  menuShow: false,
  // 控制加载动画显示
  loadingShow: false,
  // 消息数
  news: 5
}

// 创建Store对象
const store = new Vuex.Store({
  state,
  getters,
  mutations
})

// 挂载Vue实例上
export default store;
