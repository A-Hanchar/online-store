import { containsClassnameToElement } from './../../../../../../../helpers/containsClassnameToElement '
import { addClassnameToElement, createElementWithClassName } from 'helpers'
import { regArr } from './../../RegExp/RegExp'
import styles from './styles.css'
import { removeClassnameToElement } from 'helpers/removeClassnameToElement '
import { ID_FOR_REGEXP } from './enum'

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
      if (input.dataset.name && e.id === ID_FOR_REGEXP.name) {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.phone && e.id === ID_FOR_REGEXP.phone) {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.address && e.id === ID_FOR_REGEXP.address) {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.email && e.id === ID_FOR_REGEXP.email) {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.number && e.id === ID_FOR_REGEXP.number) {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.valid && e.id === ID_FOR_REGEXP.valid) {
        if (e.regExp.test(input.value)) {
          removeError(input)
        } else {
          createError(input, 'Error')
          res = false
        }
      }
      if (input.dataset.code && e.id === ID_FOR_REGEXP.code) {
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
