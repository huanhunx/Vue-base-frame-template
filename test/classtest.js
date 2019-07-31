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

class isChinese extends RegExpValidator {
  static get regStr() {
    return '[\u4E00-\u9FA5]'
  }
}

var res = isChinese.validate('阿萨德')
console.log(res)
