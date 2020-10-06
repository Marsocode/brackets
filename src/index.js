// jshint esversion:6
module.exports = function check(str, bracketsConfig) {
  let configBr = [];
  let newStr = str;

  for (let item of bracketsConfig) {
    // конкатенируем скобки, что сделать одну str скобок внутри массива
    configBr.push(item[0] + item[1]);
  }
  // console.log(configBr);

  for (let i = 0; i <= str.length; i++) {
    for (let k = 0; k <= configBr.length; k++) {
      newStr = newStr.replace(configBr[k], '');
    }
    if (newStr.length === 0) {
      return true;
    }
  }
  return false;
};