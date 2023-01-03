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
    maxLength: 5,
  })

  inputWrapper.append(input)

  input.addEventListener('input', () => {
    const arr = input.value.split('')

    if (input.value.length === 2) {
      if (arr.includes(SYMBOL.SLASH, 0)) {
        arr.splice(arr.indexOf(SYMBOL.SLASH), 1)
      }

      arr.splice(2, 0, SYMBOL.SLASH)
      input.value = arr.join('')
    }
  })

  validationInputs.push({
    input,
    validation: /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{2})$/,
    error: ErrorMessage(),
  })

  return inputWrapper
}
