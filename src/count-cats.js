const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// countCats([
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ])
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  console.log(matrix)
  let count = 0
  matrix.forEach(el => {
    let n = el.length
    for (i= 0; i<n; i++){
      if(el[i] === '^^'){
        count++
      }
    }

  })
  return count
}

module.exports = {
  countCats
};
