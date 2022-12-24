import { Body } from 'components/Body'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { addClassnameToElement } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { routerPathes } from 'router/routerPathes'
import { PropsWithChildren } from 'types'
import styles from './styles.css'

export const Layout = ({ children }: PropsWithChildren) => {
  const fragment = document.createDocumentFragment()
  const main = document.createElement('main')

  children && main.append(children)

  addClassnameToElement({ element: Body, classname: styles.page })

  fragment.append(Header(), main, Footer())

  const url = urlInstanse.getUrl()

  if (url.pathname === routerPathes.home) {
    addClassnameToElement({ element: main, classname: styles.mainHome })
  }

  return fragment
}
