import { createElementWithClassName } from 'helpers'
import { Filters } from './components/Filters'
import styles from './styles.css'

export const Sidebar = () => {
  const aside = createElementWithClassName({ tagName: 'aside', classname: styles.sidebar })

  aside.append(Filters())

  return aside
}
