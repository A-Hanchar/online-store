import styles from './styles.css'
import { Text } from 'components/Text'

export const Stock = ({ stock }) => {
  const stockSpan = Text({ tagName: 'span', text: `In stock: ${stock}`, classname: styles.stock })

  return stockSpan
}
