// 文件处理相关的工具
export class FileUtils {
  /**
   * 获取路由文件的工具
   *
   * @static
   * @param {*} files 使用：require.context('.', false, /\.js$/)获取，具体api参考require.context
   * @returns
   * @memberof FileUtils
   */
  static getLocalRouterFiles(files) {
    let configRouters = []
    files.keys().forEach(item => {
      if (item === './index.js') return
      const routerItem = files(item).default
      if (Array.isArray(routerItem)) {
        routerItem.forEach(r => {
          if (r.path) r.path = r.path.replace(/^\//, '')
        })
      }
      configRouters = configRouters.concat(routerItem)
    })
    return configRouters
  }

  static getLocalStoreFiles(files) {
    let storeFiles = []
    files.keys().forEach(item => {
      const fileItem = files(item).default
      if (Array.isArray(fileItem)) {
        fileItem.forEach(r => {
          if (r.path) r.path = r.path.replace(/^\//, '')
        })
      }
      storeFiles = storeFiles.concat(fileItem)
    })
    const returnValues = {}
    storeFiles.forEach((item, i) => {
      returnValues[item.moduleName || i] = item
    })
    return returnValues
  }
}

// csv导出工具
export class csvExporter {
  /**
   * data=[] 数据
   * options={
   *    header:[
   *        {
   *            name:'表头名称'，
   *            key:'对应data的字段名'
   *        }
   *    ],
   *    fileName='文件名称'
   * }
   */
  constructor(data, options) {
    this.strData = ''
    this.data = data || []
    this.options = options || {}
    this.options.header = this.options.header || []
    this.options.fileName = (this.options.fileName || '文件导出') + '.csv'
    this.init()
  }

  init() {
    this.strData = '\ufeff'
    this.options.header.forEach(item => {
      this.strData += item.name + '<douhao>'
    })
    this.strData = this.strData + '\n'
    // this.strData = this.strData.slice(0, this.strData.length - 1) + '\n'
  }

  makeData() {
    for (var i = 0; i < this.data.length; i++) {
      let dataItem = this.data[i]
      let dataItemStr = this.options.header
        .map(headerItem => {
          return dataItem[headerItem.key] || ''
        })
        .join('<douhao>')
      this.strData += dataItemStr + '\n'
    }
    this.strData = this.strData.replace(/,/g, '，').replace(/<douhao>/g, ',')
  }

  export() {
    this.makeData()
    const blobData = new Blob([this.strData], { type: 'text/csv,charset=UTF-8' })
    let url = URL.createObjectURL(blobData)
    let a = document.createElement('a')
    a.download = this.options.fileName
    a.href = url
    a.click()
  }
}

// 基本工具
export class baseTools {
  /**
   * 延时
   *
   * @static
   * @param {number} time
   * @returns
   * @memberof baseTools
   */
  static sleep(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }

  /**
   * 简单克隆
   *
   * @static
   * @param {object} obj
   * @returns
   * @memberof baseTools
   */
  static copy(obj) {
    if (Array.isArray(obj)) {
      obj = { a: obj }
      return this.copy(obj).a
    }
    return JSON.parse(JSON.stringify(obj))
  }
}
