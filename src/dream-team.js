const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])

function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof members === 'number' || !members || !Array.isArray(members)) return false
  let result = ''
  members = members.map(el => {
    if(typeof el==='string'){
      return el.trim().toUpperCase()
    }
  })
  members.sort().forEach(el => {
    if(typeof el === 'string') {
      result += el.trim()[0]
    }
  })
  return result.toUpperCase()
}

module.exports = {
  createDreamTeam
};
