module.exports = (message, test) => {
  if (test != undefined) {
    console.log(message)
    test()
  } else {
    throw Error('it blocks require a function as a second argument')
  }
}
