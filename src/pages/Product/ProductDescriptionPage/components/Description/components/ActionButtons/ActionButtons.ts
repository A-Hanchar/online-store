import { Button } from 'components/Button'
import { SEARCH_PARAMS, SYMBOL } from 'enums'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { renderComponent } from 'router'
import { routerPathes } from 'router/routerPathes'
import { FormName } from 'types'

import { AddToCartButton } from '../AddToCartButton'
import styles from './styles.css'
import { ActionButtonsProps } from './types'

export const ActionButtons = ({ discountPercentage, id, price }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.actionButtons })

  const handleBuyButtonClick = () => {
    if (!localStorageInstanse.hasProductId(id)) {
      localStorageInstanse.setProduct({ id, count: 1, price, discount: discountPercentage })
      localStorageInstanse.updateBasket()
    }

    const formName: FormName = 'orderForm'
    const url = `${routerPathes.basket}?${SEARCH_PARAMS.MODAL}${SYMBOL.EQUAL}${formName}`

    window.history.pushState({}, '', url)
    renderComponent()
  }

  const buyNow = Button({
    classname: styles.buyButton,
    children: 'Buy Now',
    onclick: handleBuyButtonClick,
  })

  wrapper.append(
    buyNow,
    AddToCartButton({
      id,
      textInBasket: 'Remove From Cart',
      textNotInBasket: 'Add To Cart',
      price,
      discountPercentage,
    }),
  )

  return wrapper
}
