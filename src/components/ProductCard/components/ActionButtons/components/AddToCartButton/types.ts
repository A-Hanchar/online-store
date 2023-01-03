import { Appearance } from 'types'

export type AddToCartButtonProps = {
  textInBasket: string
  textNotInBasket: string
  id: number
  appearance?: Appearance
  price: number
  discount: number
}
