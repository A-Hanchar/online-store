import { Form } from './components/Form'
import styles from './styles.css'

export const modalWindow = async () => {
  const fragment = document.createDocumentFragment()

  const container = document.createElement('div')
  styles.container && container.classList.add(styles.container)
  fragment.append(container)

  const form = await Form()

  container.append(form)

  return fragment
}
