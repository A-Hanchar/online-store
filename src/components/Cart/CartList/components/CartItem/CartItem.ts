import { createElementWithClassName } from 'helpers'
import styles from './styles.css'

export const CartItem = ({ title, price, discountPercentage, category, brand, stock, thumbnail }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append()

  return container
}
