import { createElementWithClassName } from 'helpers'
import { InputProps } from './types'

export const Input = ({
  id,
  type = 'text',
  placeholder,
  dataset,
  classname,
  container = document.createDocumentFragment(),
}: InputProps) => {
  const input = createElementWithClassName({ tagName: 'input', classname })

  input.id = id
  input.type = type
  input.placeholder = placeholder
  if (typeof dataset === 'string') {
    input.dataset[dataset] = dataset
  }

  container.append(input)

  return container
}
