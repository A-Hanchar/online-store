import { createElementWithClassName } from 'helpers'
import { Form } from './components/Form'
import styles from './styles.css'

export const ModalWindow = () => {
  const background = createElementWithClassName({ tagName: 'div', classname: styles.background })
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  background.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault()

    const target = event.target

    if (target === background) {
      background.remove()
    }
  })

  background.append(container)
  container.append(Form())

  return background
}
