module.exports = function (str) {
  // TODO
  let list = str.split(/\s{2}|\s|\n/);
  for(let i=0;i<list.length-1;i+=2){
  	 let result1 = list[i].match(/^0x[A-Fa-f0-9][A-Fa-f0-9]/);
  	  let result2 = list[i+1].match(/^0x[A-Fa-f0-9][A-Fa-f0-9]/);
  	 if(!(result1 && result2)){
  	 	return result1 && result2;
  	 }
  }
  return true
  //str.match(/^(0x[A-Fa-f0-9]{2}\s+){8}$/)
}