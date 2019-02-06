const sinae = require('../index')
const describe = sinae.describe
const it = sinae.it
const expect = sinae.expect

describe('Sinae Tests', () => {
  it('runs a test and prints result', () => {
    expect(1).toEqual(1)
  })

  it('shows on fail what was expected and returned', () => {
    expect(1).toEqual(2)
  })

  it('can check equality', () => {
    expect(1).toEqual(1)
  })

  it('can check false equality', () => {
    expect(1).toNotEqual(2)
  })

  it('can check strict equality', () => {
    array = [1]
    expect(array).toBe(array)
  })

  it('can check false equality', () => {
    expect([1]).toNotBe([1])
  })
})
