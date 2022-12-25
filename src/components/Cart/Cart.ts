import { IProduct } from './../../interfaces/IProduct'
import { createElementWithClassName } from './../../helpers/createElementWithClassName'
import styles from './styles.css'

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

  return container
}
