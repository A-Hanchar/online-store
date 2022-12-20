import { ProductCard } from 'components/ProductCard'
import styles from './styles.css'
import { CardsProps } from './types'

export const Cards = async ({ products }: CardsProps) => {
  const cardsWrapper = document.createElement('div')
  styles.cardsWrapper && cardsWrapper.classList.add(styles.cardsWrapper)

  cardsWrapper.append(...(await Promise.all(products.map((product) => ProductCard(product)))))

  return cardsWrapper
}
