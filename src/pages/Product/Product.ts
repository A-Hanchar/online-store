import { createElementWithClassName } from 'helpers'
import { products } from 'mock/products'
import { getCategoriesParams } from 'router'
import { ProductDescriptionPage } from './ProductDescriptionPage'

export const Product = () => {
  const { productId = '' } = getCategoriesParams()

  const container = createElementWithClassName({ tagName: 'div' })

  const obj = products.filter((e) => e.id === +productId)

  obj.forEach((e) => container.append(ProductDescriptionPage(e)))

  return container
}
