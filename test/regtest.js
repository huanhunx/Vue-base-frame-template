var reg = /.js$/
var str1 = './modules/map.js'
var str2 = './modules/map.js.false'

console.log(reg.test(str1))
console.log(reg.test(str2))
