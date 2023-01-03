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
      { name: 'Home', url: routerPathes.home, id: 'breadHome' },
      { name: 'Categories', url: routerPathes.categories, id: 'breadHome' },
      { name: category, url: `${routerPathes.categories}/${category}`, id: 'breadCategories' },
      { name: brand, url: `${routerPathes.categories}/${category}/${brand}`, id: 'breadCategory' },
      { name: title, url: `${routerPathes.categories}/${category}/${brand}/${id}`, id: 'breadProduct' },
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
