import { createElementWithClassName, workDataInstanse } from 'helpers'
import { cardsList } from 'helpers/cardsList'
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

    cardsWrapper.append(...workDataInstanse.getAllProducts().map(({ id }) => cardsList[id]![searchAppearance]))
  }

  urlInstanse.addCallback(renderCards, 'end')

  return cardsWrapper
}
