import { createElementWithClassName } from 'helpers'
import { ActionButtons } from './components/ActionButtons'
import { Filters } from './components/Filters'
import { FoundCards } from './components/FoundCards'
import styles from './styles.css'

export const Sidebar = () => {
  const aside = createElementWithClassName({ tagName: 'aside', classname: styles.sidebar })

  aside.append(ActionButtons(), FoundCards(), Filters())

  return aside
}
