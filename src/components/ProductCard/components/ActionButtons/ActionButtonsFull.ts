import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { AddToCartButton } from './components/AddToCartButton'
import { ViewDealButton } from './components/ViewDealButton'

export const ActionButtonsFull = ({ id, category, brand, price, discount }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.actionButtons, styles.full] })

  wrapper.append(ViewDealButton({ brand, category, id, appearance: 'full' }))

  wrapper.append(
    AddToCartButton({
      textInBasket: 'Remove From Cart',
      textNotInBasket: 'Add To Cart',
      id,
      appearance: 'full',
      price,
      discount,
    }),
  )

  return wrapper
}
