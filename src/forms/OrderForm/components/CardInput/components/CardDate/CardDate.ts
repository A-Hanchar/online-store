import { Input } from 'components/Input'
import { SYMBOL } from 'enums'

import { createElementWithClassName } from 'helpers'

import { ErrorMessage } from '../../../ErrorMessage'
import commonStyles from '../commonStyles.css'
import { CardDateProps } from './types'

export const CardDate = ({ validationInputs }: CardDateProps) => {
  const inputWrapper = createElementWithClassName({ tagName: 'div', classname: commonStyles.inputWrapper })
  const input = Input({
    placeholder: 'Valid Thru',
    classname: commonStyles.input,
  })

  inputWrapper.append(input)

  input.addEventListener('input', () => {
    if (input.value.length > 5) {
      input.value = input.value.slice(0, input.maxLength)
    }

    const arrayOfInputElements = input.value.split('')

    arrayOfInputElements.forEach((e, i) => {
      if (isNaN(Number(e)) && e !== SYMBOL.SLASH) {
        arrayOfInputElements.splice(i, 1)
      }
    })

    if (arrayOfInputElements.length === 2) {
      if (arrayOfInputElements.includes(SYMBOL.SLASH)) {
        arrayOfInputElements.splice(arrayOfInputElements.indexOf(SYMBOL.SLASH), 1)
      }
      arrayOfInputElements.push(SYMBOL.SLASH)
    }

    if (arrayOfInputElements.length > 2 && arrayOfInputElements.indexOf(SYMBOL.SLASH) !== 2) {
      arrayOfInputElements.splice(arrayOfInputElements.indexOf(SYMBOL.SLASH), 1)
      arrayOfInputElements[2] = SYMBOL.SLASH
    }

    input.value = arrayOfInputElements.join('')
  })

  validationInputs.push({
    input,
    validation: /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/,
    error: ErrorMessage(),
  })

  return inputWrapper
}
