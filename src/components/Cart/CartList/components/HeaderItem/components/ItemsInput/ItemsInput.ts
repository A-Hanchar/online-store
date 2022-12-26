import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Input } from 'components/Input'

export const ItemsInput = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const input = Input({ id: 'items-on-page', type: 'number', classname: styles.input })
  container.append(Text({ tagName: 'span', text: 'ITEMS: ', classname: styles.inputText }), input)

  return container
}
