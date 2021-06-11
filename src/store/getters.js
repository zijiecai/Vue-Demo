export default {
  // 获取头部标题
  getHeaderTitle(state) {
    return state.headerTitle;
  },
  // 获取菜单选项
  getMenus(state) {
    return state.menus;
  },
  // 获取控制菜单显示的变量值
  getMenuShow(state) {
    return state.menuShow;
  },
  // 获取控制加载动画显示的变量值
  getLoadingShow(state) {
    return state.loadingShow;
  },
  // 获取消息数
  getNews(state) {
    return state.news;
  }
}