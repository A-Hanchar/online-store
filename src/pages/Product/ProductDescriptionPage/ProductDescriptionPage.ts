import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { IProduct } from 'interfaces'
import styles from './styles.css'
import { Breadcrumbs } from './components/Breadcrumbs'
import { ProductImage } from './components/ProductImage'
import { ImagesBlock } from './components/ImagesBlock'
import { DescriptionBlock } from './components/DescriptionBlock'

export const ProductDescriptionPage = ({
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
  images,
}: IProduct) => {
  const card = createElementWithClassName({ tagName: 'div', classname: styles.card })

  card.append(
    Text({ tagName: 'h2', text: title, classname: styles.header }),
    Breadcrumbs({ category, brand, title }),
    ProductImage({ alt: title, src: thumbnail }),
    ImagesBlock({ images, title }),
    DescriptionBlock({ brand, category, description, price, discountPercentage, rating, stock, id }),
  )

  return card
}
