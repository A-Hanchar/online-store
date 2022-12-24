import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { AddToCartButton } from './components/AddToCartButton'
import { ViewDealButton } from './components/ViewDealButton'

export const ActionButtonsFull = ({ id, category, brand }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: [styles.actionButtons, styles.full] })

  wrapper.append(ViewDealButton({ brand, category, id, appearance: 'full' }))

  const productsIds = localStorageInstanse.getProductsIds()

  if (!productsIds.includes(id)) {
    wrapper.append(AddToCartButton({ buttonText: 'Add To Cart', id, appearance: 'full' }))
  }

  return wrapper
}
