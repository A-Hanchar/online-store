import { createElementWithClassName } from 'helpers'
import { InputProps } from './types'

export const Input = ({ id, type = 'text', placeholder, dataset, classname, container }: InputProps) => {
  const input = createElementWithClassName({ tagName: 'input', classname })

  input.id = id
  input.type = type
  input.placeholder = placeholder
  input.dataset[dataset] = dataset

  if (container === true) {
    const container = createElementWithClassName({ tagName: 'div' })
    container.append(input)
    return container
  }

  return input
}
