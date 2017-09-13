var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
console.log(md)
  return md.replace(/@@(.+?)@@/g,'<blink>$1</blink>')
}

//str.trim()去掉字符串两边空格