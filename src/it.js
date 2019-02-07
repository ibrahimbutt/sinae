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
    console.group(message)
    if (error) console.error(error)
    console.groupEnd()
  }
}
