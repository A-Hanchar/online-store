import { Brand } from './components/Brand/Brand'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Description } from './components/Description'
import { Category } from './components/Category'
import { products } from 'mock/products'

export const DescriptionBlock = (product: typeof products[0]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const prod = product

  for (const key in prod) {
    switch (key) {
      case 'brand':
        container.append(Brand(key, prod[key]))
        break
      case 'category':
        container.append(Category(key, prod[key]))
        break
      case 'description':
        container.append(Description(key, prod[key]))
        break
    }
  }

  return container
}
