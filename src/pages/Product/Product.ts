import { createElementWithClassName } from 'helpers'
import { products } from 'mock/products'
import { getCategoriesParams } from 'router'
import { ProductDescriptionPage } from './ProductDescriptionPage'
import styles from './styles.css'

export const Product = () => {
  const { productId = '' } = getCategoriesParams()

  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const filteredProducts = products.filter(({ id }) => id === Number(productId))

  filteredProducts.forEach((e) => container.append(ProductDescriptionPage(e)))

  return container
}
