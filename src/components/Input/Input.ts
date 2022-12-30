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
  if (placeholder) {
    input.placeholder = placeholder
  }
  if (dataset) {
    input.dataset[dataset] = dataset
  }

  container.append(input)

  return container
}
