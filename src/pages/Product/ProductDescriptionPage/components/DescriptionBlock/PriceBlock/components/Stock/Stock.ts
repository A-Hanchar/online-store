import styles from './styles.css'
import { Text } from 'components/Text'
import { StockProps } from './type'

export const Stock = ({ stock }: StockProps) => {
  const stockSpan = Text({ tagName: 'span', text: `In stock: ${stock}`, classname: styles.stock })

  return stockSpan
}
