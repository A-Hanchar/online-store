import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { Cards } from './components/Cards'
import { Sidebar } from './components/Sidebar'
import styles from './styles.css'

export const Home = () => {
  const fragment = document.createDocumentFragment()
  const contentWrapper = createElementWithClassName({ tagName: 'div', classname: styles.contentWrapper })

  fragment.append(Sidebar(), contentWrapper)
  contentWrapper.append(Text({ tagName: 'h1', text: 'Online Shop', classname: styles.title }), Cards())

  return fragment
}
