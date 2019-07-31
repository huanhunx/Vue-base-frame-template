export default [
  {
    path: 'main',
    name: 'main',
    hidden: false,
    meta: {
      title: '城镇空间信息综合规划与利用系统'
    },
    component: () => import(/* webpackChunkName: "home_main" */ '@/views/home/main')
  }
]
