// common-js2.js
module.exports = () => {
  console.log('default common js export2')
}
module.exports['named'] = () => {
  console.log('named common js export2')
}




// standard node require way to import