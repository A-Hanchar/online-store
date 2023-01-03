import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { addClassnameToElement, urlInstanse } from 'helpers'
import { routerPathes } from 'router/routerPathes'
import { PropsWithChildren } from 'types'
import styles from './styles.css'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = document.createElement('main')

  children && main.append(children)

  Body.removeAttribute('class')
  addClassnameToElement({ element: Body, classname: styles.page })

  fragment.append(Header(), main, Footer())

  const url = urlInstanse.getUrl()

  if (url.pathname === routerPathes.home) {
    addClassnameToElement({ element: main, classname: styles.mainHome })
  }

  if (url.pathname === routerPathes.basket) {
    addClassnameToElement({ element: main, classname: styles.mainBasket })
  }

  return fragment
}
