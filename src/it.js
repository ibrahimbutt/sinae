module.exports = (message, test) => {
  if (!test) {
    throw Error('it blocks require a function as a second argument')
  }

  console.log(message)
  test()
}
