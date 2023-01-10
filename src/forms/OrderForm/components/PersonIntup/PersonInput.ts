/* eslint-disable no-useless-escape */
import { Input } from 'components/Input'
import { SYMBOL } from 'enums'

import { checkCountAndLengthWords, createElementWithClassName } from 'helpers'

import { ErrorMessage } from '../ErrorMessage'
import styles from './styles.css'
import { PersonInputProps } from './types'

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

  const phoneValidation = () => {
    const value = phoneInput.value
    const firstLetter = value[0]

    if (firstLetter !== SYMBOL.PLUS) {
      return false
    }

    const phonePart = value.slice(1)

    return phonePart.length >= 8 && !!Number(phonePart)
  }

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
      validation: () => checkCountAndLengthWords({ string: nameInput.value, minCountWords: 2, minCountLetters: 3 }),
      error: ErrorMessage(),
    },
    {
      input: phoneInput,
      validation: phoneValidation,
      error: ErrorMessage(),
    },
    {
      input: addressInput,
      validation: () => checkCountAndLengthWords({ string: addressInput.value, minCountWords: 3, minCountLetters: 5 }),
      error: ErrorMessage(),
    },
    {
      input: emailInput,
      validation: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      error: ErrorMessage(),
    },
  )

  return container
}
