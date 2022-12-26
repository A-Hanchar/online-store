import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { HeaderItem } from './components/HeaderItem'

export const CartList = (/* { title, price, discountPercentage, category, brand, stock, thumbnail } */) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(HeaderItem())

  return container
}
