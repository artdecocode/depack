const {
  getEntryStack, getCallerFromArguments,
} = require('../closure/5.js');
const { makeCallback } = require('../closure/6.js');

/**
 * Returns a function to create an error with a stack trace starting at the line in code when the call was made by the callee.
 * @param {boolean} [transparent] Pretend as if the call to the function lead to the error, without exposing any of the internal stack.
 */
               function erotic(transparent) {
  const { stack } = new Error()
  const caller = getCallerFromArguments(arguments)
  const entryStack = getEntryStack(stack, transparent)

  return makeCallback(caller, entryStack, transparent)
}

module.exports = erotic
//# sourceMappingURL=index.js.map