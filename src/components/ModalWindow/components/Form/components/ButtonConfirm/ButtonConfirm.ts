import styles from './styles.css'
import { Button } from 'components/Button'

export const ButtonConfirm = () => {
  const button = Button({
    children: 'CONFIRM',
    classname: styles.button,
  })

  return button
}
