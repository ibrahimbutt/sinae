const colors = require('./lib/colors')

module.exports = (message, test) => {
  if (!test) {
    throw Error('it blocks require a function as a second argument')
  }

  let color = colors.green
  let error = null

  try {
    test()
  } catch (thrownError) {
    error = thrownError
    color = colors.red
  } finally {
    console.group(color, message)
    if (error) console.error(color, error)
    console.groupEnd()
  }
}
