import { capitalizeText } from '../capitalizeText'

describe('capitalizeText', () => {
  it('SHOULD return correct value', () => {
    const checkedText = 'qwerty qwerty'
    const expectedText = 'Qwerty Qwerty'

    const result = capitalizeText(checkedText)

    expect(result).toBe(expectedText)
  })
})
