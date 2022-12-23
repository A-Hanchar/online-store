import { routerPathes } from 'router/routerPathes'
import { regArr } from './components/RegExp/RegExp'
import styles from './styles.css'
import { PersonInput } from './components/PersonIntup'
import { CardInput } from './components/CardInput'
import { ButtonConfirm } from './components/ButtonConfirm'
import { createElementWithClassName } from 'helpers'
import { checkValidation } from './components/Functions/CheckValidation'

export const Form = () => {
  const form = createElementWithClassName({ tagName: 'form', classname: styles.form })

  const btn = ButtonConfirm()

  form.append(PersonInput(), CardInput(), btn)

  btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (checkValidation(form, regArr)) {
      setTimeout(() => {
        window.location.href = routerPathes.home
      }, 5000)
    }
  })

  return form
}
