import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { Link } from 'components/Link'
import { routerPathes } from 'router/routerPathes'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { AddToCartButton } from 'components/ProductCard/components/ActionButtons/components/AddToCartButton'

export const ActionButtons = ({ id, category, brand, price, discount }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.actionButtons })

  const handleClick = () => {
    if (!localStorageInstanse.hasProductId(id)) {
      localStorageInstanse.setProduct({ id, count: 1, price, discount })
      localStorageInstanse.updateBasket()
    }
  }

  const link = Link({
    id: `${category}-${brand}-${id}`,
    children: 'Buy Now',
    href: localStorageInstanse.hasProductId(id) ? '#' : `${routerPathes.basket}?isOpenModal`,
    onClickBeforeHistoryPush: handleClick,
    classname: styles.buyButton,
  })

  wrapper.append(link, AddToCartButton({ id, textInBasket: '-', textNotInBasket: '+', price, discount }))
  return wrapper
}
