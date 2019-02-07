const colors = require('./lib/colors')

module.exports = (message, test) => {
  if (!test) {
    throw Error('it blocks require a function as a second argument')
  }

  let error = null

  try {
    test()
  } catch (thrownError) {
    error = thrownError
  } finally {
    const color = error ? colors.red : colors.green

    console.group(color, message)
    if (error) console.error(color, error)
    console.groupEnd()
  }
}
