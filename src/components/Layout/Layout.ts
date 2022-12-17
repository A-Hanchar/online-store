import { Link } from 'components/Link'
import { Sidebar } from 'components/Sidebar'
import { routerPathes } from 'router'
import { PropsWithChildren } from 'types'

export const Layout = async ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()

  const header = document.createElement('header')
  header.innerText = 'Header'

  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  for (const [key, value] of Object.entries(routerPathes)) {
    const li = document.createElement('li')
    const a = Link({ content: value, href: value, id: key })

    li.append(a)
    ul.append(li)
  }

  nav.append(ul)
  header.append(nav)

  const footer = document.createElement('footer')
  footer.innerText = 'Footer'

  const aside = await Sidebar()

  const main = document.createElement('main')

  fragment.append(header, aside, main, footer)

  if (children) {
    const content = await children

    main.append(content)
  }

  return fragment
}
