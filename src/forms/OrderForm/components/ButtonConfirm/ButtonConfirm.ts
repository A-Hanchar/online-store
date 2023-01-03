import styles from './styles.css'
import { Button } from 'components/Button'

export const ButtonConfirm = () =>
  Button({
    children: 'CONFIRM',
    classname: styles.button,
  })
