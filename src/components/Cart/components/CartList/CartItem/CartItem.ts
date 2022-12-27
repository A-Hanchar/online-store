import { DescriptionItem } from './components/DescriptionItem/DescriptionItem'
import { QuantityOfItem } from './components/QuantityOfItem/QuantityOfItem'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { CartItemProps } from './typse'

export const CartItem = ({
  title,
  price,
  discountPercentage,
  category,
  brand,
  stock,
  thumbnail,
  rating,
}: CartItemProps) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    DescriptionItem({ title, category, brand, rating, thumbnail }),
    QuantityOfItem({ stock, price, discountPercentage }),
  )

  return container
}
