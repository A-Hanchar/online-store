import { IProduct } from 'interfaces'
import { ActionButtons } from './components/ActionButtons'
import { ProductImage } from './components/ProductImage'
import { ProductInfo } from './components/ProductInfo'
import styles from './styles.css'

export const ProductCard = async ({
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
  styles.card && card.classList.add(styles.card)

  card.append(
    ProductImage({ alt: title, src: images[0] ?? '', discountPercentage }),
    ProductInfo({ title, description, discountPercentage, price, category }),
    await ActionButtons({ id, brand, category }),
  )

  return card
}
