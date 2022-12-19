import styles from './styles/styles.css'

export const modalWindow = () => {
  const fragment = document.createDocumentFragment()

  const container = document.createElement('div')

  const form = document.createElement('form')
  const nameInput = document.createElement('input')
  const phoneInput = document.createElement('input')
  const addressInput = document.createElement('input')
  const emailInput = document.createElement('input')

  const cardContainer = document.createElement('div')
  const cardLogo = document.createElement('img')
  const cardNumber = document.createElement('input')
  const cardValid = document.createElement('input')
  const cardCVV = document.createElement('input')

  const btnConfirm = document.createElement('button')

  const regName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
  const regPhone = /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/
  const regAddress = /^(\w{5,}\s){2,}(\w{5,})/
  const regEmail = /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/
  const regCardNum = /^\d{16}$/
  const regCardValid = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/
  const regCardCVV = /^\d{3}$/

  fragment.append(container)
  container.append(form)
  form.append(nameInput, phoneInput, addressInput, emailInput, cardContainer, btnConfirm)
  cardContainer.append(cardLogo, cardNumber, cardValid, cardCVV)

  function checkValidation(input, regexp) {
    if (regexp.test(input.value)) {
      return true
    } else {
      return false
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (
      checkValidation(nameInput, regName) &&
      checkValidation(phoneInput, regPhone) &&
      checkValidation(addressInput, regAddress) &&
      checkValidation(emailInput, regEmail) &&
      checkValidation(cardNumber, regCardNum) &&
      checkValidation(cardValid, regCardValid) &&
      checkValidation(cardCVV, regCardCVV)
    ) {
      console.log('sent')
    } else {
      console.log('err')
    }
  })

  nameInput.placeholder = 'Name'
  phoneInput.placeholder = 'Phone number'
  addressInput.placeholder = 'Delivery address'
  emailInput.placeholder = 'E-mail'
  cardNumber.placeholder = 'Card number'
  cardValid.placeholder = 'Valid Thru'
  cardCVV.placeholder = 'Code'
  btnConfirm.textContent = 'CONFIRM'

  container.classList.add(styles.container!)
  cardContainer.classList.add(styles.cardContainer!)

  cardLogo.src =
    'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'

  cardNumber.addEventListener('input', () => {
    switch (cardNumber.value) {
      case '2':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg'
        break
      case '4':
        cardLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg'
        break
      case '5':
        cardLogo.src =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052'
        break
      default:
        cardLogo.src =
          'https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=445&quality=85&dpr=1&s=none'
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

  return fragment
}
