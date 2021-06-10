import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/homePage/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        // 福利页
        path: '/welfare',
        name: 'Welfare',
        component: () => import('../views/welfarePage/Welfare.vue')
      },
      {
        // 每日推荐页
        path: '/recommend',
        name: 'Recommend',
        component: () => import('../views/recommendPage/Recommend.vue')
      },
      {
        // Android博文页
        path: '/android',
        name: 'Android',
        component: () => import('../views/androidPage/Android.vue')
      },
      {
        // iOS博文页
        path: '/ios',
        name: 'Ios',
        component: () => import('../views/iosPage/Ios.vue')
      },
      {
        // 前端博文页
        path: '/web',
        name: 'Web',
        component: () => import('../views/webPage/Web.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
