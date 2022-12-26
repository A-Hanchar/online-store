import { IProduct } from './../../interfaces/IProduct'
import { createElementWithClassName } from './../../helpers/createElementWithClassName'
import styles from './styles.css'
import { CartList } from './components/CartList'

export const Cart = ({
  title,
  description,
  price,
  discountPercentage,
  category,
  id,
  brand,
  stock,
  rating,
  thumbnail,
}: IProduct) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(CartList({ title, price, discountPercentage, category, brand, stock, thumbnail, rating }))

  return container
}
