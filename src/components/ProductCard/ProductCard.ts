import { addClassnameToElement } from 'helpers'
import { IProduct } from 'interfaces'
import { ActionButtons } from './components/ActionButtons'
import { ProductImage } from './components/ProductImage'
import { ProductInfo } from './components/ProductInfo'
import styles from './styles.css'

export const ProductCard = ({
  title,
  images,
  description,
  price,
  discountPercentage,
  category,
  id,
  brand,
}: IProduct) => {
  const card = document.createElement('div')

  card.append(
    ProductImage({ alt: title, src: images[0] ?? '', discountPercentage }),
    ProductInfo({ title, description, discountPercentage, price, category }),
    ActionButtons({ id, brand, category }),
  )

  addClassnameToElement({ element: card, classname: styles.card })

  return card
}
