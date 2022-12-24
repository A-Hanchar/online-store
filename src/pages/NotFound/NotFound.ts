import { products } from 'mock/products'
import { ProductDescriptionPage } from './../../components/ProductDescriptionPage/ProductDescriptionPage'
import { Link } from 'components/Link'
import { Text } from 'components/Text'
import styles from './styles.css'
import { routerPathes } from 'router/routerPathes'
import { modalWindow } from 'components/ModalWindow'
import { createElementWithClassName } from 'helpers'

export const NotFound = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const imageNotFound = createElementWithClassName({ tagName: 'div', classname: styles.image404 })

  container.append(
    imageNotFound,
    Text({ tagName: 'h1', text: 'Sorry, it looks like the page get lost', classname: styles.h1 }),
    Text({ tagName: 'h2', text: '(or someone has stolen it recently)', classname: styles.h2 }),
    Link({ id: 'a', children: 'Back to Home', href: routerPathes.home, classname: styles.link }),
    ProductDescriptionPage(products[0]!),
  )

  const modal = modalWindow()

  container.append(modal)

  return container
}
