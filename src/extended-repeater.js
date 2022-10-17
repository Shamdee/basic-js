// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 */
// repeater('my test string', { repeatTimes: 5, separator: '?!', addition: 'PLUS', additionRepeatTimes: 4, additionSeparator: '))' })
function repeater(str, options) {
  let result = ''
  let addition = ''
  if (!(typeof str === 'string')) {
    str = 'STRING_OR_DEFAULT'
    options.addition = str
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.separator) {
    options.separator = '+'
  }
  if ((options.additionRepeatTimes && !(typeof options.additionRepeatTimes === 'number')) || (options.additionSeparator && !options.additionRepeatTimes)) {
    options.additionRepeatTimes = 1
  }
  if (options.additionRepeatTimes) {
    for (j = 1; j <= options.additionRepeatTimes; j++) {
      addition += options.addition
      if (j < options.additionRepeatTimes && options.additionSeparator) {
        addition += options.additionSeparator
      }
    }

  }
  // options.repeatTimes = 1
  for(i=1; i <= options.repeatTimes; i++) {

    result += str + addition
    if (i !== options.repeatTimes && options.separator) {
      result += options.separator
    }
  }

  result
  return result
}

module.exports = {
  repeater
};
