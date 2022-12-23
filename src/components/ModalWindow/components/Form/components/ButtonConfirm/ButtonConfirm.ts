import styles from './styles.css'
import { Button } from 'components/Button'

export const ButtonConfirm = () => {
  const button = Button({ classname: styles.button })
  button.textContent = 'CONFIRM'

  return button
}
