import styles from './styles.css'
import { Button } from 'components/Button'

export const ButtonConfirm = async () => {
  const button = await Button({ classname: styles.button })
  button.textContent = 'CONFIRM'

  return button
}
