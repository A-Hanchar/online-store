import { ItemsPages } from './components/ItemsPages/'
import { ItemsInput } from './components/ItemsInput/'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'

export const HeaderItem = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const activeBlock = createElementWithClassName({ tagName: 'div', classname: styles.activeBlock })
  activeBlock.append(ItemsInput(), ItemsPages())

  container.append(Text({ tagName: 'h2', text: 'Product In Cart', classname: styles.header }), activeBlock)

  return container
}
