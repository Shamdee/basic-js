const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
let sortArr = []
let newArr = []
  arr.forEach(el => {
    if(el !== -1){
      sortArr.push(el)
    }
  })
  sortArr.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  let n = 0
  for (i=0; i<arr.length;i++){
    if(arr[i] === -1){
      newArr.push(arr[i])
    }else if(arr[i] !== -1){
      newArr.push(sortArr[n])
      n++
    }
  }
return newArr
}

module.exports = {
  sortByHeight
};
