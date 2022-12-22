import { InputProps } from './types'

export const Input = ({ id, type, placeholder, classname }: InputProps) => {
  const input = document.createElement('input')

  input.id = id
  input.type = type
  input.placeholder = placeholder
  classname && input.classList.add(classname)
  return input
}
