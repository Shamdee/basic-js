// const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example ['a', 'b', 'cd', 'b ', 'a(3)']
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 * ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
 */
renameFiles(['doc',
  'doc',
  'image',
  'doc(1)',
  'doc'])
function renameFiles(names) {
  console.log(names)
  let result = []

  let n = 1
  if(result.length === 0){
    result.push(names[0])
  }
  console.log(result)
  for(i=1; i<names.length; i++){
    i
    for (j=0; j<result.length; j++) {
      j
      if(result[j]===(names[i])){
        result.push(names[i]+`(${n})`)
        n++
        break
      }else {
        result.push(names[i])
        break
      }

      console.log(names[i])

    }
  }
  console.log(result)
  // if(result[result.length-i]===el){
      //   n++
      //   el = el+`(${n})`
      //   result.push(el)
      //   i++
      //   reset()
      //   c
      // } else{
      //   result.push(el)
      //   i++

  console.log(result)
}

module.exports = {
  renameFiles
};
