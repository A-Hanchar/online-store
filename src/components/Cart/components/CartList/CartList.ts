import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { CartItem } from './CartItem'

export const CartList = ({ title, price, discountPercentage, category, brand, stock, thumbnail, rating }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(CartItem({ title, price, discountPercentage, category, brand, stock, thumbnail, rating }))

  return container
}
