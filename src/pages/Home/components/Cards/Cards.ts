import { ProductCard, ProductCardFull } from 'components/ProductCard'
import { createElementWithClassName, workDataInstanse } from 'helpers'
import { urlInstanse } from 'helpers/urlInstanse'
import { Appearance, DATA_ATTRIBUTE } from 'types'
import styles from './styles.css'

export const Cards = () => {
  const cardsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.cardsWrapper })

  const renderCards = () => {
    cardsWrapper.replaceChildren()
    workDataInstanse.updateProductsWithRange()

    const searchAppearance: Appearance = urlInstanse.getQueryParam<Appearance>('appearance') ?? 'standart'
    cardsWrapper.setAttribute(DATA_ATTRIBUTE.DATA_GRID_APPEARANCE, searchAppearance)

    cardsWrapper.append(
      ...workDataInstanse
        .getAllProducts()
        .map((product) => (searchAppearance === 'standart' ? ProductCard(product) : ProductCardFull(product))),
    )
  }

  urlInstanse.addCallback(renderCards, 'end')

  return cardsWrapper
}
