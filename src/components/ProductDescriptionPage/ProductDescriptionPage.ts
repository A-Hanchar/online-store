import { DescriptionBlock } from './components/DescriptionBlock/'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { products } from 'mock/products'
import { PriceBlock } from './components/PriceBlock'

export const ProductDescriptionPage = (product: typeof products[0]) => {
  const fragment = document.createDocumentFragment()

  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  container.append(DescriptionBlock(product), PriceBlock(product))
  fragment.append(container)

  return fragment
}
