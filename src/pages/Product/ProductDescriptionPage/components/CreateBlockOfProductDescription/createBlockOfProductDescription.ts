import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
export const createBlockOfProductDescription = (blockName: string, blockDescription: string) => {
  const block = createElementWithClassName({ tagName: 'div', classname: styles.block })
  const header = Text({ tagName: 'h3', text: blockName, classname: styles.header })
  const description = Text({ tagName: 'span', text: blockDescription, classname: styles.description })
  block.append(header, description)
  return block
}
