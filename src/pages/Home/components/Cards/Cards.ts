import { ProductCard, ProductCardFull } from 'components/ProductCard'
import { createElementWithClassName } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { products } from 'mock/products'
import { Appearance, DATA_ATTRIBUTE, SEARCH_PARAMS } from 'types'
import styles from './styles.css'

export const Cards = () => {
  const searchAppearance: Appearance = urlInstanse.getQueryParam<Appearance>(SEARCH_PARAMS.APPEARANCE) ?? 'standart'

  const cardsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.cardsWrapper })
  cardsWrapper.setAttribute(DATA_ATTRIBUTE.DATA_GRID_APPEARANCE, searchAppearance)

  cardsWrapper.append(
    ...products.map((product) => {
      switch (searchAppearance) {
        case 'full':
          return ProductCardFull(product)

        default:
          return ProductCard(product)
      }
    }),
  )

  return cardsWrapper
}
