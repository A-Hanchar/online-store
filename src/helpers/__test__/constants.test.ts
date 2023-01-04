import { THREE_SECONDS } from '../constants'

describe('constants', () => {
  it.each([[THREE_SECONDS, 3000]])('SHOULD be correct value for every constant (%s)', (constant, result) => {
    expect(constant).toEqual(result)
  })
})
