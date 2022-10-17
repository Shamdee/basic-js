const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *                                        '4a4t'
 */
// encodeLine('aaaatttt')
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = ''
  if (!str) return ''
  let j = 1
  let count = 1
  for (i=0; i<=str.length; i++) {
    if (str[i] === str[j]) {
      count++
    } else {
      if(count === 1){
        result += str[i]
      }else {
        result += count+str[i]
      }
      count = 1
    }
    j++
  }
  return result
}

module.exports = {
  encodeLine
};
