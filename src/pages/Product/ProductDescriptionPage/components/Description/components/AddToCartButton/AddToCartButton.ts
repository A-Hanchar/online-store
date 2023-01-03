import { Button } from 'components/Button'

import { localStorageInstanse } from 'helpers'

import styles from './styles.css'
import { AddToCartButtonProps } from './types'

export const AddToCartButton = ({
  textInBasket,
  textNotInBasket,
  id,
  price,
  discountPercentage,
}: AddToCartButtonProps) => {
  const buttonText = localStorageInstanse.hasProductId(id) ? textInBasket : textNotInBasket

  const button = Button({
    children: buttonText,
    classname: styles.button,
  })

  button.addEventListener('click', () => {
    if (localStorageInstanse.hasProductId(id)) {
      localStorageInstanse.removeProductId(id)
      localStorageInstanse.updateBasket()

      button.replaceChildren(textNotInBasket)

      return
    }

    localStorageInstanse.setProduct({ id, count: 1, price, discount: discountPercentage })
    localStorageInstanse.updateBasket()

    button.replaceChildren(textInBasket)
  })

  return button
}
