import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './modules'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import(/* webpackChunkName: "home_base" */ '@/components/Frame/_base'),
      children: [...RouterConfig]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
