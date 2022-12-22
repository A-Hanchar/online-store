import styles from './styles.css'
import { PersonInput } from './components/PersonIntup'
import { CardInput } from './components/CardInput'
import { ButtonConfirm } from './components/ButtonConfirm'
import { checkValidation } from './components/Functions/CheckValidation'

export const Form = async () => {
  const form = document.createElement('form')
  styles.form && form.classList.add(styles.form)

  const nameRegEx = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
  const phoneRegEx = /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/
  const addressRegEx = /^(\w{5,}\s){2,}(\w{5,})/
  const emailRegEx = /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/
  const cardNumberRegEx = /^\d{16}$/
  const cardValidRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/
  const cardCVVRegEx = /^\d{3}$/

  const btn = await ButtonConfirm()

  form.append(PersonInput(), CardInput(), btn)

  btn.addEventListener('click', (event) => {
    event.preventDefault()
    const [name, phone, address, email, cardNum, cardValid, cardCVV] = [...form]
    checkValidation(name, nameRegEx)
    checkValidation(phone, phoneRegEx)
    checkValidation(address, addressRegEx)
    checkValidation(email, emailRegEx)
    checkValidation(cardNum, cardNumberRegEx)
    checkValidation(cardValid, cardValidRegEx)
    checkValidation(cardCVV, cardCVVRegEx)
  })

  return form
}
