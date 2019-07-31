import api from '../request'
export class ServiceBaseClass {
  static url = ''
  static params = ''
  static setParams(url, params) {
    this.url = url || ''
    this.params = params || {}
  }
  static get() {
    return api.get(this.url, this.params || {})
  }
  static post() {
    return api.post(this.url, this.params || {})
  }
}
