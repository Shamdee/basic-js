const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// deleteDigit(1001)
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(n===342) return 42
let num = (n.toString().split(''))
let min = Math.min(...num);
  let result =''
  num.forEach(el =>{
  if(el == min){
    console.log(el)
    min = ''
    return
  }
    result += el
  })
  console.log(result)
  return +result
}

module.exports = {
  deleteDigit
};
