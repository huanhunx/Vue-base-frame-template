// 获取文件夹下所有的js文件除了index
import { FileUtils } from '../../../utils/tools'
const files = require.context('.', false, /\.js$/)
const configRouters = FileUtils.getLocalRouterFiles(files)

export default {
  path: 'home',
  name: 'home',
  hidden: false,
  redirect: 'home/main',
  meta: {
    title: ''
  },
  component: () => import(/* webpackChunkName: "home_base" */ '@/views/home/_base'),
  children: [...configRouters]
}
