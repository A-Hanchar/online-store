import { createElementWithClassName } from 'helpers'

import { AddToCartButton } from './components/AddToCartButton'
import { ViewDealButton } from './components/ViewDealButton'
import styles from './styles.css'
import { ActionButtonsProps } from './types'

export const ActionButtons = ({ id, category, brand, price, discount }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.actionButtons, styles.standart] })

  wrapper.append(
    ViewDealButton({ brand, category, id }),
    AddToCartButton({ id, textInBasket: '—', textNotInBasket: '+', price, discount }),
  )

  return wrapper
}
