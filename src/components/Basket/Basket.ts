import { Link } from 'components/Link'
import { createElementWithClassName } from 'helpers/createElementWithClassName'
import { routerPathes } from 'router/routerPathes'

import styles from './styles.css'

export const Basket = () => {
  const span = createElementWithClassName({ tagName: 'span', classname: styles.basketImage })

  return Link({ children: span, href: routerPathes.basket, classname: styles.basket })
}
