import { ItemsPages } from './components/ItemsPages/'
import { ItemsInput } from './components/ItemsInput/'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'

export const HeaderItem = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    Text({ tagName: 'h2', text: 'Product In Cart', classname: styles.header }),
    ItemsInput(),
    ItemsPages(),
  )

  return container
}
