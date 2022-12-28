import { ProductDescriptionPage } from 'components/ProductDescriptionPage'
import { createElementWithClassName } from 'helpers'
import { products } from 'mock/products'
import { getCategoriesParams } from 'router'

export const Product = () => {
  const { productId = '' } = getCategoriesParams()

  const container = createElementWithClassName({ tagName: 'div' })

  const obj = products.filter((e) => e.id === +productId)

  container.append(ProductDescriptionPage(...obj))

  return container
}
