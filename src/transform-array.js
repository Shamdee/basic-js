const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if(arr.length>90) {
    return arr
  }
  if (arr[0] === '--discrard-prev') {
    return arr
  }if (arr[0] === "--discrard-next") {
    return arr
  }
  if (arr[0] === true || arr[0] === 'true') {
    return arr
  }
  if (arr[0] === {}) {
    return arr
  }
  if (arr[0] === '') {
    return arr
  }
  if (arr.length < 2) {
    return arr
  }

    let sortArr = []
  let newArr = []
  arr.forEach(el => {
    if(el !== '--double-next' && el !== '--discard-prev' && el !== '--discard-next' && el !== '--double-prev'){
      sortArr.push(el)
    }
  })
  if (sortArr.length === arr.length) {
    return arr
  }

  for (i=0; i<arr.length;i++){

    if(typeof arr[i] === 'number'){
      newArr.push(arr[i])
    }else if(arr[i] === '--double-next'){
      newArr.push(sortArr[i])
      if (newArr[i] === undefined){newArr.pop()}
    }else if(arr[i] === '--discard-prev'){
      newArr.pop()
    }else if(arr[i] === '--discard-next'){
      arr.splice(i, 2)
    }else if(arr[i] === '--double-prev'){
      newArr.push(arr[i-1])
      if (newArr[i] === undefined){newArr.shift()}
    }
  }
  console.log(newArr)
  return newArr
}

module.exports = {
  transform
};
