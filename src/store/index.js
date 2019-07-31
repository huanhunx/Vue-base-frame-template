import Vue from 'vue'
import Vuex from 'vuex'
import { FileUtils } from '../utils/tools'
const files = require.context('./modules', true, /.js$/)
const modules = FileUtils.getLocalStoreFiles(files)
Vue.use(Vuex)

export default new Vuex.Store({
  modules
})
