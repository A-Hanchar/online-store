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

    const arr = input.value.split('')

    arr.forEach((e, i) => {
      if (isNaN(Number(e)) && e !== SYMBOL.SLASH) {
        arr.splice(i, 1)
      }
      input.value = arr.join('')
    })

    if (input.value.length === 2) {
      if (input.value.includes(SYMBOL.SLASH)) {
        input.value = input.value.replace(SYMBOL.SLASH, '')
      }
      input.value = input.value + SYMBOL.SLASH
    }
  })

  validationInputs.push({
    input,
    validation: /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/,
    error: ErrorMessage(),
  })

  return inputWrapper
}
