import { Link } from 'components/Link'
import { createElementWithClassName } from 'helpers/createElementWithClassName'
import { routerPathes } from 'router/routerPathes'
import styles from './styles.css'

export const Basket = () => {
  const content = document.createDocumentFragment()

  const span = createElementWithClassName({ tagName: 'span', classname: styles.basketImage })

  content.append(span, 'Basket')

  return Link({ id: 'basket', children: content, href: routerPathes.basket, classname: styles.basket })
}
