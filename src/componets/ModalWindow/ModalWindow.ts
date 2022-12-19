export const modalWindow = () => {
  const fragment = document.createDocumentFragment()

  const container = document.createElement('div')

  const form = document.createElement('form')
  const nameInput = document.createElement('input')
  const phoneInput = document.createElement('input')
  const addressInput = document.createElement('input')
  const emailInput = document.createElement('input')

  const cardContainer = document.createElement('div')
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
  cardContainer.append(cardNumber, cardValid, cardCVV)

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
      container.innerHTML = '<h1>Sent</h1>'
    } else {
      container.innerHTML = '<h1>Error</h1>'
    }
  })

  return fragment
}
