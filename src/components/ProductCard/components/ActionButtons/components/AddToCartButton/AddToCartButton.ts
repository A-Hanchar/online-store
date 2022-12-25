import { Button } from 'components/Button'
import { AddToCartButtonProps } from './types'
import styles from './styles.css'
import { localStorageInstanse } from 'helpers'

export const AddToCartButton = ({ buttonText, id, appearance = 'standart' }: AddToCartButtonProps) => {
  const button = Button({
    children: buttonText,
    classname: [styles.button, styles[appearance]],
  })

  button.addEventListener('click', () => {
    localStorageInstanse.setProductId(id)

    button.remove()
  })

  return button
}
