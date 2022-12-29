import { Button } from 'components/Button'
import { ActionButtonProps } from './types'
import styles from './styles.css'
import { addClassnameToElement, localStorageInstanse, removeClassnameToElement } from 'helpers'

export const ActionButton = ({ stock, type, productId, callbackList, productWrapper }: ActionButtonProps) => {
  const isAddButton = type === 'add'

  const buttonText = isAddButton ? '+' : '-'

  const disableButton = () => {
    button.disabled = true
    addClassnameToElement({ element: button, classname: styles.disable })
  }

  const undisableButton = () => {
    button.disabled = false
    removeClassnameToElement({ element: button, classname: styles.disable })
  }

  const checkButton = () => {
    const product = localStorageInstanse.getProductById(productId)

    if (product) {
      const { count } = product

      if (isAddButton) {
        count >= stock ? disableButton() : undisableButton()
      }

      if (!isAddButton && count < 1) {
        localStorageInstanse.removeProductId(productId)
        productWrapper.remove()
      }
    }
  }

  const handleClick = () => {
    const product = localStorageInstanse.getProductById(productId)

    if (product) {
      const { count } = product

      const newCount = isAddButton ? count + 1 : count - 1

      localStorageInstanse.setProductCount(productId, newCount)
      localStorageInstanse.updateBasket()

      callbackList.forEach((callback) => callback())
    }
  }

  const button = Button({ classname: styles.actionButton, onclick: handleClick, children: buttonText })

  callbackList.push(checkButton)

  return button
}
