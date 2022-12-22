import { addClassnameToElement } from 'helpers/addClassnameToElement'
import { renderComponent } from 'router'
import { LinkProps } from './types'

export const Link = ({ id, children, href, classname, target = '_self' }: LinkProps) => {
  const a = document.createElement('a')
  children && a.append(children)

  a.id = id
  a.href = href
  a.target = target

  addClassnameToElement({ element: a, classname })

  const handleLinkClick = (event: MouseEvent) => {
    if (target === '_blank') {
      return
    }
    event.preventDefault()

    window.history.pushState({}, '', href)
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
