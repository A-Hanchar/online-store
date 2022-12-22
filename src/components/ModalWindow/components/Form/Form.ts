import { CardLogo } from './components/CardLogo/CardLogo'
import styles from './styles.css'
import { PersonInput } from './components/PersonIntup'
import { CardInput } from './components/CardInput'
import { ButtonConfirm } from './components/ButtonConfirm'
import { checkValidation } from './components/Functions/CheckValidation'
import { Input } from 'components/Input'
import { INPUT_TYPES } from 'components/Input/enums'

export const Form = async () => {
  const form = document.createElement('form')
  styles.form && form.classList.add(styles.form)

  const nameInput = Input({
    id: 'nameInput',
    type: INPUT_TYPES.text,
    placeholder: 'Name',
    // regExp: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
    classname: styles.input,
  })

  const phoneInput = Input({
    id: 'phoneInput',
    type: INPUT_TYPES.text,
    placeholder: 'Phone number',
    // regExp: /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/,
    classname: styles.input,
  })

  const addressInput = Input({
    id: 'addressInput',
    type: INPUT_TYPES.text,
    placeholder: 'Delivery address',
    // regExp: /^(\w{5,}\s){2,}(\w{5,})/,
    classname: styles.input,
  })

  const emailInput = Input({
    id: 'emailInput',
    type: INPUT_TYPES.email,
    placeholder: 'E-mail',
    // regExp: /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/,
    classname: styles.input,
  })

  const cardNumber = Input({
    id: 'cardNumber',
    type: INPUT_TYPES.text,
    placeholder: 'Card number',
    // regExp: /^\d{16}$/,
    classname: styles.input,
  })

  const cardValid = Input({
    id: 'cardValid',
    type: INPUT_TYPES.text,
    placeholder: 'Valid Thru',
    // regExp: /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/,
    classname: styles.input,
  })

  const cardCVV = Input({
    id: 'cardCVV',
    type: INPUT_TYPES.text,
    placeholder: 'Code',
    // regExp: /^\d{3}$/,
    classname: styles.input,
  })

  const cardLogo = CardLogo()

  cardNumber.addEventListener('input', () => {
    cardLogo.src =
      'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'
    if (cardNumber.value.startsWith('2')) {
      cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg'
    }
    if (cardNumber.value.startsWith('4')) {
      cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
    }
    if (cardNumber.value.startsWith('5')) {
      cardLogo.src =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052'
    }
  })

  cardValid.maxLength = 5

  cardValid.addEventListener('input', () => {
    const arr = cardValid.value.split('')
    if (cardValid.value.length === 2) {
      if (arr.includes('/', 0)) {
        arr.splice(arr.indexOf('/'), 1)
      }
      arr.splice(2, 0, '/')
      cardValid.value = arr.join('')
    }
  })

  const nameRegEx = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
  const phoneRegEx = /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/
  const addressRegEx = /^(\w{5,}\s){2,}(\w{5,})/
  const emailRegEx = /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/
  const cardNumberRegEx = /^\d{16}$/
  const cardValidRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/
  const cardCVVRegEx = /^\d{3}$/

  // const container = document.createElement('div')
  // styles.container && container.classList.add(styles.container)
  // container.append(nameInput, phoneInput, addressInput, emailInput)

  // const containerCard = document.createElement('div')
  // styles.containerCard && containerCard.classList.add(styles.containerCard)
  // containerCard.append(cardLogo, cardNumber, cardValid, cardCVV)

  const btn = await ButtonConfirm()

  form.append(nameInput, phoneInput, addressInput, emailInput, cardLogo, cardNumber, cardValid, cardCVV, btn)

  btn.addEventListener('click', (event) => {
    event.preventDefault()

    checkValidation(nameInput, nameRegEx)
    checkValidation(phoneInput, phoneRegEx)
    checkValidation(addressInput, addressRegEx)
    checkValidation(emailInput, emailRegEx)
    checkValidation(cardNumber, cardNumberRegEx)
    checkValidation(cardValid, cardValidRegEx)
    checkValidation(cardCVV, cardCVVRegEx)
  })

  return form
}
