import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'

export const Empty = () => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.wrapper })

  wrapper.append(Text({ tagName: 'h1', text: 'Cart is Empty' }))

  return wrapper
}
