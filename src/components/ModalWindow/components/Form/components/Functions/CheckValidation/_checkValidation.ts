import { containsClassnameToElement } from './../../../../../../../helpers/containsClassnameToElement '
import { addClassnameToElement, createElementWithClassName } from 'helpers'
import { regArr } from './../../RegExp/RegExp'
import styles from './styles.css'
import { removeClassnameToElement } from 'helpers/removeClassnameToElement '

export const checkValidation = (form: HTMLFormElement, arr: typeof regArr) => {
  const allInputs = form.querySelectorAll('input')

  let res = true

  const createError = (input: HTMLInputElement, text: string) => {
    const parent = input.parentElement
    const errorLabel = createElementWithClassName({ tagName: 'label', classname: styles.label })
    errorLabel.textContent = text
    if (!containsClassnameToElement({ element: parent!, classname: styles.error })) {
      addClassnameToElement({ element: parent!, classname: styles.error })
      parent!.append(errorLabel)
    }
  }

  const removeError = (input: HTMLInputElement) => {
    const parent = input.parentElement
    parent!.querySelector('label')?.remove()
    removeClassnameToElement({ element: parent!, classname: styles.error })
  }

  for (const input of allInputs) {
    arr.forEach((e) => {
      if (input.dataset.name && e.id === 'name') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.phone && e.id === 'phone') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.address && e.id === 'address') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.email && e.id === 'email') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.number && e.id === 'number') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.valid && e.id === 'valid') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.code && e.id === 'code') {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
    })
  }
  return res
}
