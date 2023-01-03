import { createElementWithClassName } from 'helpers'
import { products } from 'mock/products'
import { getCategoriesParams } from 'router'
import { ProductDescriptionPage } from './ProductDescriptionPage'
import styles from './styles.css'

export const Product = () => {
  const { productId = '' } = getCategoriesParams()

  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const findedProducts = products.find(({ id }) => id === Number(productId))

  findedProducts && container.append(ProductDescriptionPage(findedProducts))

  return container
}
