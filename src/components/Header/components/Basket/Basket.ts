import { Link } from 'components/Link'
import styles from './styles.css'

export const Basket = (async () => {
  const content = document.createDocumentFragment()

  const span = document.createElement('span')
  styles.basketImage && span.classList.add(styles.basketImage)

  content.append(span, 'Basket')

  const link = await Link({ id: 'basket', children: content, href: '/basket' })

  styles.basket && link.classList.add(styles.basket)

  return link
})()
