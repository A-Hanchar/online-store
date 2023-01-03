import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { AddToCartButton } from 'components/ProductCard/components/ActionButtons/components/AddToCartButton'
import { Button } from 'components/Button'
import { renderComponent } from 'router'
import { routerPathes } from 'router/routerPathes'
import { FormName } from 'types'
import { SEARCH_PARAMS, SYMBOL } from 'enums'

export const ActionButtons = ({ id, price, discount }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.actionButtons })

  const handleBuyButtonClick = () => {
    if (!localStorageInstanse.hasProductId(id)) {
      localStorageInstanse.setProduct({ id, count: 1, price, discount })
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

  wrapper.append(buyNow, AddToCartButton({ id, textInBasket: '-', textNotInBasket: '+', price, discount }))
  return wrapper
}
