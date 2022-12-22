import { addClassnameToElement } from 'helpers/addClassnameToElement'
import { renderComponent } from 'router'
import { LinkProps } from './types'

export const Link = ({ id, children, href, classname }: LinkProps) => {
  const a = document.createElement('a')

  a.id = id
  a.href = href

  children && a.append(children)
  addClassnameToElement({ element: a, classname })

  const handleLinkClick = (event: MouseEvent) => {
    event.preventDefault()

    window.history.pushState({}, '', href)
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
