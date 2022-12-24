import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { products } from 'mock/products'
import { Price } from './components/Price'
import { Stock } from './components/Stock'

export const PriceBlock = (product: typeof products[0]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(Price(product))

  for (const key in product) {
    switch (key) {
      case 'stock':
        container.append(Stock(product[key]))
        break
    }
  }

  return container
}
