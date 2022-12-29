import { IProduct } from '../../../../interfaces/IProduct'
import { createElementWithClassName } from '../../../../helpers/createElementWithClassName'
import { CartList } from './components/CartList'
import { HeaderItem } from './components/HeaderItem'
import { Summary } from './components/Summary'
import { Text } from 'components/Text'
import styles from './styles.css'

export const Cart = (products: IProduct[]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const productsInCartBlock = createElementWithClassName({ tagName: 'div', classname: styles.block })
  const summaryBlock = createElementWithClassName({ tagName: 'div', classname: styles.block })

  if (products.length > 0) {
    productsInCartBlock.append(HeaderItem(products.length))
    summaryBlock.append(Text({ tagName: 'h2', text: 'Summary', classname: styles.header }))
    container.append(productsInCartBlock)
    products.forEach((product, i) => {
      productsInCartBlock.append(CartList(product, i + 1))
    })
    summaryBlock.append(Summary())
    container.append(summaryBlock)
  }

  return container
}
