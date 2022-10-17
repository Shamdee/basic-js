const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

let arr = JSON.stringify(matrix)
  arr = JSON.parse(arr)
  let len = matrix[0].length
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (i === 0 && j === 0) {
          arr[i][j + 1]++
          arr[i + 1][j]++
          arr[i + 1][j + 1]++
          arr[i][j]--
        } else {
          if (i === len - 1 && j === len - 1) {
            arr[i][j - 1]++
            arr[i - 1][j]++
            arr[i - 1][j - 1]++
          }
          if (i === 0 && j === len - 1) {
            arr[i][j - 1]++
            arr[i + 1][j]++
            arr[i + 1][j - 1]++
          }
          if (i === len - 1 && j === 0) {
            arr[i][j + 1]++
            arr[i - 1][j]++
            arr[i - 1][j + 1]++
          }
          arr[i][j + 1]++
          arr[i][j - 1]++
          arr[i + 1][j]++
          arr[i - 1][j]++
          arr[i - 1][j - 1]++
          arr[i + 1][j + 1]++
          arr[i - 1][j + 1]++
          arr[i + 1][j - 1]++
          arr[i][j]--

        }
      }
      if (arr[i][j] === false){
        arr[i][j]=0
      }
      }
    }
return arr
}

module.exports = {
  minesweeper
};
