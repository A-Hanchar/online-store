import { DescriptionBlock } from './components/DescriptionBlock/'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { products } from 'mock/products'

export const ProductDescriptionPage = () => {
  const fragment = document.createDocumentFragment()

  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  container.append(DescriptionBlock())
  fragment.append(container)

  console.log(products[0])

  return fragment
}
