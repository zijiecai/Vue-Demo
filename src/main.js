import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入inonfont样式
import './assets/font/iconfont.css';
// 引入公共样式
import './common/css/index.styl';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
