import { renderComponent } from 'router'

import { createElementWithClassName } from './../../helpers/createElementWithClassName'
import { LinkProps } from './types'

export const Link = ({ children, href, classname, target = '_self' }: LinkProps) => {
  const a = createElementWithClassName({ tagName: 'a', classname })
  children && a.append(children)

  a.href = href
  a.target = target

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
