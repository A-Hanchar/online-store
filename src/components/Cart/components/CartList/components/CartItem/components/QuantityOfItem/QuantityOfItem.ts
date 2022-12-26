import { addClassnameToElement } from './../../../../../../../../helpers/addClassnameToElement'
import { Button } from './../../../../../../../Button/Button'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Price } from 'components/ProductCard/components/ProductInfo/components/Price'

export const QuantityOfItem = ({ stock, price, discountPercentage }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })
  const block = createElementWithClassName({ tagName: 'div', classname: styles.block })

  const stockItem = Text({ tagName: 'span', text: `Stock: ${stock}`, classname: styles.stock })
  const btnMin = Button({ children: '-', classname: styles.btnMin })
  const num = Text({ tagName: 'span', text: '1', classname: styles.num })
  const btnPlus = Button({ children: '+', classname: styles.btnPlus })
  const priceItem = Price({ price, discountPercentage })
  addClassnameToElement({ element: priceItem, classname: styles.price })

  block.append(btnMin, num, btnPlus)

  container.append(block, stockItem, priceItem)

  return container
}
