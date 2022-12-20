import { TextProps } from './types'

export const Text = ({ tagName, text, classname }: TextProps) => {
  const textElement = document.createElement(tagName)

  classname && textElement.classList.add(classname)
  textElement.innerText = text

  return textElement
}
