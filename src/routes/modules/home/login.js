export default [
  {
    path: 'login',
    name: 'login',
    hidden: false,
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "home_login" */ '@/views/home/login')
  }
]
