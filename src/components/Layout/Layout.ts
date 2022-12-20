import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { routerPathes } from 'router/routerPathes'
import { PropsWithChildren } from 'types'
import styles from './styles.css'

export const Layout = async ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = document.createElement('main')

  switch (window.location.href) {
    case routerPathes.home:
      styles.mainHome && main.classList.add(styles.mainHome)
      break

    default:
      break
  }

  if (children) {
    const content = await children()

    main.append(content)
  }

  styles.page && Body.classList.add(styles.page)

  fragment.append(await Header(), main, Footer())

  return fragment
}
