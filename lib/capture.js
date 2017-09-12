module.exports = function (str) {
  // TODO
   var result = str.match(/x=\d+/);
   if(result){
   		result = result[0].split('=')[1];
   }
  return result;
}