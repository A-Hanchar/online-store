import { createElementWithClassName } from 'helpers'
import { IProduct } from 'interfaces'
import { ActionButtonsFull } from './components/ActionButtons'
import { ProductImage } from './components/ProductImage'
import { ProductInfo } from './components/ProductInfo'
import styles from './styles.css'

export const ProductCardFull = ({
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
  const card = createElementWithClassName({ tagName: 'div', classname: [styles.card, styles.full] })

  card.append(
    ProductImage({ alt: title, src: thumbnail, discountPercentage, type: 'full' }),
    ProductInfo({ title, description, discountPercentage, price, category, rating, stock }),
    ActionButtonsFull({ id, brand, category, price, discount: discountPercentage }),
  )

  return card
}
