import { Button } from '../Button'

describe('Button', () => {
  it('SHOULD match snapshot', () => {
    const button = Button({ children: 'button' })

    expect(button).toMatchSnapshot()
  })

  it('SHOULD call mock function IF button was clicked', () => {
    const mockFn = jest.fn()

    const button = Button({ onclick: mockFn })

    button.click()

    expect(mockFn).toHaveBeenCalled()
  })
})
