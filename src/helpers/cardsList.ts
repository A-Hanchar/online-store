import { ProductCard, ProductCardFull } from 'components/ProductCard'
import { Appearance } from 'types'
import { workDataInstanse } from './workDataInstanse'

export const cardsList = (() => {
  workDataInstanse.setInitialProducts()

  const cardsList: Record<number, Record<Appearance, HTMLDivElement>> = {}

  workDataInstanse.getAllProducts().forEach((product) => {
    cardsList[product.id] = {
      standart: ProductCard(product),
      full: ProductCardFull(product),
    }
  })

  return cardsList
})()
