import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { Empty } from './components/Empty'
import { Products } from './components/Products'
import { Summary } from './components/Summary'
import styles from './styles.css'

export const Basket = () => {
  const countElements = localStorageInstanse.getProducts().length
  const isfirstRenderEmpty = countElements === 0
  const callbackList: Array<() => void> = []

  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  if (countElements) {
    wrapper.append(Products({ callbackList }), Summary({ callbackList }))

    callbackList.forEach((callback) => callback())
  } else {
    wrapper.append(Empty())
  }

  const checkContent = () => {
    const countElements = localStorageInstanse.getProducts().length

    if (!isfirstRenderEmpty && countElements === 0) {
      wrapper.replaceChildren()

      wrapper.append(Empty())
    }
  }

  urlInstanse.addCallback(checkContent)

  return wrapper
}
