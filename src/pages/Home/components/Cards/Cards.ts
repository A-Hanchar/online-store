import { ProductCard, ProductCardFull } from 'components/ProductCard'
import { StubLayout } from 'components/StubLayout'
import { DATA_ATTRIBUTE } from 'enums'
import { createElementWithClassName, workDataInstanse, urlInstanse } from 'helpers'
import { Appearance } from 'types'

import styles from './styles.css'

export const Cards = () => {
  const cardsWrapper = createElementWithClassName({ tagName: 'div', classname: styles.cardsWrapper })

  const renderCards = () => {
    cardsWrapper.replaceChildren()
    workDataInstanse.updateProductsWithRange()

    const products = workDataInstanse.getAllProducts()

    if (products.length) {
      const searchAppearance: Appearance = urlInstanse.getAppearanceParam()
      cardsWrapper.setAttribute(DATA_ATTRIBUTE.DATA_GRID_APPEARANCE, searchAppearance)

      cardsWrapper.append(
        ...products.map((product) =>
          searchAppearance === 'standart' ? ProductCard(product) : ProductCardFull(product),
        ),
      )

      return
    }

    cardsWrapper.removeAttribute(DATA_ATTRIBUTE.DATA_GRID_APPEARANCE)
    cardsWrapper.append(StubLayout({ text: 'Product Not Found' }))
  }

  urlInstanse.addCallback(renderCards, 'end')

  return cardsWrapper
}
