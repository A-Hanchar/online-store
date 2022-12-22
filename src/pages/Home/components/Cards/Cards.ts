import { ProductCard } from 'components/ProductCard'
import { createElementWithClassName } from 'helpers'
import { products } from 'mock/products'
import styles from './styles.css'

export const Cards = () => {
  const cardsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.cardsWrapper })

  cardsWrapper.append(...products.map((product) => ProductCard(product)))

  return cardsWrapper
}
