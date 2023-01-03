import styles from './styles.css'
import { regArr } from './components/RegExp/RegExp'
import { PersonInput } from './components/PersonIntup'
import { CardInput } from './components/CardInput'
import { ButtonConfirm } from './components/ButtonConfirm'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { routerPathes } from 'router/routerPathes'
import { checkValidation } from './components/Functions/CheckValidation'
import { THREE_SECONDS } from 'helpers/constants'

export const Form = () => {
  const form = createElementWithClassName({ tagName: 'form', classname: styles.form })

  const btn = ButtonConfirm()

  form.append(PersonInput(), CardInput(), btn)

  btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (checkValidation(form, regArr)) {
      setTimeout(() => {
        window.location.href = routerPathes.home
        localStorageInstanse.removeProductsList()
      }, THREE_SECONDS)
    }
  })

  return form
}
