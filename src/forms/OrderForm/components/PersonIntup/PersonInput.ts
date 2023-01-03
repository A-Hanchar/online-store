/* eslint-disable no-useless-escape */
import { Input } from 'components/Input'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { PersonInputProps } from './types'
import { ErrorMessage } from '../ErrorMessage'

export const PersonInput = ({ validationInputs }: PersonInputProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const nameWrapper = createElementWithClassName({ tagName: 'div', classname: styles.inputWrapper })
  const nameInput = Input({
    placeholder: 'Name',
    classname: styles.input,
  })

  nameWrapper.append(nameInput)

  const phoneWrapper = createElementWithClassName({ tagName: 'div', classname: styles.inputWrapper })
  const phoneInput = Input({
    placeholder: 'Phone number',
    classname: styles.input,
  })

  phoneWrapper.append(phoneInput)

  const addressWrapper = createElementWithClassName({ tagName: 'div', classname: styles.inputWrapper })
  const addressInput = Input({
    placeholder: 'Delivery address',
    classname: styles.input,
  })

  addressWrapper.append(addressInput)

  const emailWrapper = createElementWithClassName({ tagName: 'div', classname: styles.inputWrapper })
  const emailInput = Input({
    type: 'email',
    placeholder: 'E-mail',
    classname: styles.input,
  })

  emailWrapper.append(emailInput)

  container.append(nameWrapper, phoneWrapper, addressWrapper, emailWrapper)

  validationInputs.push(
    {
      input: nameInput,
      validation: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
      error: ErrorMessage(),
    },
    {
      input: phoneInput,
      validation: /^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,}$/,
      error: ErrorMessage(),
    },
    {
      input: addressInput,
      validation: /^(\w{5,}\s){2,}(\w{5,})/,
      error: ErrorMessage(),
    },
    {
      input: emailInput,
      validation: /[a-zA-Z1-9\-\._]+@[a-z1-9]+(.[a-z1-9]+){1,}/,
      error: ErrorMessage(),
    },
  )

  return container
}
