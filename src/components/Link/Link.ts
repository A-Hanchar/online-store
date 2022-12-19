import { renderComponent } from 'router'
import { LinkProps } from './types'

export const Link = async ({ id, children, href, classname }: LinkProps) => {
  const a = document.createElement('a')

  a.id = id
  a.href = href
  children && a.append(await children)
  classname && a.classList.add(classname)

  const handleLinkClick = (event: MouseEvent) => {
    event.preventDefault()

    window.history.pushState({}, '', href)
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
