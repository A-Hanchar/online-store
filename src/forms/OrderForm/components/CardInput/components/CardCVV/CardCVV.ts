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
  })

  inputWrapper.append(input)

  validationInputs.push({
    input,
    validation: /^\d{3}$/,
    error: ErrorMessage(),
  })

  return inputWrapper
}
