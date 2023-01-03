import { Button } from 'components/Button'

import { addClassnameToElement, localStorageInstanse, removeClassnameToElement, urlInstanse } from 'helpers'
import { routerPathes } from 'router/routerPathes'

import styles from './styles.css'
import { ActionButtonProps } from './types'

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

        const paginationParams = urlInstanse.getPaginationParam()

        if (!paginationParams) {
          return
        }

        const { total } = paginationParams

        total - 1 === 0 ? urlInstanse.resetUrl(routerPathes.basket) : urlInstanse.setPaginationValue('total', total - 1)
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

  checkButton()

  callbackList.push(checkButton)

  return button
}
