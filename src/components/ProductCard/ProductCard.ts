import { addClassnameToElement } from 'helpers'
import { IProduct } from 'interfaces'
import { ActionButtons } from './components/ActionButtons'
import { ProductImage } from './components/ProductImage'
import { ProductInfo } from './components/ProductInfo'
import styles from './styles.css'

export const ProductCard = ({
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
  const card = document.createElement('div')

  card.append(
    ProductImage({ alt: title, src: thumbnail, discountPercentage }),
    ProductInfo({ title, description, discountPercentage, price, category, rating, stock }),
    ActionButtons({ id, brand, category }),
  )

  addClassnameToElement({ element: card, classname: styles.card })

  return card
}
