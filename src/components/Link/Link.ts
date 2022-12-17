import { renderComponent } from 'router'
import { LinkProps } from './types'

export const Link = ({ id, content, href }: LinkProps) => {
  const a = document.createElement('a')

  a.id = id
  a.innerText = content
  a.href = href

  const handleLinkClick = (event: MouseEvent) => {
    event.preventDefault()

    window.history.pushState({}, '', href)
    renderComponent()
  }

  a.addEventListener('click', handleLinkClick)

  return a
}
