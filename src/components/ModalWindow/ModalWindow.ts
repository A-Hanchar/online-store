import { Form } from './components/Form'
import styles from './styles.css'

export const modalWindow = () => {
  const fragment = document.createDocumentFragment()

  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)
  fragment.append(container)

  container.append(Form())

  return fragment
}
