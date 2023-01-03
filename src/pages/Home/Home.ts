import { createElementWithClassName } from 'helpers'

import { Cards } from './components/Cards'
import { CardsHeader } from './components/CardsHeader'
import { Sidebar } from './components/Sidebar'
import styles from './styles.css'

export const Home = () => {
  const fragment = document.createDocumentFragment()
  const contentWrapper = createElementWithClassName({ tagName: 'div', classname: styles.contentWrapper })

  fragment.append(Sidebar(), contentWrapper)
  contentWrapper.append(CardsHeader(), Cards())

  return fragment
}
