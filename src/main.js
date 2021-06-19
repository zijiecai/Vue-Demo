import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入无限滚动模块
import infiniteScroll from 'vue-infinite-scroll';
// 引入图片懒加载模块
import VueLazyload from 'vue-lazyload';
// 引入inonfont样式
import './assets/font/iconfont.css';
// 引入公共样式
import './common/css/index.styl';
import 'swiper/swiper.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// 注册
Vue.use(infiniteScroll);
Vue.use(router);
Vue.use(VueAwesomeSwiper);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
  error: require('./assets/img/404.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
}
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
