import { Button } from 'components/Button'
import { AddToCartButtonProps } from './types'
import styles from './styles.css'
import { localStorageInstanse } from 'helpers'

export const AddToCartButton = ({
  textInBasket,
  textNotInBasket,
  id,
  appearance = 'standart',
  price,
  discount,
}: AddToCartButtonProps) => {
  const buttonText = localStorageInstanse.hasProductId(id) ? textInBasket : textNotInBasket

  const button = Button({
    children: buttonText,
    classname: [styles.button, styles[appearance]],
  })

  button.addEventListener('click', () => {
    if (localStorageInstanse.hasProductId(id)) {
      localStorageInstanse.removeProductId(id)
      localStorageInstanse.updateBasket()

      button.replaceChildren(textNotInBasket)

      return
    }

    localStorageInstanse.setProduct({ id, count: 1, price, discount })
    localStorageInstanse.updateBasket()

    button.replaceChildren(textInBasket)
  })

  return button
}
