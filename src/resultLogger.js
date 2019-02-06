module.exports = ({ result, condition, value }) => {
  if (result) {
    console.log(result)
  } else {
    console.log(`Expected: ${condition}`)
    console.log(`Got: ${value}`)
  }
}
