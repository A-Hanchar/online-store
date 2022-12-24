import styles from './styles.css'
import { Text } from 'components/Text'

export const Stock = (stock: number) => {
  const stockSpan = Text({ tagName: 'span', text: stock.toString(), classname: styles.stock })

  return stockSpan
}
