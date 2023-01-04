import { toggleClassnameToElement } from '../toggleClassnameToElement'

describe('toggleClassnameToElement', () => {
  it('SHOULD add classname IF element has not contain classname', () => {
    const elementMock = document.createElement('div')
    const classnameMock = 'classnameMock'

    expect(elementMock.classList.contains(classnameMock)).toBeFalsy()

    toggleClassnameToElement({ element: elementMock, classname: classnameMock })

    expect(elementMock.classList.contains(classnameMock)).toBeTruthy()
  })

  it.each([[undefined], ['']])('SHOULD NOT remove classname FOR %s', (classname) => {
    const elementMock = document.createElement('div')
    const classnameMock = 'classnameMock'

    elementMock.classList.add(classnameMock)

    toggleClassnameToElement({ element: elementMock, classname })

    expect(elementMock.classList.contains(classnameMock)).toBeTruthy()
  })
})
