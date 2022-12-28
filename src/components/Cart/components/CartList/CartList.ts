import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { CartItem } from './CartItem'
import { CartListProps } from './typse'

export const CartList = (
  { id, title, price, discountPercentage, category, brand, stock, thumbnail, rating }: CartListProps,
  lineNumber: number,
) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.id = 'item-id'

  container.append(
    CartItem({ id, title, price, discountPercentage, category, brand, stock, thumbnail, rating }, lineNumber),
  )

  return container
}
