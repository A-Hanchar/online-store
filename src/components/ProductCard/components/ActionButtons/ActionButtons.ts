import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { createElementWithClassName } from 'helpers'
import { ViewDealButton } from './components/ViewDealButton'
import { AddToCartButton } from './components/AddToCartButton'

export const ActionButtons = ({ id, category, brand, price, discount }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.actionButtons, styles.standart] })

  wrapper.append(
    ViewDealButton({ brand, category, id }),
    AddToCartButton({ id, textInBasket: '—', textNotInBasket: '+', price, discount }),
  )

  return wrapper
}
