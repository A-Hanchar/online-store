import { IProduct } from './../../interfaces/IProduct'
import { createElementWithClassName } from './../../helpers/createElementWithClassName'
import { CartList } from './components/CartList'
import { HeaderItem } from './components/HeaderItem'
import { Summary } from './components/Summary'
import { getPricesByDiscount } from 'helpers'
import { Text } from 'components/Text'
import styles from './styles.css'

export const Cart = (products: IProduct[]) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const productsInCartBlock = createElementWithClassName({ tagName: 'div', classname: styles.block })
  const summaryBlock = createElementWithClassName({ tagName: 'div', classname: styles.block })

  const getFullPrice = function (arr: IProduct[]) {
    return arr
      .reduce((prev, cur) => prev + getPricesByDiscount(cur.price, cur.discountPercentage).priceWithDiscount, 0)
      .toFixed(2)
  }

  if (products.length > 0) {
    productsInCartBlock.append(HeaderItem())
    summaryBlock.append(Text({ tagName: 'h2', text: 'Summary', classname: styles.header }))
    container.append(productsInCartBlock)
    products.forEach((product) => {
      productsInCartBlock.append(CartList(product))
    })
    summaryBlock.append(Summary(products.length, +getFullPrice(products)))
    container.append(summaryBlock)
  }

  return container
}
