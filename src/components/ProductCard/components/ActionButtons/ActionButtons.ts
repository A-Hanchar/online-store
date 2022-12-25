import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { ViewDealButton } from './components/ViewDealButton'
import { AddToCartButton } from './components/AddToCartButton'

export const ActionButtons = ({ id, category, brand }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.actionButtons, styles.standart] })

  wrapper.append(ViewDealButton({ brand, category, id }))

  const productsIds = localStorageInstanse.getProductsIds()

  if (!productsIds.includes(id)) {
    wrapper.append(AddToCartButton({ buttonText: '+', id }))
  }

  return wrapper
}
