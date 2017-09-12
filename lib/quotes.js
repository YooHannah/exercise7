module.exports = function (str) {
  // TODO
  var result = str.match(/\"[^\"]*\"/g);
  return result;
  //str.match(/"[^\"]*"/g);
}