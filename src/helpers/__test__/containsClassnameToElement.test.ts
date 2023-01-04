import { containsClassnameToElement } from '../containsClassnameToElement'

describe('containsClassnameToElement', () => {
  it('SHOULD return true IF element contain classname', () => {
    const elementMock = document.createElement('div')
    const classnameMock = 'classnameMock'

    elementMock.classList.add(classnameMock)

    expect(containsClassnameToElement({ element: elementMock, classname: classnameMock })).toBeTruthy()
  })

  it.each([[undefined], ['classnameMock'], ['']])(
    'SHOULD return false IF element does not contain classname',
    (classname) => {
      const elementMock = document.createElement('div')

      expect(containsClassnameToElement({ element: elementMock, classname })).toBeFalsy()
    },
  )
})
