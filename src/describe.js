module.exports = (message, tests) => {
  if (!tests) {
    throw Error('describe blocks require a function as a second argument')
  }

  console.group(message)
  tests()
  console.groupEnd()
}
