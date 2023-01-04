import { addClassnameToElement } from '../addClassnameToElement'

describe('addClassnameToElement', () => {
  it('SHOULD add classname IF classname is define', () => {
    const elementMock = document.createElement('div')
    const classnameMock = 'classnameMock'

    addClassnameToElement({ element: elementMock, classname: classnameMock })

    expect(elementMock.className).toBe(classnameMock)
  })

  it.each([[undefined], ['']])('SHOULD NOT add classname FOR %s', (classname) => {
    const elementMock = document.createElement('div')

    addClassnameToElement({ element: elementMock, classname })

    expect(elementMock.className).toBeFalsy()
  })
})
