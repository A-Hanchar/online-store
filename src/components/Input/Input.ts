import { checkValidation } from 'components/ModalWindow/components/Form/components/Functions/CheckValidation'
import { InputProps } from './types'

export const Input = ({ id, type, placeholder, /* regExp, */ classname }: InputProps) => {
  const input = document.createElement('input')

  input.id = id
  input.type = type
  input.placeholder = placeholder
  // checkValidation(input, regExp)
  classname && input.classList.add(classname)
  return input
}
