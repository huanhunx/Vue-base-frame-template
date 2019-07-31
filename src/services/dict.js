import { ServiceBaseClass } from './_serviceBaseClass'
export default class DictService extends ServiceBaseClass {
  // 获取所有字典信息
  static getList() {
    this.setParams('/dict/get', {})
    return super.get()
  }
  // 获取某个字典信息
  static getOne(id) {
    this.setParams('/dict/getOne', { id })
    return super.get()
  }
}
