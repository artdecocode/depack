let cleanStack = require('../closure/7.js'); if (cleanStack && cleanStack.__esModule) cleanStack = cleanStack.default;
const {
  getCallerFromArguments, getCalleeStackLine, getStackHeading,
} = require('../closure/8.js');

/**
 * Create a callback
 * @function makeCallback
 * @param {function} entryCaller function which was called at entry
 * @param {string} entryStack first line of the error stack to be returned
 * @param {boolean} [shadow=false] print only entry stack
 * @private
 */
       function makeCallback(entryCaller, entryStack, shadow = false) {
  /**
   * This callback should be called when an asynchronous error occurred.
   * @param {(string|Error)} messageOrError A message string or an _Error_ object at the point of actual error.
   * @returns {Error} An error with the updated stack which includes the callee.
   */
  function cb(messageOrError) {
    const caller = getCallerFromArguments(arguments)
    const { stack: errorStack } = new Error()
    const calleeStackLine = getCalleeStackLine(errorStack)
    const isError = messageOrError instanceof Error
    const message = isError ? messageOrError.message : messageOrError

    const stackHeading = getStackHeading(message)
    const entryHasCallee = caller !== null && entryCaller === caller
    const stackMessage = [
      stackHeading,
      ...(entryHasCallee || shadow ? [entryStack] : [
        calleeStackLine,
        entryStack,
      ]),
    ].join('\n')

    const stack = cleanStack(stackMessage)
    const properties = { message, stack }
    const e = isError ? messageOrError : new Error()

    return Object.assign(e, properties)
  }

  return cb
}


module.exports.makeCallback = makeCallback
//# sourceMappingURL=callback.js.map