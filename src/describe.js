module.exports = (message, tests) => {
  if (tests != undefined) {
    console.log(message)
    tests()
  } else {
    throw Error('describe blocks require a function as a second argument')
  }
}
