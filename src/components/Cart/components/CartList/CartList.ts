import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { HeaderItem } from './components/HeaderItem'
import { CartItem } from './components/CartItem'

export const CartList = ({ title, price, discountPercentage, category, brand, stock, thumbnail, rating }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    HeaderItem(),
    CartItem({ title, price, discountPercentage, category, brand, stock, thumbnail, rating }),
  )

  return container
}
