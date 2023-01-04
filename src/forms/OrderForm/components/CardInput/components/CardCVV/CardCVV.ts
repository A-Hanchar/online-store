import { Input } from 'components/Input'
import { createElementWithClassName } from 'helpers'

import { ErrorMessage } from '../../../ErrorMessage'
import commonStyles from '../commonStyles.css'
import { CardCVVProps } from './types'

export const CardCVV = ({ validationInputs }: CardCVVProps) => {
  const inputWrapper = createElementWithClassName({ tagName: 'div', classname: commonStyles.inputWrapper })
  const input = Input({
    placeholder: 'Code',
    classname: commonStyles.input,
    maxLength: 3,
    type: 'number',
  })

  inputWrapper.append(input)

  input.addEventListener('input', () => {
    const value = Number(input.value)

    input.value = String(value > -1 ? Math.abs(value) : 0)

    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength)
    }
  })

  validationInputs.push({
    input,
    validation: /^\d{3}$/,
    error: ErrorMessage(),
  })

  return inputWrapper
}
