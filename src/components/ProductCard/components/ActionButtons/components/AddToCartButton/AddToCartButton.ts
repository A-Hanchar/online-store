import { Button } from 'components/Button'
import { AddToCartButtonProps } from './types'
import styles from './styles.css'
import { localStorageInstanse } from 'helpers'

export const AddToCartButton = ({
  textInBasket,
  textNotInBasket,
  id,
  appearance = 'standart',
}: AddToCartButtonProps) => {
  const buttonText = localStorageInstanse.hasProductId(id) ? textInBasket : textNotInBasket

  const button = Button({
    children: buttonText,
    classname: [styles.button, styles[appearance]],
  })

  button.addEventListener('click', () => {
    button.replaceChildren()

    if (localStorageInstanse.hasProductId(id)) {
      localStorageInstanse.removeProductId(id)

      button.append(textNotInBasket)

      return
    }

    localStorageInstanse.setProductId(id)

    button.append(textInBasket)
  })

  return button
}
