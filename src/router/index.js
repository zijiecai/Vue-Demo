import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homePage/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'home',
    redirect: '/welfare',
    component: Home,
    children: [
      {
        // 福利页
        path: '/welfare',
        name: 'welfare',
        component: () => import('../views/welfarePage/Welfare.vue')
      },
      {
        // 每日推荐页
        path: '/recommend',
        name: 'recommend',
        component: () => import('../views/recommendPage/Recommend.vue')
      },
      {
        // Android博文页
        path: '/android',
        name: 'android',
        component: () => import('../views/androidPage/Android.vue')
      },
      {
        // iOS博文页
        path: '/ios',
        name: 'ios',
        component: () => import('../views/iosPage/Ios.vue')
      },
      {
        // 前端博文页
        path: '/web',
        name: 'web',
        component: () => import('../views/webPage/Web.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  // 路由切换激活样式
  linkActiveClass: 'active'
})

export default router
