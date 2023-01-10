import { ModalWindow } from 'components/ModalWindow'
import { formByName } from 'forms'
import { createElementWithClassName, localStorageInstanse, urlInstanse } from 'helpers'

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
      wrapper.replaceChildren(Empty())
    }

    const modalForm = urlInstanse.getModalValue()

    if (modalForm) {
      const form = formByName[modalForm]()

      ModalWindow({ children: form })
    }
  }

  urlInstanse.addCallback(checkContent)

  return wrapper
}
