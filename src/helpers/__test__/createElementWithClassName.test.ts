import { addClassnameToElement } from '../addClassnameToElement'
import { createElementWithClassName } from '../createElementWithClassName'

jest.mock('../addClassnameToElement', () => ({
  addClassnameToElement: jest.fn(),
}))

describe('createElementWithClassName', () => {
  it('SHOULD return element', () => {
    const tagNameMock: keyof HTMLElementTagNameMap = 'div'

    const result = createElementWithClassName({ tagName: tagNameMock })

    expect(result.tagName).toBe(tagNameMock.toUpperCase())
  })

  it.each([
    ['classname', 1],
    [['classname-1', 'classname-2'], 2],
  ])('SHOULD call addClassnameToElement FOR $s', (classname, countOfCall) => {
    createElementWithClassName({ tagName: 'data', classname })

    expect(addClassnameToElement).toHaveBeenCalledTimes(countOfCall)
  })
})
