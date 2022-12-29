import { ActionButtonsProps } from './types'
import styles from './styles.css'
import { Link } from 'components/Link'
import { routerPathes } from 'router/routerPathes'
import { createElementWithClassName, localStorageInstanse } from 'helpers'
import { AddToCartButton } from 'components/ProductCard/components/ActionButtons/components/AddToCartButton'

export const ActionButtons = ({ id, category, brand, price, discount }: ActionButtonsProps) => {
  const wrapper = createElementWithClassName({ tagName: 'div', classname: styles.actionButtons })

  const link = Link({
    id: `${category}-${brand}-${id}`,
    children: 'Buy Now',
    href: localStorageInstanse.hasProductId(id) ? '#' : routerPathes.basket,
    classname: styles.buyButton,
  })

  link.addEventListener('click', () => {
    if (!localStorageInstanse.hasProductId(id)) {
      link.href = routerPathes.basket
      localStorageInstanse.setProduct({ id, count: 1, price, discount })
      localStorageInstanse.updateBasket()
    }
  })

  wrapper.append(link, AddToCartButton({ id, textInBasket: '-', textNotInBasket: '+', price, discount }))
  return wrapper
}
