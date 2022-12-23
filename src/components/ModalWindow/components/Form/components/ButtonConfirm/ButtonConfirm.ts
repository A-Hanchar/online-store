import { routerPathes } from './../../../../../../router/routerPathes'
import { Form } from '../../Form'
import { regArr } from '../RegExp'
import { checkValidation } from './../Functions/CheckValidation/_checkValidation'
import styles from './styles.css'
import { Button } from 'components/Button'

export const timer = function (form: HTMLFormElement) {
  if (checkValidation(form, regArr)) {
    setTimeout(() => {
      window.location.href = routerPathes.home
    }, 5000)
  }
}

export const ButtonConfirm = () => {
  const button = Button({
    children: 'CONFIRM',
    classname: styles.button,
    onclick() {
      timer(Form())
    },
  })

  return button
}
