import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { THREE_SECONDS } from 'helpers/constants'
import { renderComponent } from 'router'
import { routerPathes } from 'router/routerPathes'
import { isFormValid } from './isFormValid'
import { ButtonConfirm } from './components/ButtonConfirm'
import { CardInput } from './components/CardInput'
import { PersonInput } from './components/PersonIntup'
import styles from './styles.css'
import { ValidationInputs } from './types'

export const OrderForm = () => {
  const validationInputs: ValidationInputs = []
  const form = createElementWithClassName({ tagName: 'form', classname: styles.form })
  const confirmButton = ButtonConfirm()

  form.append(PersonInput({ validationInputs }), CardInput({ validationInputs }), confirmButton)

  confirmButton.addEventListener('click', () => {
    if (isFormValid(validationInputs)) {
      const noticeWindow = createElementWithClassName({ tagName: 'div', classname: styles.noticeWindow })

      noticeWindow.append('Thanks For Order!')

      form.replaceChildren(noticeWindow)

      setTimeout(() => {
        localStorageInstanse.removeProductsList()
        localStorageInstanse.updateBasket()

        window.history.pushState({}, '', routerPathes.home)
        renderComponent()
      }, THREE_SECONDS)
    }
  })

  return form
}
