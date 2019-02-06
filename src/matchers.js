module.exports = value => {
  return {
    toEqual(condition) {
      console.log(value == condition)
    },
    toNotEqual(condition) {
      console.log(value != condition)
    }
  }
}
