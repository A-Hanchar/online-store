import { Filters } from './components/Filters'
import styles from './styles.css'

export const Sidebar = async () => {
  const aside = document.createElement('aside')
  styles.sidebar && aside.classList.add(styles.sidebar)

  aside.append(await Filters())

  return aside
}
