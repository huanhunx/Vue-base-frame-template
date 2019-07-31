// 正则表达式验证父类
class RegExpValidator {
  static get regStr() {
    return ''
  }

  static buildReg(arg) {
    return new RegExp(this.regStr, arg)
  }

  static validate(testStr) {
    return this.buildReg().test(testStr)
  }
}

// 判断中文
export class isChinese extends RegExpValidator {
  static get regStr() {
    return '[\u4E00-\u9FA5]'
  }
}
