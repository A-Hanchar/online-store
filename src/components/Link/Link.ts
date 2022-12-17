import { renderComponent, routerPathes } from 'router'
import { LinkProps } from './types'

export const Link = ({ id, content, linkKey }: LinkProps) => {
  const a = document.createElement('a')

  a.id = id
  a.innerText = content
  a.href = routerPathes[linkKey]

  const handleLinkClick = (event: MouseEvent) => {
    event.preventDefault()

    window.history.pushState({}, '', routerPathes[linkKey])
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
