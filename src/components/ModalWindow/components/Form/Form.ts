import { timer } from './components/ButtonConfirm/ButtonConfirm'
import styles from './styles.css'
import { PersonInput } from './components/PersonIntup'
import { CardInput } from './components/CardInput'
import { ButtonConfirm } from './components/ButtonConfirm'
import { createElementWithClassName } from 'helpers'

export const Form = () => {
  const form = createElementWithClassName({ tagName: 'form', classname: styles.form })

  const btn = ButtonConfirm()

  form.append(PersonInput(), CardInput(), btn)

  btn.addEventListener('click', () => timer(form))

  return form
}
