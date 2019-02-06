module.exports = value => {
  const matchers = {
    toEqual(condition) {
      console.log(value == condition)
    },
    toNotEqual(condition) {
      console.log(value != condition)
    }
  }
  return matchers
}
