import { createElementWithClassName } from 'helpers'
import { Form } from './components/Form'
import styles from './styles.css'

export const ModalWindow = () => {
  const fragment = document.createDocumentFragment()

  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  fragment.append(container)

  container.append(Form())

  return fragment
}
