import { Button } from 'components/Button'

import styles from './styles.css'

export const ButtonConfirm = () =>
  Button({
    children: 'CONFIRM',
    classname: styles.button,
  })
