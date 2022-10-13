const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// getCommonCharacterCount('aabcc', 'adcaa')
// getCommonCharacterCount('zzzz', 'zzzzzzz')
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

let strArr1 = s1.split('')
let strArr2 = s2.split('')
let count = 0
      strArr1.forEach(el => {
        for(i=0; i<strArr2.length; i++){
          if (el === strArr2[i]){
            count++
            delete strArr2[i]
            break
            strArr1.shift()
          }
        }
      })
  return count
}

module.exports = {
  getCommonCharacterCount
};
