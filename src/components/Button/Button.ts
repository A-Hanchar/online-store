import { ButtonProps } from './types'

export const Button = async ({ children, classname, onclick }: ButtonProps) => {
  const button = document.createElement('button')

  classname && button.classList.add(classname)
  children && button.append(await children())

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}
