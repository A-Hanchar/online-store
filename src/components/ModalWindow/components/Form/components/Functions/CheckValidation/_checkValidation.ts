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

  const checkRegExp = () => {
    for (let i = 0; i < allInputs.length; i++) {
      if (allInputs[i]!.dataset[arr[i]!.id] && arr[i]?.id === arr[i]!.id) {
        if (arr[i]!.regExp.test(allInputs[i]!.value)) {
          removeError(allInputs[i]!)
        } else {
          createError(allInputs[i]!, 'Error')
          res = false
        }
      }
    }
  }

  checkRegExp()

  return res
}
