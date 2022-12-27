import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { CartItem } from './CartItem'
import { CartListProps } from './typse'

export const CartList = ({
  title,
  price,
  discountPercentage,
  category,
  brand,
  stock,
  thumbnail,
  rating,
}: CartListProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.id = 'item-id'

  container.append(CartItem({ title, price, discountPercentage, category, brand, stock, thumbnail, rating }))

  return container
}
