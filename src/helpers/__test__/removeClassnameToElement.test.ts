import { removeClassnameToElement } from '../removeClassnameToElement'

describe('removeClassnameToElement', () => {
  it('SHOULD remove classname IF classname is define', () => {
    const elementMock = document.createElement('div')
    const classnameMock = 'classnameMock'

    elementMock.classList.add(classnameMock)

    removeClassnameToElement({ element: elementMock, classname: classnameMock })

    expect(elementMock.classList.contains(classnameMock)).toBeFalsy()
  })

  it.each([[undefined], ['']])('SHOULD NOT remove classname FOR %s', (classname) => {
    const elementMock = document.createElement('div')
    const classnameMock = 'classnameMock'

    elementMock.classList.add(classnameMock)

    removeClassnameToElement({ element: elementMock, classname })

    expect(elementMock.classList.contains(classnameMock)).toBeTruthy()
  })
})
