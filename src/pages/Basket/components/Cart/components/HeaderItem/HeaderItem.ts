import { ItemsPages } from './components/ItemsPages'
import { ItemsInput } from './components/ItemsInput'
import { createElementWithClassName } from 'helpers'
import { Text } from 'components/Text'
import styles from './styles.css'

export const HeaderItem = (itemsNum: number) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const activeBlock = createElementWithClassName({ tagName: 'div', classname: styles.activeBlock })
  activeBlock.append(ItemsInput(itemsNum), ItemsPages())

  container.append(Text({ tagName: 'h2', text: 'Product In Cart', classname: styles.header }), activeBlock)

  return container
}
