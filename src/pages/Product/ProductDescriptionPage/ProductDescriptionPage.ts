import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { IProduct } from 'interfaces'
import { ProductImage } from './components/ProductImage'
import { ImagesBlock } from './components/ImagesBlock'
import { DescriptionBlock } from './components/DescriptionBlock'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { routerPathes } from 'router/routerPathes'
import styles from './styles.css'

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

  const breadCrumbs = Breadcrumbs({
    elements: [
      { name: 'Go to Store', url: routerPathes.home },
      { name: category, url: `${routerPathes.categories}/${category}` },
      { name: brand, url: `${routerPathes.category}/${brand}` },
      { name: title, url: `${routerPathes.product}/${title}` },
    ],
  })

  card.append(
    Text({ tagName: 'h2', text: title, classname: styles.header }),
    breadCrumbs,
    ProductImage({ alt: title, src: thumbnail }),
    ImagesBlock({ images, title }),
    DescriptionBlock({ brand, category, description, price, discountPercentage, rating, stock, id }),
  )

  return card
}
