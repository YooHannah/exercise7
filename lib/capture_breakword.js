module.exports = function (str) {
  // TODO
  var result = str.match(/(^x|\sx)=(\d+$|\d+\s)/);
   if(result){
   		result = result[0].split('=')[1].split(' ')[0];
   }
  return result;
  //str.match(/\bx=(\d+)\b/)
}