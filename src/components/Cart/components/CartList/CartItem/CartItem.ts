import { DescriptionItem } from './components/DescriptionItem/DescriptionItem'
import { QuantityOfItem } from './components/QuantityOfItem/QuantityOfItem'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { CartItemProps } from './typse'

export const CartItem = (
  { id, title, price, discountPercentage, category, brand, stock, thumbnail, rating }: CartItemProps,
  lineNumber: number,
) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    DescriptionItem({ title, category, brand, rating, thumbnail }, lineNumber),
    QuantityOfItem({ id, stock, price, discountPercentage }),
  )

  return container
}
