import { Button } from './../../../../../../../Button/Button'
import { createElementWithClassName } from 'helpers'
import styles from './styles.css'
import { Text } from 'components/Text'
import { Price } from 'components/ProductCard/components/ProductInfo/components/Price'

export const QuantityOfItem = ({ stock, price, discountPercentage }) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const stockItem = Text({ tagName: 'span', text: `Stock: ${stock}`, classname: styles.stock })
  const btnMin = Button({ children: '-', classname: styles.btnMin })
  const btnPlus = Button({ children: '+', classname: styles.btnPlus })
  const priceItem = Price({ price, discountPercentage })

  container.append(stockItem, btnMin, btnPlus, priceItem)

  return container
}
