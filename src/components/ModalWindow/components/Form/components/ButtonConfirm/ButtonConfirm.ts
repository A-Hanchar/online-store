import { Input } from 'components/Input'
import styles from './styles.css'
import { INPUT_TYPES } from 'components/Input/enums'
import { Button } from 'components/Button'

export const ButtonConfirm = async () => {
  const button = await Button({ classname: styles.button })
  button.textContent = 'CONFIRM'

  return button
}
