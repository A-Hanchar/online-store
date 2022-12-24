import { Brand } from './components/Brand/'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Category } from './components/Category'
import { products } from 'mock/products'
import { Description } from './components/Description'

export const DescriptionBlock = (product: typeof products[0]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  for (const key in product) {
    switch (key) {
      case 'brand':
        container.append(Brand(key, product[key]))
        break
      case 'category':
        container.append(Category(key, product[key]))
        break
      case 'description':
        container.append(Description(key, product[key]))
        break
    }
  }

  return container
}
