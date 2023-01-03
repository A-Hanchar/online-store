import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { THREE_SECONDS } from 'helpers/constants'
import { renderComponent } from 'router'
import { routerPathes } from 'router/routerPathes'
import { ButtonConfirm } from './components/ButtonConfirm'
import { CardInput } from './components/CardInput'
import { checkValidation } from './components/Functions/CheckValidation'
import { PersonInput } from './components/PersonIntup'
import { regArr } from './components/RegExp'
import styles from './styles.css'

export const OrderForm = () => {
  const form = createElementWithClassName({ tagName: 'form', classname: styles.form })

  const btn = ButtonConfirm()

  form.append(PersonInput(), CardInput(), btn)

  btn.addEventListener('click', (event) => {
    event.preventDefault()
    if (checkValidation(form, regArr)) {
      const noticeWindow = createElementWithClassName({ tagName: 'div', classname: styles.noticeWindow })

      noticeWindow.append('Thanks For Order!')

      form.replaceChildren(noticeWindow)

      setTimeout(() => {
        localStorageInstanse.removeProductsList()
        window.history.pushState({}, '', routerPathes.home)
        renderComponent()
      }, THREE_SECONDS)
    }
  })

  return form
}
